import { AppDispatch } from "@/app/config/store/createReduxStore";
import { StateSchema } from "@/app/config/store/stateSchema";
import { episodeActionCreators } from "../actionCreators/episodeActionCreators";
import { episodesService } from "../services/episodeServices";
import { characterActionCreators } from "@/enteties/character/model/actionCreators/characterActionCreators";

export const getAllEpisodes = (
  dispatch: AppDispatch,
  getState: () => StateSchema
) => {
  const { setEpisode, setError, setIsLoading } = episodeActionCreators;

  dispatch(setIsLoading(true));

  episodesService
    .getAllEpisodes()
    .then(({ data }) => {
      dispatch(setEpisode(data.results));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};
