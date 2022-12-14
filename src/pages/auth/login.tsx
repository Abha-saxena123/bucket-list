import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AuthLayout } from "../../modules/common/components/layout/auth-layout";
import dynamic from "next/dynamic";
import { IndexWrapper } from "..";

const LoginFormWithNoSSR = dynamic<Record<string, unknown>>(
  () =>
    import("../../modules/auth/components/login-form").then(
      (module) => module.LoginForm
    ),
  { ssr: false }
);

type NextPageWithAuthLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

const LoginPage: NextPageWithAuthLayout = () => {
  const LoginForm = LoginFormWithNoSSR as any;
  return (
    <IndexWrapper>
      <LoginForm />
    </IndexWrapper>
  );
};

LoginPage.auth = false;

export default LoginPage;
