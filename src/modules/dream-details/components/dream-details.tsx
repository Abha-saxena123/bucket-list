import { ObjectId } from "mongodb";
import { useRouter } from "next/router";
import styled from "styled-components";
import { InfoTile } from "../../common/components/infotile/infotile";
import { useDreamDetails } from "../hooks/use-dream-details";
import { DreamDetailsProps } from "../types/dream-details";

const dreamDetail: DreamDetailsProps = {
  id: "1",
  title: "Dream",
  description: "This is my dream destination",
  remarks: "",
  experience: "Loved it",
};

export const DreamDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading } = useDreamDetails(id);

  if (isLoading) {
    return <>...Loading</>;
  }

  const dreamDetail = data as DreamDetailsProps;

  return (
    <DreamDetailsWrapper>
      <InfoTile label={"Title"}>{dreamDetail.title}</InfoTile>
      <InfoTile label={"Description"} fontSizeChildren={16}>
        {dreamDetail.description}
      </InfoTile>
      {!!dreamDetail.remarks && (
        <InfoTile label={"Remarks"} fontSizeChildren={16}>
          {dreamDetail.remarks}
        </InfoTile>
      )}
      {dreamDetail.isDone && (
        <InfoTile label={"Experience"} fontSizeChildren={16}>
          {dreamDetail.experience}
        </InfoTile>
      )}
    </DreamDetailsWrapper>
  );
};

const DreamDetailsWrapper = styled.div`
  padding: 20px 100px;
  padding-bottom: 0;
  height: 100vh;
  text-align: center;
  background-size: cover;
`;
