// react
import { FC } from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./EpisodeItem.module.scss";
import { IEpisode } from "../../model/types/episodeTypes";
import { getSingleEpisodeRoute } from "@/shared/libs/constants/routes";

interface EpisodeItemProps extends IEpisode {}

export const EpisodeItem: FC<EpisodeItemProps> = ({
  air_date,
  created,
  episode,
  id,
  name,
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
      <Link to={getSingleEpisodeRoute(id)}>View More</Link>
    </div>
  );
};
