import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import auth_api from "api/auth";

import { Auth, Books, Me, Admin } from "screens";

const App = () => {
  if (!auth_api.isAuthenticated() && window.location.pathname !== "/auth")
    window.location.pathname = "/auth";

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/me" element={<Me />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
