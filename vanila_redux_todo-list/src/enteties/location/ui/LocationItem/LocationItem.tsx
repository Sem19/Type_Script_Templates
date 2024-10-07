// react
import { FC } from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./LocationItem.module.scss";
import { ILocation } from "../../model/types/locationTypes";
import { getSingleLocationRoute } from "@/shared/libs/constants/routes";

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
      <h2 className={styles.Title}>{name}</h2>
      <div>
        <strong>Type:</strong> {type}
      </div>
      <div>
        <strong>Dimension:</strong> {dimension}
      </div>
      <div>
        <strong>Created:</strong> {new Date(created).toLocaleDateString()}
      </div>
      <div>
        <strong>Residents:</strong> {residents.length} resident(s)
      </div>
      {/* <a href={url} target="_blank" rel="noopener noreferrer"></a> */}
      <Link to={getSingleLocationRoute(id)}>View More</Link>
    </div>
  );
};
