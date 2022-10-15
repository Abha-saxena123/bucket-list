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
    addUser(payload, { onSuccess });
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
        id="firstName"
        label="FirstName"
        variant="outlined"
        {...register("firstName")}
      />
      <StyledInput
        required
        id="lastName"
        label="LastName"
        variant="outlined"
        {...register("lastName")}
      />
      <StyledInput
        required
        id="userName"
        label="UserName"
        variant="outlined"
        placeholder="Enter Unique User Name"
        {...register("userName")}
      />
      <AddUserPassword variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          required
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          {...register("password")}
        />
      </AddUserPassword>
    </Form>
  );
};
