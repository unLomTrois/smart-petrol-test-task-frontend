import { observer } from "mobx-react-lite";
import React from "react";
import { AuthStore } from "./store.js";

import "./index.css";

const Auth = observer(() => {
  const [state] = React.useState(new AuthStore());

  return (
    <div className="wrapper">
      <div className="content">
        <h3 className="title">Вход</h3>

        {state.error && (
          <div className="error">Ошибка - введенные данные не верны</div>
        )}

        <input
          id="email"
          className="email-input"
          type="email"
          name="email"
          onChange={(e) => state.setEmail(e.target.value)}
          placeholder="Почта"
        />
        <input
          id="password"
          className="email-input"
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={(e) => state.setPassword(e.target.value)}
        />

        <button disabled={!state.canLogin} onClick={async () => await state.login()}>Войти</button>
      </div>
    </div>
  );
});

export default Auth;
