import { useUser } from "hooks/user";

import styles from "./Me.module.css";
import Header from "components/Header";

import auth_api from "api/auth";

const Me = () => {
  const user = useUser();

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.user_card__wrapper}>
        <div className={styles.user_card}>
          <h2>Личный кабинет</h2>
          <p>Вы - {user.role?.name}</p>
          <div className={styles.user_card__body}>
            <p>Имя: {user.username}</p>
            <p>Почта: {user.email}</p>
          </div>

          <div className={styles.user_card__footer}>
            <div></div>
            <button
              className={styles.logout_button}
              onClick={() => {
                auth_api.logout();
              }}
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
