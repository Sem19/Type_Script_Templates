import { AppDispatch } from "@/app/config/store/createReduxStore";
import { StateSchema } from "@/app/config/store/stateSchema";
import { locationActionCreators } from "../actionCreators/locationActionCreators";
import { locationsService } from "../services/locationServices";

export const getAllLocations = (
  dispatch: AppDispatch,
  getState: () => StateSchema
) => {
  const { setLocations, setError, setIsLoading } = locationActionCreators;

  dispatch(setIsLoading(true));

  locationsService
    .getAllLocations({ searchQuery: "" })
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
  return (dispatch: AppDispatch, getState: () => StateSchema) => {
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
