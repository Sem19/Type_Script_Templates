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
      <div className={styles.LocationSearchInput}>
        <LoactionSearchInput />
      </div>
      <LocationPageItems />
    </div>
  );
};
