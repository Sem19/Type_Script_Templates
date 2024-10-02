// react
import { FC } from "react";
// ui
import { CharacterPageItems } from "../CharacterPageItems/CharacterPageItems";
// styles
import styles from "./CharacterPage.module.scss";

interface CharacterPageProps {}

export const CharacterPage: FC<CharacterPageProps> = ({}) => {
  return (
    <div className={styles.CharacterPage}>
      <CharacterPageItems />
    </div>
  );
};
