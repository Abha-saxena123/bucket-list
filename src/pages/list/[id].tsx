import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { DreamDetails } from "../../modules/dream-details/components/dream-details";

const DreamDetailsPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <Wrapper>
      <DreamDetails id={id as string}/>
    </Wrapper>
  );
};

export default DreamDetailsPage;

const Wrapper = styled.div`
  background-image: url(/default-details-image.jpg);
  background-size: cover;
`;
