import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Userdata() {
  const [usedata, setuasedata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let fetchdata = async () => {
      try {
        let username = sessionStorage.getItem("username");
        let res = await fetch("http://localhost:8001/userdetails/" + username);
        let responce = await res.json();
        setuasedata(responce);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchdata();
  }, []);
  console.log(usedata);
  if (!usedata) {
    return null;
  }

  return (
    <div className="user-data">
      <div>
        <h1 style={{ backgroundColor: "black" }} className="h1">
          user data
        </h1>
      </div>
      <div>
        <h3 className="h3">user Id:{usedata.id}</h3>
        <h3 className="h3">user Fullname:{usedata.fullname}</h3>
        <h3 className="h3">user Email:{usedata.email}</h3>
      </div>
      <div>
        <button
          className="back"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          back
        </button>
      </div>
    </div>
  );
}
export default Userdata;
