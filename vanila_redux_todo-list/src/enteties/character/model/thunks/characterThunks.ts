import { AppDispatch } from "@/app/config/store/createReduxStore";
import { StateSchema } from "@/app/config/store/stateSchema";
import { characterActionCreators } from "../actionCreators/characterActionCreators";
import { characterService } from "../services/characterServices";

export const getAllCharacters = (
  dispatch: AppDispatch,
  getState: () => StateSchema
) => {
  const { setCharacters, setError, setIsLoading } = characterActionCreators;

  dispatch(setIsLoading(true));

  characterService
    .getAllCharacters({ searchQuery: "" })
    .then(({ data }) => {
      dispatch(setCharacters(data.results));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};

export const getSingleCharacter = (
  id: Parameters<typeof characterService.getSingleCharacter>[0]
) => {
  return (dispatch: AppDispatch, getState: () => StateSchema) => {
    const { setSingleCharacter, setError, setIsLoading } =
      characterActionCreators;

    dispatch(setIsLoading(true));

    characterService
      .getSingleCharacter(id)
      .then(({ data }) => {
        dispatch(setSingleCharacter(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};
