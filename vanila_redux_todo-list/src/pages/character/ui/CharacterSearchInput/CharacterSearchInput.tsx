// react
import { ChangeEvent, FC } from "react";
// styles
import styles from "./CharacterSearchInput.module.scss";
import { Input } from "@/shared/ui/Input";
import { getCharacterSearchQueryState } from "@/enteties/character/model/selectors/characterSelectors";
import { useSelector } from "react-redux";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { characterActionCreators } from "@/enteties/character/model/actionCreators/characterActionCreators";

interface CharacterSearchInputProps {}

export const CharacterSearchInput: FC<CharacterSearchInputProps> = ({}) => {
  const searchQuery = useSelector(getCharacterSearchQueryState);

  const dispatch = useDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(characterActionCreators.setCharacterSearchQuery(e.target.value));
  };

  return (
    <Input
      value={searchQuery}
      onChange={onInputChange}
      placeholder="Enter character name"
    />
  );
};
