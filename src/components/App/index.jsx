import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "screens/Auth";
import Books from "screens/Books";

import auth_api from "api/auth";

import { Me } from "components/Me";

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
          <Route path="/" element={<Books />} />
          <Route path="/me" element={<Me />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
