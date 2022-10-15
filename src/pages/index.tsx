import type { NextPage } from "next";
import { DreamList } from "../modules/dream-list/components/dream-list";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: sessionData } = useSession({ required: true });

  const firstName = sessionData?.user?.firstName as string;

  return <DreamList firstName={firstName} />;
};

export default Home;
