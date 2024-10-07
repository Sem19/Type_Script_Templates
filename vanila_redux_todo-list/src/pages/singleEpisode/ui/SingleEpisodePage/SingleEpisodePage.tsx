// react
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
// ui
import { EpisodeItem } from "@/enteties/episode/ui/EpisodeItem/EpisodeItem";
import { getEpisodeState } from "@/enteties/episode/model/selectors/episodeSelectors";
// styles
import styles from "./SingleEpisodePage.module.scss";
import { getSingleEpisode } from "@/enteties/episode/model/thunks/episodeThunks";

interface SingleEpisodePageProps {}

export const SingleEpisodePage: FC<SingleEpisodePageProps> = ({}) => {
  const { id } = useParams<{ id: string }>();

  const { error, isLoading, singleEpisode } = useSelector(getEpisodeState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleEpisode(Number(id)));
  }, []);

  if (error || !singleEpisode) {
    return <div>{error}</div>;
  }
  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles.SingleEpisodePage}>
      <EpisodeItem {...singleEpisode} />
      <p>{singleEpisode.url}</p>
    </div>
  );
};
