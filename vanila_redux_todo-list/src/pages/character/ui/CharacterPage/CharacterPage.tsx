// react
import { FC } from "react";
// ui
import { CharacterPageItems } from "../CharacterPageItems/CharacterPageItems";
import { CharacterSearchInput } from "../CharacterSearchInput/CharacterSearchInput";
import { CharacterPagination } from "../CharacterPagination/CharacterPagination";
// styles
import styles from "./CharacterPage.module.scss";

interface CharacterPageProps {}

export const CharacterPage: FC<CharacterPageProps> = ({}) => {
  return (
    <div className={styles.CharacterPage}>
      <div className={styles.CharacterSearchInput}>
        <CharacterSearchInput />
      </div>

      <CharacterPageItems />
      <CharacterPagination />
    </div>
  );
};
