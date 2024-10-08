import { AppDispatch } from "@/app/config/store/createReduxStore";
import { characterActionCreators } from "../actionCreators/characterActionCreators";
import { characterService } from "../services/characterServices";

export const getAllCharacters =
  (meta: Parameters<typeof characterService.getAllCharacters>[0]) =>
  (dispatch: AppDispatch) => {
    const { setCharacters, setError, setIsLoading } = characterActionCreators;

    dispatch(setIsLoading(true));

    characterService
      .getAllCharacters(meta)
      .then(({ data }) => {
        dispatch(setCharacters(data.results));
        // dispatch(setError(""));
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
  return (dispatch: AppDispatch) => {
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
