// react
import { FC, ReactNode } from "react";
// libs
import classNames from "classnames";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;

  backgroundColor?: "black" | "transparent";
  borderRadius?: "small" | "medium";
  fontSize?: "small" | "medium";
  padding?: "small" | "medium";
  height?: "small" | "medium";
  fontColor?: "black" | "white";

  borderColor?: "white" | "black";
  shoudAddBorder?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  shoudAddBorder,
  borderColor,
  fontSize = "small",
  borderRadius = "medium",
  backgroundColor = "black",
  padding = "medium",
  height = "small",
  fontColor = "white",
}) => {
  return (
    <button
      className={classNames(styles.Button, {
        [styles.bgBlack]: backgroundColor === "black",
        [styles.bgTransparent]: backgroundColor === "transparent",
        [styles.borderRadiusSmall]: borderRadius === "small",
        [styles.borderRadiusMedium]: borderRadius === "medium",
        [styles.border]: shoudAddBorder,
        [styles.borderColorWhite]: borderColor === "white",
        [styles.borderColorBlack]: borderColor === "black",
        [styles.fontSizeSmall]: fontSize === "small",
        [styles.fontSizeMedium]: fontSize === "medium",
        [styles.paddingSmall]: padding === "small",
        [styles.paddingMedium]: padding === "medium",
        [styles.heightSmall]: height === "small",
        [styles.heightMedium]: height === "medium",
        [styles.fontColorBlack]: fontColor === "black",
        [styles.fontColorWhite]: fontColor === "white",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
