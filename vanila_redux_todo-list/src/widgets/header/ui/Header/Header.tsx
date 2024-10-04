// react
import { FC } from "react";

// styles
import styles from "./Header.module.scss";

import { Link } from "react-router-dom";
import {
  getCharacterRoute,
  getEpisodeRoute,
  getLocationRoute,
} from "@/shared/libs/constants/routes";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.Header}>
      <div className={styles.content}>
        <Link to={getCharacterRoute()}>Characters</Link>
        <Link to={getEpisodeRoute()}>Episodes</Link>
        <Link to={getLocationRoute()}>Locations</Link>
      </div>
      {/* <div className={styles.content}>
        <Logo colorVariant="black" />
        <HeaderSearch />
        <HeaderNavigation />
        <div className={styles.iconbuttons}>
          <IconButton icon={<Heart />} onClick={() => {}} />
          <IconButton icon={<Cart />} onClick={() => {}} />
          <IconButton icon={<User />} onClick={() => {}} />
        </div>
      </div> */}
    </div>
  );
};
