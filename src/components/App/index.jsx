import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "../../screens/Auth";
import auth_api from "api/auth";

import { useUser } from "hooks/user";

const Me = () => {
  const user = useUser();

  return (
    <div>
      <h2>me</h2>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

const App = () => {
  if (!auth_api.isAuthenticated() && window.location.pathname !== "/auth")
    window.location.pathname = "/auth";

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/me" element={<Me />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
