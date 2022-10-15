import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AuthLayout } from '../../modules/common/components/layout/auth-layout';
import dynamic from 'next/dynamic';

const LoginFormWithNoSSR = dynamic<Record<string, unknown>>(
  () => import('../../modules/auth/components/login-form').then((module) => module.LoginForm),
  { ssr: false }
);

type NextPageWithAuthLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

const LoginPage: NextPageWithAuthLayout = () => {
  return <LoginFormWithNoSSR />;
};

LoginPage.auth = false;

LoginPage.getLayout = (page: ReactElement): ReactNode => <AuthLayout>{page}</AuthLayout>;

export default LoginPage;
