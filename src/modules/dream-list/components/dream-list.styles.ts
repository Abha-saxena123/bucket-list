import { Button, InputLabel, TextField } from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import styled from "styled-components";

interface ListTrophyProps {
  isDone: boolean;
}

export const FormSubmitButton = styled(Button)`
  background-color: darkcyan !important;
  margin 10px !important;
`;

export const ListValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px !important;
  > div {
    a:-webkit-any-link {
      color: black;
      text-decoration: none;
    }
  }
`;

export const AddItemLink = styled(AddCircleOutlineOutlined)`
  padding-right: 10px;
`;

export const StyledInputLabel = styled(InputLabel)`
  padding: 10px !important;
`;

export const AddLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ListValueContainer = styled.div`
  padding-left: 50px;
  padding-top: 20px;
`;

export const ListTab = styled.div`
  border-bottom: 2px solid darkcyan;
`;

export const ListTabContainer = styled.div`
  flex-grow: 1;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ListTrophy = styled.div<ListTrophyProps>`
  opacity: ${({ isDone }) => (isDone ? 1 : 0.5)};
`;

export const StyledExperienceInput = styled(TextField)`
  margin: 15px !important;
  > div {
    min-height: 100px !important;
  }
`;

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 35%;
  top: 25%;
  align-items: space-between;
  justify-content: space-between;
  min-height: 200px;
  background-color: white;
  min-height: 200px;
  min-width: 400px;
`;

export const UpdateFormWrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
