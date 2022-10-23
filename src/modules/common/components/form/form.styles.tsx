import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledInput = styled.input`
  background-color: #4a0404;
  color: lightCoral;
  width: 200px;
  height: 30px;
  margin-bottom: 20px;
`;

export const FormSubmitButton = styled(Button)`
  background-color: #4a0404;
  height: 30px;
  color: lightCoral;
  width: 200px;
  margin 10px !important;
`;

export const FormContainer = styled.div<{ isLogin?: boolean }>`
  display: flex;
  height: 100%;
  margin: 10px;
  position: ${({ isLogin }) => (isLogin ? "unset" : "relative")};
  left: 24%;
  width: ${({ isLogin }) => (isLogin ? 100 : 50)}%;
`;
