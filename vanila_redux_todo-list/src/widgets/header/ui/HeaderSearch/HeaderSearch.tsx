// react
import { FC } from "react";
// shared
import { Input } from "@/shared/ui/Input";
// assets
import Search from "@/shared/libs/assets/svg/search.svg?react";
// styles
import styles from "./HeaderSearch.module.scss";

interface HeaderSearchProps {}

export const HeaderSearch: FC<HeaderSearchProps> = ({}) => {
  return (
    <div className={styles.HeaderSearch}>
      <Input
        placeholder="Search"
        onChange={() => {}}
        value={""}
        backgroundColor="whitesmoke"
        borderVariant="none"
        leftSideElement={<Search />}
        maxWidth="432px"
      />
    </div>
  );
};
