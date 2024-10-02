// react
import { FC, useEffect } from "react";
// styles
import styles from "./LocationPage.module.scss";
import { useSelector } from "react-redux";
import { getLocationState } from "@/enteties/location/model/selectors/locationSelectors";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { getAllLocations } from "@/enteties/location/model/thunks/locationThunks";
import { LocationItemList } from "@/enteties/location/ui/LocationItemList/LocationItemList";

interface LocationPageProps {}

export const LocationPage: FC<LocationPageProps> = ({}) => {
  const { locations, error, isLoading } = useSelector(getLocationState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLocations);
  }, []);

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
