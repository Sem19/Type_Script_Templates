// react
import { FC } from "react";
// styles
import styles from "./EpisodeItemList.module.scss";
import { IEpisode } from "../../model/types/episodeTypes";
import { EpisodeItem } from "../EpisodeItem/EpisodeItem";

interface EpisodeItemListProps {
  episodes: IEpisode[];
}

export const EpisodeItemList: FC<EpisodeItemListProps> = ({ episodes }) => {
  return (
    <div className={styles.EpisodeItemList}>
      {episodes?.map((item) => {
        return <EpisodeItem {...item} />;
      })}
    </div>
  );
};
