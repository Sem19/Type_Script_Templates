// react
import { FC } from "react";
// styles
import styles from "./CharacterItemList.module.scss";
import { CharacterItem } from "../CharacterItem/CharacterItem";

interface CharacterItemListProps {
  characters: ICharacter[];
}

export const CharacterItemList: FC<CharacterItemListProps> = ({
  characters,
}) => {
  return (
    <div className={styles.CharacterItemList}>
      {characters?.map((item) => {
        return <CharacterItem {...item} />;
      })}
    </div>
  );
};
