// react
import { FC } from "react";
//ui
import { EpisodePageItems } from "../EpisodePageItems/EpisodePageItems";
// styles
import styles from "./EpisodePage.module.scss";

interface EpisodePageProps {}

export const EpisodePage: FC<EpisodePageProps> = ({}) => {
  return (
    <div className={styles.EpisodPage}>
      <h2 className={styles.title}>Get all episodes</h2>
      <EpisodePageItems />
    </div>
  );
};
