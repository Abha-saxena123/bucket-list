import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { ReactNode, ReactElement, useState, FormEventHandler } from "react";
import Link from "next/link";
import getConfig from "next/config";
import { encryptData } from "../modules/common/utils/helpers/encryption.helpers";
import { RedirectableProviderType } from "next-auth/providers";

type NextPageWithAuthLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

const {
  publicRuntimeConfig: { hostUrl },
} = getConfig();

const Home: NextPage = () => {
  const router = useRouter();
  const { data: sessionData } = useSession({ required: true });

  const handleClick = () => {
    router.push("/list");
  };

  const name = sessionData?.user?.name as string;
  return (
    <IndexWrapper>
      <StyledDiv className="glow">
        <h1>Name: {name}</h1>
        <MyBucketListText />
        <StyledLink>
          <Link href="/list" id="index-page">
            Open
          </Link>
        </StyledLink>
      </StyledDiv>
    </IndexWrapper>
  );
};

export default Home;

export const MyBucketListText: React.FC = () => {
  return (
    <div>
      <h2>{"- My -"}</h2>
      <h2>{"Bucket"}</h2>
      <h2>{"List"}</h2>
    </div>
  );
};

export const SubmitFormLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    margin-bottom: 10px;
    > button {
      margin-right: 12px;
      color: rgb(118, 118, 118);
      background-color: #4a0404;
    }
  }
`;

export const IndexWrapper = styled.div`
  justify-self: center;
  .glow {
    color: #4a0404;
    text-align: center;
    text-shadow: 0 0 7px lightCoral, 0 0 10px lightCoral, 0 0 21px lightCoral,
      0 0 42px coral, 0 0 82px coral, 0 0 92px coral, 0 0 102px coral,
      0 0 151px coral;
  }
  height: 95vh;
  width: 450px;
  background-image: url(/cover.gif);
  box-shadow: inset 0px 0px 0px 0px rgb(240 128 128), 0px 0px 9px black,
    0px 0px 10px green;
  border-radius: 10px;
`;

export const StyledDiv = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 20px;

  > div {
    > h2 {
      font-size: 80px;
      margin: 0;
    }
  }
  margin-left: 24px;
`;

const StyledLink = styled.div`
  padding: 16px;
  a {
    text-decoration: none;
    color: #4a0404;
    padding: 4px;
    margin-bottom: 10px;
    border-radius: 25%;
    border: 2px solid #4a0404;
    background-color: coral;
    :hover: {
      box-shadow: inset 0px 0px 0px 0px rgb(240 128 128), 0px 0px 9px black,
        0px 0px 10px green;
    }
  }
`;
