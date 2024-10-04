// react
import { FC } from "react";
// styles
import styles from "./EpisodeItem.module.scss";
import { IEpisode } from "../../model/types/episodeTypes";

interface EpisodeItemProps extends IEpisode {}

export const EpisodeItem: FC<EpisodeItemProps> = ({
  air_date,
  created,
  episode,
  id,
  name,
  url,
}) => {
  return (
    <div className={styles.EpisodeItem}>
      <h2 className={styles.Title}>{name}</h2>
      <div>
        <strong>Episode Code:</strong> {episode}
      </div>
      <div>
        <strong>Air Date:</strong> {air_date}
      </div>
      <div>
        <strong>Created:</strong> {new Date(created).toLocaleDateString()}
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View More
      </a>
    </div>
  );
};
