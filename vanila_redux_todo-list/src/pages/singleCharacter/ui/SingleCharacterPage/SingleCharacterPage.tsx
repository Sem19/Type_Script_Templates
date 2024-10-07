// react
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
//ui
import { CharacterItem } from "@/enteties/character/ui/CharacterItem/CharacterItem";
import { getCharacterState } from "@/enteties/character/model/selectors/characterSelectors";
import { getSingleCharacter } from "@/enteties/character/model/thunks/characterThunks";
// styles
import styles from "./SingleCharacterPage.module.scss";

interface SingleCharacterPageProps {}

export const SingleCharacterPage: FC<SingleCharacterPageProps> = ({}) => {
  const { id } = useParams<{ id: string }>();

  const { error, isLoading, singleCharacter } = useSelector(getCharacterState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCharacter(Number(id)));
  }, []);

  if (error || !singleCharacter) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles.SingleCharacterPage}>
      <CharacterItem {...singleCharacter} />
    </div>
  );
};
