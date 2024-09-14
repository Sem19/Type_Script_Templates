import { Dispatch } from "redux";
import { LocationActions } from "../types/locationActions";
import { StateSchema } from "@/app/config/store/stateSchema";
import { locationActionCreators } from "../actionCreators/locationActionCreators";
import { locationsService } from "../services/locationServices";

export const getAllLocations = (
  dispatch: Dispatch<LocationActions>,
  getState: () => StateSchema
) => {
  dispatch(locationActionCreators.setIsLoading(true));

  locationsService
    .getAllLocations()
    .then(({ data }) => {
      dispatch(locationActionCreators.setLocations(data.results));
    })
    .catch((error) => {
      dispatch(locationActionCreators.setError(error.message));
    })
    .finally(() => {
      dispatch(locationActionCreators.setIsLoading(false));
    });
};
