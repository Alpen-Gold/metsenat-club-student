import { useEffect, useState } from "react";
import "./App.css";
import { Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { addNewTodo } from "./store/todoSlice";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useLocalStorageState } from "ahooks";
import _LoginPage from "./login/login";

function App() {
  // login element
  const [adminActivated, setAdminActivated] = useLocalStorageState("login", {
    defaultValue: false,
  });

  // Navigation setup
  const navigate = useNavigate();
  const location = useLocation();

  // Check admin status and navigate accordingly
  useEffect(() => {
    if (adminActivated && location.pathname === "/login") navigate("/");
    else if (!adminActivated) navigate("/login");
  }, [adminActivated]);
  // login element end

  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={<_LoginPage setAdminActivated={setAdminActivated} />}
        ></Route>

        {/* Main Layout Route */}
        {/* <Route path="/" element={<_Leyaut />}>
          <Route index element={<_Orders />}></Route>
          <Route path="/orders" element={<_Orders />}></Route>
          <Route path="/category" element={<_Category />}></Route>
          <Route path="/product" element={<_Product />}></Route>
          <Route path="/fleal" element={<_Fleal />}></Route>
          <Route path="/customers" element={<_Customers />}></Route>
          <Route path="/report" element={<_Report />}></Route>
          <Route
            path="/complaints-opinions"
            element={<_Complaints_Opinions />}
          ></Route>
          <Route path="/location" element={<_Location />}></Route>
          <Route path="/position" element={<_Position />}></Route>
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
