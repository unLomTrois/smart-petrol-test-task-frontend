import SearchBar from "components/SearchBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <h1 className={styles.title}>
        <a href="/" className={styles.link}>Типа библиотека</a>
      </h1>
    </div>
  );
};

export default Header;
