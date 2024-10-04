// react
import { FC, useEffect } from "react";
// styles
import styles from "./CharacterPageItems.module.scss";
import { getCharacterState } from "@/enteties/character/model/selectors/characterSelectors";
import { getAllCharacters } from "@/enteties/character/model/thunks/characterThunks";
import { CharacterItemList } from "@/enteties/character/ui/CharacterItemList/CharacterItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";

interface CharacterPageItemsProps {}

export const CharacterPageItems: FC<CharacterPageItemsProps> = ({}) => {
  const { characters, meta, error, isLoading } = useSelector(getCharacterState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters(meta));
  }, [meta]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <CharacterItemList characters={characters} />;
};
