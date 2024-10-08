// react
import { FC } from "react";
//ui
import { EpisodeSearchInput } from "../EpisodeSearchInput/EpisodeSearchInput";
import { EpisodePageItems } from "../EpisodePageItems/EpisodePageItems";
// styles
import styles from "./EpisodePage.module.scss";

interface EpisodePageProps {}

export const EpisodePage: FC<EpisodePageProps> = ({}) => {
  return (
    <div className={styles.EpisodPage}>
      <div className={styles.EpisodeSearchInput}>
        <EpisodeSearchInput />
      </div>
      <EpisodePageItems />
    </div>
  );
};
