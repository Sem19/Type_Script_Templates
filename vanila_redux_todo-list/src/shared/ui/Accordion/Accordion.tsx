// react
import { FC, ReactNode, useState } from "react";
// assets
import ArrowUp from "../../libs/assets/svg/arrow_up.svg?react";
import ArrowDown from "../../libs/assets/svg/arrow-down.svg?react";
// styles
import styles from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleIsOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const currentArrowIcon = isOpen ? <ArrowUp /> : <ArrowDown />;

  return (
    <div className={styles.Accordion} onClick={onToggleIsOpenClick}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}>{currentArrowIcon}</div>
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};
