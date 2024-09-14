// react
import { FC } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
// styles
import styles from "./Link.module.scss";

interface LinkProps {
  name: string;
  path: string;
}

export const Link: FC<LinkProps> = ({ name, path }) => {
  return (
    <ReactRouterLink to={path} className={styles.Link}>
      {name}
    </ReactRouterLink>
  );
};
