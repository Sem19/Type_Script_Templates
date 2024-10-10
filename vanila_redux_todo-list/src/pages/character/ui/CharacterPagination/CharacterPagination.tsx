// react
import { FC } from "react";

import { PaginationButtons } from "@/widgets/paginationButtons/ui/PaginationButtons/PaginationButtons";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { useSelector } from "react-redux";
import { getCharacterMetaState } from "@/enteties/character/model/selectors/characterSelectors";
import { characterActionCreators } from "@/enteties/character/model/actionCreators/characterActionCreators";

interface CharacterPaginationProps {}

export const CharacterPagination: FC<CharacterPaginationProps> = ({}) => {
  const dispatch = useDispatch();

  const { currentPage } = useSelector(getCharacterMetaState);

  const nextHandler = () => {
    dispatch(characterActionCreators.setCharacterPageForward());
  };

  const prevHandler = () => {
    dispatch(characterActionCreators.setCharacterPageBack());
  };

  return (
    <PaginationButtons
      currentPage={currentPage}
      nextHandler={nextHandler}
      prevHandler={prevHandler}
    />
  );
};
