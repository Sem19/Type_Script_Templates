// react
import { FC } from "react";
// ui
import { CharacterPageItems } from "../CharacterPageItems/CharacterPageItems";
// styles
import styles from "./CharacterPage.module.scss";
import { CharacterSearchInput } from "../CharacterSearchInput/CharacterSearchInput";

interface CharacterPageProps {}

export const CharacterPage: FC<CharacterPageProps> = ({}) => {
  return (
    <div className={styles.CharacterPage}>
      <h2 className={styles.title}>Characters</h2>
      <div className={styles.CharacterSearchInput}>
        <CharacterSearchInput />
      </div>
      <CharacterPageItems />
    </div>
  );
};
