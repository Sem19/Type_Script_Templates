// react
import { FC } from "react";
// assets
import CheckboxUnChecked from "../../libs/assets/svg/CheckboxUnChecked.svg?react";
import CheckboxChecked from "../../libs/assets/svg/CheckboxChecked.svg?react";
// styles
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
  checked: boolean;
  name: string;
  onToggleIsChecked: () => void;
}

export const CheckBox: FC<CheckBoxProps> = ({
  checked,
  name,
  onToggleIsChecked,
}) => {
  const onIconClick = () => {
    onToggleIsChecked();
  };

  return (
    <div className={styles.CheckBox}>
      <div className={styles.icon} onClick={onIconClick}>
        {checked ? <CheckboxChecked /> : <CheckboxUnChecked />}
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
