// react
import { FC, ReactNode } from "react";
// styles
import styles from "./IconButton.module.scss";

interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <div className={styles.IconButton} onClick={onClick}>
      {icon}
    </div>
  );
};
