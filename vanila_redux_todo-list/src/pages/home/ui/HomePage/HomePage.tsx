// react
import { FC, useEffect } from "react";
// styles
import styles from "./HomePage.module.scss";
import { CharacterItemList } from "@/enteties/character/ui/CharacterItemList/CharacterItemList";
import { useSelector } from "react-redux";
import { getCharacterState } from "@/enteties/character/model/selectors/characterSelectors";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";
import { getAllCharacters } from "@/enteties/character/model/thunks/characterThunks";
import { getAllLocations } from "@/enteties/location/model/thunks/locationThunks";
import { getLocationState } from "@/enteties/location/model/selectors/locationSelectors";
import { LocationItemList } from "@/enteties/location/ui/LocationItemList/LocationItemList";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
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
    <div className={styles.HomePage}>
      <LocationItemList items={locations} />
    </div>
  );
};
