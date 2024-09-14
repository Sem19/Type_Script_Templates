// react
import { FC, useEffect, useState } from "react";
// styles
import styles from "./TestPage.module.scss";
import { useSelector } from "react-redux";
import { getEpisodeState } from "@/enteties/episode/model/selectors/episodeSelectors";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { EpisodeItemList } from "@/enteties/episode/ui/EpisodeItemList/EpisodeItemList";
import { episodesService } from "@/enteties/episode/model/services/episodeServices";

interface TestPageProps {}

export const TestPage: FC<TestPageProps> = ({}) => {
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    episodesService
      .getAllEpisodes()
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
      <EpisodeItemList episodes={data?.results} />
    </div>
  );
};
