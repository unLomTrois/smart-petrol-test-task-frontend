import styles from "./Admin.module.css";

import Header from "components/Header";
import { useUsers } from "hooks/user";
import users_api from "api/users";
import { useState } from "react";

const SingleUser = ({ id, name, email, role }) => {
  return (
    <div className={styles.user__wrapper}>
      <div className={styles.user__left}>
        <h2 className={styles.user__id}>{id}</h2>
        <p className={styles.user__name}>{name}</p>
      </div>
      <p className={styles.user__email}>{email}</p>
      <p className={styles.user__role}>{role?.code}</p>
      <button
        className={styles.delete_button}
        onClick={() => {
          users_api.deleteUser(id);
          window.location.reload();
        }}
      >
        удалить
      </button>
    </div>
  );
};

const AdminPage = () => {
  const users = useUsers();

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        <h1 className={styles.list_title}>Пользователи</h1>

        {users.map((user, idx) => {
          return <SingleUser key={idx} {...user} />;
        })}
      </div>

      <div className={styles.bottom}>
        <div className={styles.pagination}>
          <p>типа пагинация</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
