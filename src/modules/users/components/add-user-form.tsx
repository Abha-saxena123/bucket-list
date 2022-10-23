import {
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../common/components/form/form";
import { StyledInput } from "../../common/components/form/form.styles";
import { Users } from "../types/users.types";
import { useAddUser } from "../hooks/use-add-user";
import { AddUserPassword } from "./add-user.styles";
import { useRouter } from "next/router";
import Error from "../../common/components/error/errors";

export const AddUserFrom: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: addUser, isError: isError, error } = useAddUser();

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  const onSubmit = async (payload: Users): Promise<void> => {
    const name = `${payload.firstName} ${payload.lastName}`;
    addUser({ ...payload, name }, { onSuccess });
  };

  const onSuccess = () => {
    reset();
    router.push("/");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitBtnTxt={"Add User"}
      isLogin={true}
    >
      <StyledInput
        required
        placeholder="Enter First Name"
        id="firstName"
        {...register("firstName")}
      />
      <StyledInput
        required
        placeholder="Enter Last Name"
        id="lastName"
        {...register("lastName")}
      />
      <StyledInput
        required
        placeholder="Enter Unique User Name"
        {...register("userName")}
      />
      <StyledInput placeholder="Enter Password" {...register("password")} />
    </Form>
  );
};
