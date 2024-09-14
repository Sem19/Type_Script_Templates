// react
import { FC } from "react";
// styles
import styles from "./LocationItem.module.scss";
import { ILocation } from "../../model/types/locationTypes";

interface LocationItemProps extends ILocation {}

export const LocationItem: FC<LocationItemProps> = ({
  created,
  dimension,
  id,
  name,
  residents,
  type,
  url,
}) => {
  return (
    <div className={styles.LocationItem}>
      <div>{name}</div>
      <div>{type}</div>
    </div>
  );
};
