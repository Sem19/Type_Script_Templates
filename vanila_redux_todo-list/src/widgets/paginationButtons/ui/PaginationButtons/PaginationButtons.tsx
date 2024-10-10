// react
import { FC } from "react";
// ui
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./PaginationButtons.module.scss";

interface PaginationButtonsProps {
  currentPage: number;
  nextHandler: () => void;
  prevHandler: () => void;
}

export const PaginationButtons: FC<PaginationButtonsProps> = ({
  currentPage,
  nextHandler,
  prevHandler,
}) => {
  return (
    <div className={styles.PaginationButtons}>
      <Button onClick={prevHandler}>Prev</Button>
      <div>{currentPage}</div>
      <Button onClick={nextHandler}>Next</Button>
    </div>
  );
};
