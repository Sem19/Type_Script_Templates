// react
import { FC } from "react";
// styles
import styles from "./CharacterItem.module.scss";
import { Link } from "react-router-dom";
import { getSingleCharacterRoute } from "@/shared/libs/constants/routes";

interface CharacterItemProps extends ICharacter {}

export const CharacterItem: FC<CharacterItemProps> = ({
  created,
  episode,
  gender,
  id,
  image,
  location,
  name,
  origin,
  species,
  status,
  type,
  url,
}) => {
  return (
    <div className={styles.CharacterItem}>
      <Link to={getSingleCharacterRoute(id)}>
        <img src={image} />
      </Link>
      <div>{name}</div>
    </div>
  );
};
