import SearchBar from "components/SearchBar";
import { useUser } from "hooks/user";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


const Header = () => {
  const me = useUser();

  const is_admin = me?.role.code === "admin" ?? false;

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_part}>
        <SearchBar />
        <h1 className={styles.title}>
          <Link to="/" className={styles.link}>
            Типа библиотека
          </Link>
        </h1>
      </div>

      {is_admin && (
        <Link to="/admin" className={styles.lk}>
          админка
        </Link>
      )}

      <Link to="/me" className={styles.lk}>
        Личный кабинет
      </Link>
    </div>
  );
};

export default Header;
