import type { NextPage } from "next";
import styled from "styled-components";
import { IndexWrapper, StyledDiv } from ".";
import { AddUserFrom } from "../modules/users/components/add-user-form";

type NextPageWithAuthLayout = NextPage & {
  auth?: boolean;
};

const AddUserPage: NextPageWithAuthLayout = () => {
  return (
    <IndexWrapper>
      <Wrapper className="glow">
        <h1>Join Here, Fulfill your dream!!</h1>
        <AddUserFrom />
      </Wrapper>
    </IndexWrapper>
  );
};

AddUserPage.auth = false;

export default AddUserPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  > div > form {
    align-items: center;
    justify-content: center;
  }
`;
