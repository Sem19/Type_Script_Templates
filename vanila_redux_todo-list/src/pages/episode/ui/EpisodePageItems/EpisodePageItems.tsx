// react
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getEpisodeState } from "@/enteties/episode/model/selectors/episodeSelectors";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { getAllEpisodes } from "@/enteties/episode/model/thunks/episodeThunks";
//ui
import { EpisodeItemList } from "@/enteties/episode/ui/EpisodeItemList/EpisodeItemList";
// styles

interface EpisodePageItemsProps {}

export const EpisodePageItems: FC<EpisodePageItemsProps> = ({}) => {
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

  return <EpisodeItemList episodes={episodes} />;
};
