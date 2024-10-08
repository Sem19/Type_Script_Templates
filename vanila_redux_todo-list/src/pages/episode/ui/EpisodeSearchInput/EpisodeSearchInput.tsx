// react
import { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { getEpisodeSearchQueryState } from "@/enteties/episode/model/selectors/episodeSelectors";
import { episodeActionCreators } from "@/enteties/episode/model/actionCreators/episodeActionCreators";
import { Input } from "@/shared/ui/Input";
// styles

interface EpisodeSearchInputProps {}

export const EpisodeSearchInput: FC<EpisodeSearchInputProps> = ({}) => {
  const searchQuery = useSelector(getEpisodeSearchQueryState);

  const dispatch = useDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(episodeActionCreators.setEpisodeSearchQuery(e.target.value));
  };

  return (
    <Input
      value={searchQuery}
      onChange={onInputChange}
      placeholder="Enter episode name"
    />
  );
};
