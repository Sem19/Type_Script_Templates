import { AppDispatch } from "@/app/config/store/createReduxStore";
import { StateSchema } from "@/app/config/store/stateSchema";
import { episodeActionCreators } from "../actionCreators/episodeActionCreators";
import { episodesService } from "../services/episodeServices";

export const getAllEpisodes =
  (meta: Parameters<typeof episodesService.getAllEpisodes>[0]) =>
  (dispatch: AppDispatch) => {
    const { setEpisode, setError, setIsLoading } = episodeActionCreators;

    dispatch(setIsLoading(true));

    episodesService
      .getAllEpisodes(meta)
      .then(({ data }) => {
        dispatch(setEpisode(data.results));
        dispatch(setError(""));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

export const getSingleEpisode = (
  id: Parameters<typeof episodesService.getSingleEpisode>[0]
) => {
  return (dispatch: AppDispatch, getState: () => StateSchema) => {
    const { setSingleEpisode, setError, setIsLoading } = episodeActionCreators;

    dispatch(setIsLoading(true));

    episodesService
      .getSingleEpisode(id)
      .then(({ data }) => {
        dispatch(setSingleEpisode(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};
