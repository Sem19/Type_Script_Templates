// react
import { FC } from "react";
// styles
import styles from "./LocationItemList.module.scss";
import { ILocation } from "../../model/types/locationTypes";
import { LocationItem } from "../LocationItem/LocationItem";

interface LocationItemListProps {
  items: ILocation[];
}

export const LocationItemList: FC<LocationItemListProps> = ({ items }) => {
  return (
    <div className={styles.LocationItemList}>
      {items.map((item) => {
        return <LocationItem key={item.id} {...item} />;
      })}
    </div>
  );
};
