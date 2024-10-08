import { AppDispatch } from "@/app/config/store/createReduxStore";
import { locationActionCreators } from "../actionCreators/locationActionCreators";
import { locationsService } from "../services/locationServices";

export const getAllLocations =
  (meta: Parameters<typeof locationsService.getAllLocations>[0]) =>
  (dispatch: AppDispatch) => {
    const { setLocations, setError, setIsLoading } = locationActionCreators;

    dispatch(setIsLoading(true));

    locationsService
      .getAllLocations(meta)
      .then(({ data }) => {
        dispatch(setLocations(data.results));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

export const getSingleLocation = (
  id: Parameters<typeof locationsService.getSingleLocation>[0]
) => {
  return (dispatch: AppDispatch) => {
    const { setSingleLocation, setError, setIsLoading } =
      locationActionCreators;

    dispatch(setIsLoading(true));

    locationsService
      .getSingleLocation(id)
      .then(({ data }) => {
        dispatch(setSingleLocation(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};
