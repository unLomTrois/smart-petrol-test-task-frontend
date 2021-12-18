import SearchBar from "components/SearchBar";
import styles from "./Header.module.css";

const Header = ({ is_admin = false }) => {
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

      {!is_admin && (
        <a href="/admin" className={styles.lk}>
          админка
        </a>
      )}

      <a href="/me" className={styles.lk}>
        Личный кабинет
      </a>
    </div>
  );
};

export default Header;
