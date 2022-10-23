import type { NextPage } from "next";
import { DreamList } from "../../modules/dream-list/components/dream-list";
import { useSession } from "next-auth/react";

const ListPage: NextPage = () => {
  const { data: sessionData } = useSession({ required: true });

  const name = sessionData?.user?.name as string;
  return <DreamList firstName={name} />;
};

export default ListPage;
