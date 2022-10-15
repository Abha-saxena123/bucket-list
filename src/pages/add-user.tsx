import type { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AuthLayout } from "../modules/common/components/layout/auth-layout";
import { AddUserFrom } from "../modules/users/components/add-user-form";

type NextPageWithAuthLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

const AddUserPage: NextPageWithAuthLayout = () => {
  return <AddUserFrom />;
};

AddUserPage.auth =false;


AddUserPage.getLayout = (page: ReactElement): ReactNode => <AuthLayout>{page}</AuthLayout>;


export default AddUserPage;
