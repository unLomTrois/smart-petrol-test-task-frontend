import { observer } from "mobx-react-lite";
import React from "react";
import { AuthStore } from "./store.js";

const Auth = observer(() => {
  // const [state] = React.useState(new AuthStore());

  // // state.email = "kek@kek.io"
  // // state.password = "kek"

  // // state.logIn()

  return (
    <div>
      <h1>auth</h1>
      <p>kek</p>
    </div>
  );
});

export default Auth;
