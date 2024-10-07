// react
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { useSelector } from "react-redux";
import { getLocationState } from "@/enteties/location/model/selectors/locationSelectors";
//ui
import { LocationItem } from "@/enteties/location/ui/LocationItem/LocationItem";
// styles
import styles from "./SingleLocationPage.module.scss";
import { getSingleLocation } from "@/enteties/location/model/thunks/locationThunks";

interface SingleLocationPageProps {}

export const SingleLocationPage: FC<SingleLocationPageProps> = ({}) => {
  const { id } = useParams<{ id: string }>();

  const { singleLocation, error, isLoading } = useSelector(getLocationState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleLocation(Number(id)));
  }, []);

  if (error || !singleLocation) {
    return <div>{error}</div>;
  }
  if (isLoading) {
    return <div>...Loading</div>;
  }
  console.log(singleLocation);

  return (
    <div className={styles.SingleLocationPage}>
      <LocationItem {...singleLocation} />
      <div>url: {singleLocation.url}</div>
    </div>
  );
};
