import React, { ReactNode, useEffect } from "react";
import { Footer } from "./footer/footer";
import {
  AppLayout,
  AppContent,
  AppWrapper,
  AppSideImage,
} from "./layout.styles";
import { Header } from "./header/header";
import { useRouter } from "next/router";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
      });
    });
  }, [router.events]);

  return (
    <AppLayout>
      {/* <Header /> */}
      <AppContent>{children}</AppContent>
      {/* <Footer /> */}
    </AppLayout>
  );
};
