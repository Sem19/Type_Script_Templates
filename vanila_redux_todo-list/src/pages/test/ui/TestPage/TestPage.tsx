// react
import { FC, useEffect } from "react";
// styles
import styles from "./TestPage.module.scss";
import { EpisodeItemList } from "@/enteties/episode/ui/EpisodeItemList/EpisodeItemList";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodeState } from "@/enteties/episode/model/selectors/episodeSelectors";
import { getAllEpisodes } from "@/enteties/episode/model/thunks/episodeThunks";

interface TestPageProps {}

export const TestPage: FC<TestPageProps> = ({}) => {
  const { episodes, isLoading, error } = useSelector(getEpisodeState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEpisodes);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.EpisodPage}>
      <h2 className={styles.title}>Get all episodes</h2>
      <EpisodeItemList episodes={episodes} />
    </div>
  );
};
