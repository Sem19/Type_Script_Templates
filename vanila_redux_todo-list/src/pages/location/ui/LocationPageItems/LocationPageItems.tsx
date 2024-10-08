// react
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getLocationState } from "@/enteties/location/model/selectors/locationSelectors";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { getAllLocations } from "@/enteties/location/model/thunks/locationThunks";
// ui
import { LocationItemList } from "@/enteties/location/ui/LocationItemList/LocationItemList";
// styles
import styles from "./LocationPageItems.module.scss";

interface LocationPageItemsProps {}

export const LocationPageItems: FC<LocationPageItemsProps> = ({}) => {
  const { locations, meta, error, isLoading } = useSelector(getLocationState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLocations(meta));
  }, [meta]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className={styles.LocationPage}>
      <LocationItemList items={locations} />
    </div>
  );
};
