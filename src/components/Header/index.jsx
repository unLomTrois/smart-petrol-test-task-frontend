import SearchBar from "components/SearchBar";
import { useUser } from "hooks/user";
import styles from "./Header.module.css";

const Header = () => {
  const me = useUser();

  const is_admin = me?.role.code === "admin" ?? false;

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

      {is_admin && (
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
