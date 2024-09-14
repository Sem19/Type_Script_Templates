// react
import { FC } from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
// styles
import styles from "./NavLInk.module.scss";

interface NavLInkProps {
  text: string;
  to: string;
}

export const NavLInk: FC<NavLInkProps> = ({ text, to }) => {
  return (
    <ReactRouterLink
      to={to}
      className={({ isActive }) =>
        isActive ? styles.NavLinkActive : styles.NavLink
      }
    >
      {text}
    </ReactRouterLink>
  );
};
