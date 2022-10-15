import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledInput = styled(TextField)`
  margin: 10px !important;
`;

export const FormSubmitButton = styled(Button)`
  background-color: darkcyan !important;
  margin 10px !important;
`;

export const FormContainer = styled.div<{ isLogin?: boolean }>`
  display: flex;
  background-color: cream;
  border: 5px solid darkcyan;
  margin: 10px;
  position: ${({ isLogin }) => (isLogin ? "unset" : "relative")};
  left: 24%;
  width: ${({ isLogin }) => (isLogin ? 100 : 50)}%;
`;
