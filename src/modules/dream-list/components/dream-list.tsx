import Link from "next/link";
import { BucketListProps, Users } from "../types/dream-list.types";
import { TabPanel } from "../helpers/dream-list.helper";
import {
  ListTabContainer,
  ListValueContainer,
  ListValueWrapper,
  AddItemLink,
  AddLinkWrapper,
  ListItemWrapper,
  ListTrophy,
} from "./dream-list.styles";
import { Typography } from "../../common/components/typography/typography";
import { FontType } from "../../common/utils/constants/typography.constants";
import { useDreamList } from "../hooks/use-dream-list";
import { Button } from "@material-ui/core";
import { MarkItDoneFrom } from "./add-experience-form";
import Error from "../../common/components/error/errors";

export const DreamList: React.FC<{
  firstName: string;
}> = ({ firstName }) => {
  const { data, isLoading, refetch, isError, error } = useDreamList(firstName);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  const openForm = () => {
    (document.getElementById("markDonePopup") as HTMLElement).style.display =
      "block";
  };

  const items = data as BucketListProps[];

  return (
    <ListTabContainer>
      <div
        style={{
          height: "50px",
          borderBottom: "2px solid darkcyan",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingTop: "10px",
        }}
      >
        <Typography fontType={FontType.HEADLINE1} color={'maroon'}>
          {`Hi ${firstName}, Here is your dream list`}
        </Typography>
      </div>
      <ListValueContainer>
        {items.map((dream, idx) => (
          <ListValueWrapper key={`key_${idx}`}>
            <ListItemWrapper>
              <Typography fontType={FontType.COPY_LARGE_BOLD}>
                <Link href={`/list/${dream._id}`}>{dream.title}</Link>
              </Typography>
              <Button onClick={openForm}>
                <ListTrophy isDone={dream.isDone}>🏆</ListTrophy>
              </Button>
              <MarkItDoneFrom
                id={dream._id}
                isDone={dream.isDone}
                refetch={refetch}
              />
            </ListItemWrapper>
            {idx === items.length - 1 && (
              <Link href="/add-dream">
                <AddItemLink />
              </Link>
            )}
          </ListValueWrapper>
        ))}
        {items.length === 0 && (
          <AddLinkWrapper>
            <Link href="/add-dream">
              <AddItemLink />
            </Link>
          </AddLinkWrapper>
        )}
        {/* </TabPanel> */}
      </ListValueContainer>
    </ListTabContainer>
  );
};
