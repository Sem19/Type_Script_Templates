// react
import { ChangeEvent, FC, HTMLInputTypeAttribute, ReactNode } from "react";
// libs
import classNames from "classnames";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  disabled?: boolean;
  type?: HTMLInputTypeAttribute;

  backgroundColor?: "whitesmoke" | "transparent";
  borderVariant?: "none" | "full";
  heightVariant?: "s" | "m" | "l";
  leftSideElement?: ReactNode;
  rightSideElement?: ReactNode;
  maxWidth?: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  disabled,
  leftSideElement,
  rightSideElement,

  backgroundColor = "transparent",
  type = "text",
  borderVariant = "full",
  heightVariant = "m",
  maxWidth,
}) => {
  return (
    <div
      className={classNames(styles.InputContainer, {
        [styles.BGtransparent]: backgroundColor === "transparent",
        [styles.BGwhitesmoke]: backgroundColor === "whitesmoke",
        [styles.borderNone]: borderVariant === "none",
        [styles.borderFull]: borderVariant === "full",
        [styles.heightS]: heightVariant === "s",
        [styles.heightM]: heightVariant === "m",
        [styles.heightL]: heightVariant === "l",
      })}
      style={{ maxWidth: maxWidth }}
    >
      {leftSideElement && (
        <div className={styles.leftSideElementContainer}>{leftSideElement}</div>
      )}
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(styles.input, {
          [styles.BGtransparent]: backgroundColor === "transparent",
          [styles.BGwhitesmoke]: backgroundColor === "whitesmoke",
        })}
      />
      {rightSideElement && (
        <div className={styles.rightSideElementContainer}>
          {rightSideElement}
        </div>
      )}
    </div>
  );
};
