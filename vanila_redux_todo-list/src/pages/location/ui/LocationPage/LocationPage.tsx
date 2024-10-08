// react
import { FC } from "react";
//ui
import { LocationPageItems } from "../LocationPageItems/LocationPageItems";
// styles
import styles from "./LocationPage.module.scss";
import { LoactionSearchInput } from "../LocationSearchInput/LoactionSearchInput";

interface LocationPageProps {}

export const LocationPage: FC<LocationPageProps> = ({}) => {
  return (
    <div className={styles.LocationPage}>
      <h2 className={styles.title}>Locations</h2>
      <LoactionSearchInput />
      <LocationPageItems />
    </div>
  );
};
