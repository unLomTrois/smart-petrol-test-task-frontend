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
          users_api.deleteUser(id).then(() => {
            window.location.reload();
          });
        }}
      >
        удалить
      </button>
    </div>
  );
};

const NewUserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role_id, setRoleId] = useState(2);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    users_api
      .createUser({ name: username, email, password, role_id })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <form>
      <div className={styles.new_user__wrapper}>
        <div className={styles.user__left}>
          <div></div>
          <input
            type="text"
            className={styles.new_user__input}
            placeholder="введите имя"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <input
          type="email"
          className={styles.new_user__input}
          placeholder="введите email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.new_user__input}
          placeholder="введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className={styles.new_user__select__role}
          required
          onChange={(e) => setRoleId(e.target.value)}
          defaultValue="2"
        >
          <option value="2">Клиент</option>
          <option value="3">Библиотекарь</option>
        </select>

        <button className={styles.create_button} onClick={handleFormSubmit}>
          создать
        </button>
      </div>
    </form>
  );
};

const AdminPage = () => {
  const users = useUsers();

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        <NewUserForm />
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
