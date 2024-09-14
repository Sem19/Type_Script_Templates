// react
import { FC } from "react";
// items
import { headerNavItems } from "./headerNavItems";
// shared
import { NavLInk } from "@/shared/ui/NavLink";
// styles
import styles from "./HeaderNavigation.module.scss";

interface HeaderNavigationProps {}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({}) => {
  return (
    <div className={styles.HeaderNavigation}>
      {headerNavItems.map((el) => (
        <NavLInk text={el.name} key={el.name} to={el.path} />
      ))}
    </div>
  );
};
