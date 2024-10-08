// react
import { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@/shared/libs/hooks/useDispatch";

import { Input } from "@/shared/ui/Input";
import { getLocationSearchQueryState } from "@/enteties/location/model/selectors/locationSelectors";
import { locationActionCreators } from "@/enteties/location/model/actionCreators/locationActionCreators";
//ui
// styles
// import styles from "./LoactionSearchInput.module.scss";

interface LoactionSearchInputProps {}

export const LoactionSearchInput: FC<LoactionSearchInputProps> = ({}) => {
  const searchQuery = useSelector(getLocationSearchQueryState);

  const dispatch = useDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(locationActionCreators.setLocationSearchQuery(e.target.value));
  };

  return (
    <Input
      value={searchQuery}
      onChange={onInputChange}
      placeholder="Enter location name"
    />
  );
};
