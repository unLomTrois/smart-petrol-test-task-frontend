import Books from "screens/Books";

import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={styles.wrapper}>
      {/* <SearchBar /> */}
      <Books />
    </div>
  );
};

export default Main;
