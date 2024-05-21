import { useEffect, useState } from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
  json,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Table, { Orders } from "./Table";
import Home from "./Home";
import Login from "./Login";
import Regestration from "./Regestration";
import { ToastContainer } from "react-toastify";
import Userdata from "./Userdata";

function Header() {
  const navig = useNavigate();
  const [isclick, setisclick] = useState(false);
  const [isclicked, setisclicked] = useState(false);
  let handleclickd = () => {
    setisclicked(!isclicked);
  };
  let handleisclick = () => {
    setisclick(!isclick);
  };

  return (
    <>
      <div className="">
        <div className="Header">
          <button
            onClick={() => {
              navig("/Login");
            }}
            style={{
              float: "inline-end",
              backgroundColor: "tomato",
              fontSize: 20,
              borderRadius: 3,
            }}
          >
            Log out
          </button>
          <ul className="header">
            <li>
              <Link to="/usd">
                <img
                  className="logo"
                  src="https://img.freepik.com/premium-vector/initial-dr-letter-logo-with-script-typography-vector-template-creative-script-letter-dr-logo-design_616200-715.jpg"
                  alt="logo"
                />
              </Link>
              <Outlet />
            </li>
            <li>
              <select>
                <option>sign In</option>
                <option>User</option>
                <option>Admin</option>
                <option>Waiter</option>
              </select>
            </li>
            <li></li>
            <li onClick={handleisclick}>Theme</li>
            {isclick && (
              <div className="theme">
                <button onClick={handleclickd}>black</button>
                <button onClick={handleclickd}>blue</button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Header />
          <ToastContainer theme="colored"></ToastContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Table" element={<Table />} />
            <Route path="Orders/:id" element={<Orders />}></Route>
            <Route path="Login" element={<Login />} />
            <Route path="Reg" element={<Regestration />} />
            <Route path="usd" element={<Userdata />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
