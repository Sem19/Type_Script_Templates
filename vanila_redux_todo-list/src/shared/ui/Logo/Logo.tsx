// react
import { FC } from "react";
import { Link } from "react-router-dom";
// constants
import { getHomeRoute } from "../../libs/constants/routes";
// assets
import LogoBlack from "../../libs/assets/svg/Logo_black.svg?react";
import LogoWhite from "../../libs/assets/svg/Logo_white.svg?react";
// styles
import styles from "./Logo.module.scss";

interface LogoProps {
  colorVariant: "black" | "white";
}

export const Logo: FC<LogoProps> = ({ colorVariant }) => {
  return (
    <Link to={getHomeRoute()} className={styles.Logo}>
      {colorVariant === "white" ? <LogoWhite /> : <LogoBlack />}
    </Link>
  );
};
