import SearchBar from "components/SearchBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <h1 className={styles.title}>Типа библиотека</h1>
    </div>
  );
};

export default Header;
