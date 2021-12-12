import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Auth from "./screens/Auth";
import auth_api from "api/auth";

function PrivateOutlet() {
  const is_authenticated = auth_api.isAuthenticated() && auth_api.getCurrentUser();
  
  return is_authenticated ? <Outlet /> : <Navigate to="/login" />;
}

const Private = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route element={<Private />} />
        </Route>
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
