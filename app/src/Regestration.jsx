import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Regestration() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phno, setphno] = useState("");
  const [country, setcountry] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  let userRegestrationdetails = {
    username,
    password,
    fullname,
    email,
    phno,
    country,
    address,
    gender,
  };
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (isvalidate()) {
      console.log(userRegestrationdetails);
      fetch("http://localhost:8001/userdetails", {
        method: "POST",
        Headers: { contacttype: "application/json" },
        body: JSON.stringify(userRegestrationdetails),
      })
        .then((res) => {
          alert("regestration successfull ok to Login");
          navigate("/Login");
        })
        .catch((err) => {
          toast.error("faild" + err.message);
        });
    }
  };
  let backtologin = () => {
    navigate("/Login");
  };
  const isvalidate = () => {
    let isprocede = true;
    let errmsg = "plese enter the value in";
    if (username === "" || username === "") {
      isprocede = false;
      errmsg += "  username";
    }
    if (password === "" || password === "") {
      isprocede = false;
      errmsg += "  password";
    }
    if (email === "" || email === "") {
      isprocede = false;
      errmsg += "  email";
    }

    if (!isprocede) {
      alert(errmsg);
    }

    return isprocede;
  };

  return (
    <div>
      <div>
        <h1 className="h1"> REGESTRATION FORM</h1>
      </div>
      <div className="body">
        <div className="regestration">
          <div className="form-body">
            <div className="fbd">
              <form
                className="form"
                // onSubmit={(e) => {
                //   e.preventDefault;
                // }}
              >
                <div className="input-group">
                  <label className="label">
                    UserName<span className="error-msg">*</span>
                  </label>
                  <br></br>
                  <input
                    type=" text"
                    value={username}
                    className="input-r"
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <label className="label">
                    Password<span className="error-msg">*</span>
                  </label>
                  <br></br>
                  <input
                    autoComplete="new-password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    className="input-r"
                  />
                </div>
                <div className="input-group">
                  <label className="label">
                    FullName<span className="error-msg">*</span>
                  </label>
                  <br></br>
                  <input
                    type=" text"
                    value={fullname}
                    className="input-r"
                    onChange={(e) => {
                      setfullname(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <label className="label">
                    Email<span className="error-msg">*</span>
                  </label>
                  <br></br>
                  <input
                    type=" email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    className="input-r"
                  />
                </div>
                <div className="input-group">
                  <label className="label">
                    PhoneNumber<span className="error-msg">*</span>
                  </label>
                  <br></br>
                  <input
                    type=" number"
                    value={phno}
                    onChange={(e) => {
                      setphno(e.target.value);
                    }}
                    className="input-r"
                  />
                </div>
                <div className="input-group">
                  <label className="label">
                    Country<span className="error-msg">*</span>
                  </label>
                  <br></br>
                  <select
                    value={country}
                    onChange={(e) => {
                      setcountry(e.target.value);
                    }}
                  >
                    <option value="INDIA">INDIA</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="GERMANY">GERMANY</option>
                    <option value="RUSSYA">USSR</option>
                    <option value="WESTINDIA">WESTINDEIA</option>
                  </select>
                </div>
                <div className="input-group">
                  <label className="label">
                    Address<span className="error-msg">*</span>
                  </label>
                  <br></br>

                  <input
                    type=" address"
                    value={address}
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    className="input-r"
                  />
                </div>
                <div className="input-group">
                  <label className="label">
                    gender<span className="error-msg">*</span>
                  </label>
                  <br></br>
                  <input
                    checked={gender === "male"}
                    type="radio"
                    name="gender"
                    value="male"
                    className="input-radio"
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                  />
                  <label>Male</label>
                  <input
                    checked={gender === "female"}
                    type="radio"
                    name="gender"
                    value="female"
                    className="input-radio"
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                  />
                  <label>Female</label>
                </div>
                <div>
                  <button
                    className="btn-sumbit"
                    onClick={handlesubmit}
                    type="submit"
                  >
                    Submit
                  </button>
                  <button className="btn-back">Back</button>
                  <button className="btn-sumbit" onClick={backtologin}>
                    already user
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Regestration;
