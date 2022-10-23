import { useState } from "react";
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Input,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { Form } from "../../common/components/form/form";
import { StyledInput } from "../../common/components/form/form.styles";
import { StyledInputLabel } from "../../dream-list/components/dream-list.styles";
import { AddUserPassword } from "../../users/components/add-user.styles";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import getConfig from "next/config";
import { encryptData } from "../../common/utils/helpers/encryption.helpers";
import { RedirectableProviderType } from "next-auth/providers";
import { MyBucketListText, StyledDiv } from "../../../pages/cover";
import { SubmitFormLayout } from "../../../pages";
import Link from "next/link";

const {
  publicRuntimeConfig: { hostUrl },
} = getConfig();

interface LoginProps {
  userName: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [showLoader, setLoader] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | string[] | null>(null);
  const { register, handleSubmit, reset } = useForm();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError("");
    // setEmail(e.target.value.trim());
  };

  useEffect(() => {
    if (router.query.error) {
      // setLoginError(SIGNIN_ERRORS[router.query.error as keyof SignInErrors] ?? router.query.error);
    }
  }, [router]);

  const handleFormSubmit = async (data: LoginProps) => {
    const { userName, password } = data;

    setLoginError(null);
    setLoader(true);

    const encryptedPassword = encryptData(password);

    const res = await signIn<RedirectableProviderType>("credentials", {
      redirect: false,
      userName: userName,
      password: encryptedPassword,
      callbackUrl: `${hostUrl}/`,
    });

    if (res?.error) {
      setLoginError(res?.error);
    }

    setLoader(false);

    if (res?.ok) {
      if (res.url) {
        router.replace(res.url);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)} isLogin={true}>
      <StyledDiv className="glow">
        <StyledInput
          required
          placeholder="Enter User name"
          type={"text"}
          {...register("userName")}
        />
        <MyBucketListText />

        <SubmitFormLayout>
          <StyledInput placeholder="Enter Password" {...register("password")} />
          <div>
            <button type="submit">Submit</button>
            <Link href={"/add-user"}>Sign Up</Link>
          </div>
        </SubmitFormLayout>
      </StyledDiv>
    </Form>
  );
};
