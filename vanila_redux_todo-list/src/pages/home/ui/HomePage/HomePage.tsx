// react
import { FC } from "react";
// styles
import styles from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import {
  getCharacterRoute,
  getEpisodeRoute,
  getLocationRoute,
} from "@/shared/libs/constants/routes";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles.HomePage}>
      <Link to={getCharacterRoute()}>Characters</Link>
      <Link to={getEpisodeRoute()}>Episodes</Link>
      <Link to={getLocationRoute()}>Locations</Link>
    </div>
  );
};
