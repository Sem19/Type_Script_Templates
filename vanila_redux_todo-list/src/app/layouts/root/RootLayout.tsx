// react
import { FC } from "react";
import { Outlet } from "react-router-dom";
// widgets
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/header/ui/Footer/Footer";
// styles
import styles from "./RootLayout.module.scss";

interface RootLayoutProps {}

export const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div className={styles.RootLayout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
