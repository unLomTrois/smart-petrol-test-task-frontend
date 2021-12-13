import SearchBar from "components/SearchBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_part}>
        <SearchBar />
        <h1 className={styles.title}>
          <a href="/" className={styles.link}>
            Типа библиотека
          </a>
        </h1>
      </div>
      <a href="/me" className={styles.lk}>
        Личный кабинет
      </a>
    </div>
  );
};

export default Header;
