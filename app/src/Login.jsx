import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  let handlelogin = (e) => {
    e.preventDefault();
    if (islogin()) {
      fetch("http://localhost:8001/userdetails/" + username)
        .then((res) => {
          if (!res.ok) {
            throw new Error("net work not found");
          }
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            alert("valid user name");
          } else if (resp.password === password) {
            sessionStorage.setItem("username", username);

            alert("login success");
            navigate("/");
          } else {
            alert("enter valid password");
          }
        });
    }
  };
  let islogin = () => {
    let procede = true;
    let errormessage = "enter the valid";
    if (username === "" || username === null) {
      procede = false;
      alert(errormessage + "   username");
    }
    if (password === "" || password === null) {
      procede = false;
      alert(errormessage + "  Password");
    }
    return procede;
  };

  return (
    <div className="all-login">
      <div className="div">
        <form className="form-login">
          <div>
            <div className="input-group">
              <label className="label">
                UserName<span className="error-msg">*</span>
              </label>
              <br></br>
              <input
                value={username}
                type="text"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                className="inputl"
              />
            </div>
            <div className="input-group">
              <label className="label">
                Password<span className="error-msg">*</span>
              </label>
              <br></br>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="inputl"
              />
            </div>
            <div className="buttons">
              <button className="btn-add" onClick={handlelogin}>
                Submit
              </button>
              <button
                className="btn-back"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Link to="/Reg">New User</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
