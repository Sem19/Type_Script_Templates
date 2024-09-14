// react
import { FC } from "react";
// styles
import styles from "./EpisodeItem.module.scss";
import { IEpisode } from "../../model/types/episodeTypes";

interface EpisodeItemProps extends IEpisode {}

export const EpisodeItem: FC<EpisodeItemProps> = ({
  air_date,
  characters,
  created,
  episode,
  id,
  name,
  url,
}) => {
  return (
    <div className={styles.EpisodeItem}>
      <div>
        <h3>GET</h3>
        <p>https://rickandmortyapi.com/api/episode/{id}</p>
      </div>
      <hr className={styles.separator} />
      <div>
        <span className={styles.key}>"id" : </span>
        <span>{id}</span>
      </div>
      <div>
        <span className={styles.key}>"name" : </span>
        <span>{name}</span>
      </div>
      <div>
        <span className={styles.key}>"air_date" : </span>
        <span>{air_date}</span>
      </div>
      <div>
        <span className={styles.key}>"episode" : </span>
        <span>{episode}</span>
      </div>
      <div>
        <span className={styles.key}>"url" : </span>
        <span>{url}</span>
      </div>
      <div>
        <span className={styles.key}>"created" : </span>
        <span>{created}</span>
      </div>
    </div>
  );
};
