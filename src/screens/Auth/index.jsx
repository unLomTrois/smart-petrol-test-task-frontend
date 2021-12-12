import { observer } from "mobx-react-lite";
import React from "react";
import { AuthStore } from "./store.js";

const Auth = observer(() => {
  const [state] = React.useState(new AuthStore());

  return (
    <div className="wrapper">
      <div className="content">
        <div className="title">Вход</div>

        {state.error && (
          <div className="error">Ошибка - введенные данные не верны</div>
        )}

        <label htmlFor="email">Почта</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => state.setEmail(e.target.value)}
        />

        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => state.setPassword(e.target.value)}
        />

        <button onClick={async () => await state.logIn()}>Зайти</button>
      </div>
    </div>
  );
});

export default Auth;
