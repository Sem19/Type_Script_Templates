// react
import { FC } from "react";
// shared
import { Logo } from "@/shared/ui/Logo";
// ui
import { HeaderSearch } from "../HeaderSearch/HeaderSearch";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
// styles
import styles from "./Header.module.scss";
import { IconButton } from "@/shared/ui/IconButton";
// assets
import Heart from "@/shared/libs/assets/svg/heart.svg?react";
import Cart from "@/shared/libs/assets/svg/cart.svg?react";
import User from "@/shared/libs/assets/svg/user.svg?react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.Header}>
      <div className={styles.content}>
        <Logo colorVariant="black" />
        <HeaderSearch />
        <HeaderNavigation />
        <div className={styles.iconbuttons}>
          <IconButton icon={<Heart />} onClick={() => {}} />
          <IconButton icon={<Cart />} onClick={() => {}} />
          <IconButton icon={<User />} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
