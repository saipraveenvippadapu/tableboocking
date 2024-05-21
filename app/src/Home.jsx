import { fetchdata } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Form1 from "./form1";
import { Link, useNavigate } from "react-router-dom";
import Table from "./Table";
function Home() {
  const [initialbook, setbook] = useState("Book");
  const [isbooked, setisbooked] = useState(false);
  let handlesubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let complaintdata = { name, email, message };
  useEffect(() => {
    fetch("http://localhost:8002/usercomplaint", {
      method: "POST",
      Header: { contacttype: "application/json" },
      body: JSON.stringify(complaintdata),
    });
  }, [handlesubmit]);
  let diispatch = useDispatch();
  let handlebook = () => {
    setbook("already booked");
    setisbooked(!isbooked);
  };
  useEffect(() => {
    diispatch(fetchdata());
  }, [diispatch]);
  let data = useSelector((state) => {
    return state.user.tables.data;
  });
  let listdata = useSelector((state) => {
    return state.user.list;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userid = sessionStorage.getItem("username");
    console.log(userid, "id");
    if (userid === "" || userid === null) {
      navigate("/Login");
    }
  }, [navigate]);
  const [clickedId, setCLickedId] = useState("");
  const onClick = (id) => {
    setCLickedId(id);
    console.log(id);
  };
  return (
    <div className="all-home">
      <div className="welcome-rest">
        <h1>WELCOME TO THE SRINIVASA DINEIN</h1>
      </div>
      <div className="image-slider"></div>

      <div className="all-tables-list">
        <div>
          <div>
            <h1
              className="animation-h1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "whitesmoke",
              }}
            >
              You Can Book Your Table Here
            </h1>
          </div>
          <div className="all-tables">
            {data.map((item, index) => {
              return (
                <Table
                  key={index}
                  data={item}
                  list={listdata}
                  onClick={onClick}
                  clickedId={clickedId}
                />
              );
            })}
          </div>

          <div>
            <footer>
              <div className="footer-d">
                <div>
                  <h1>Get connected With us on social networks:</h1>
                </div>
                <div>
                  <img
                    className="logot"
                    src="data:image/jpeg;base64,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"
                  />
                  <img
                    className="logot"
                    src="data:image/png;base64,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"
                  />
                  <img
                    className="logot"
                    src="https://e7.pngegg.com/pngimages/624/783/png-clipart-whatsapp-icon-whatsapp-computer-icons-symbol-text-messaging-whats-logo-grass.png"
                  />
                  <img
                    className="logot"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEVHqej///83pOc/pudCp+gzo+ff7/vx+P32+/6Nx/CFw+/0+v7H4/duuew+p+fr9fxPrel4ve1aseq+3/av1/SdzvHS6Plmteuz2fSo0/Pc7vrO5viYzPHm8vvG4veGxO8cXmsdAAAFAklEQVR4nO3c67ayIBAGYBvwWCJqZger+7/LD3fHXVpiuKFvvc+v/tSaCYQZ0jwPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4eFwq3HcVUOCOvqOu0LiSRsB2NeUT5ZptFs1YYrI8edQ/llw4wJ7kOZ79Eh9R/zoaJ9CtTJHmYdQjSh3Fk7Dg/WsyQs7Hvq6KuBJVS3q5HTiLezzKLFyjPlzTmfcLb9uTXXpHp+TMZyU07j5uRX6MJtJrFI1JkRdifoBIT50Rec/oaQosJilQFkGsHwNK+GXrRyHx5HeXE5hCWsxEp8uJdgmpVvb1cjLoODKGfQKJaL0Xxeoo+CCeKfRCenqPQSpF2OgnOapuVDttcwsiHzyQWayWYtl8eJ6+eLo0X7kYjGZyi1JqjKkHO/GKTpVaG0s9uoVT+sPfcxn2ArPBJpbdXH29nuaH7aMphDZB4v47ePtKrq928fbUY+P0Z9yuebTFgvdG5CqPg8iqwtdrIh4gGrDf+aniGV6G0Vnk/hlKKt1/2iASjwtqGwZ6Cyd4Mo0hGJKhZUJjkz5/jKeWreNhSP8HUbmfxbN68OG/RrGeU0OIIqnjX3UElrC8qyjrf0S+we0Yj8r64jj05Ms0MS2b5hOZ5qbnYx6Lz3EyrZLNVydx5dVlFa0nPI6CXYW79BJX3TdOToFJJ/gqS6WWYWM/Q48GbGLeblN1l6e+1Mjzaz5Ad34cZ7iqVJbF2ytJCK0MHxtCjF6eC9/aHZZxKj3R6J3UdOnDWLQqtkKOOKsjxDD1qtGLWY/WM5up0ojiNwvoY/ux3+rXmUJHt/Hi+SttNnektkMPNbZ1dXLRn+kHVHhZ1V+AfC2xnyE/raFZWeTVJhlbP83/0F95mbGy2hj+0uz1N9os26vyd2hwHNgu9nyC02V5oWpMmuLW+0PQcRRmztL7QvO2AP+RE3S3edcAfsF6z/WAjzrCHWjlwGXpTlt1W76K5w+X7UEeyvxuesKkWm8CNSarQNFX3rHJjkrZI//ekIaTtvO5MMoo7F0q2K0o0bj8YyInt/oYVpsu3zJl15kxQYrZXdGiduRB+MvD4e4i57XQeEVPIl7GpCmfcncfTEbtl1cTNZr01NFUjl7aKlvE20bUhNN4mRg4uM2bbREe6intm28S99UPEDkbbRPv3J3Tg0lzdVrq2zJyYaxPnru0UF8YaDP0HVP6K5k0IfUqnuqbfjIzi3nYWL5GBPaN2qy18xOSn5dvR2YvwjPuJ3m1dDzYOX4QXjCXjx9H+r9qDCJLNQu8WxLOV61P0iqtmmIpc7wav2Wxr+35gPX6im+D+q566Z0z7F/7Ac7He7iHoqF2Hb78oQUG5/qHboefvIhzEKB+xW6y/Y5toH2aleMx5xphH+v+e2iJEWo7pg7Mhzy1axblgxIr4MO6w1PpjMX2Kgvk+qa3dK9J4sxt7FDwf/oj0X5OlCi8Lo8/OZw7C4Rnqpx8fkgap270Ep/ijVimL3d8EmWhG/xQTNp7DE/SGUTJqru5j+or8WsJPS802Ilqk/tfk1+IkY41KbdtI96+/J0wluRuyb+xi2fuMsOtUX19vdi9OL8JFVfvfc/V1UsUbFUm1Xu2z+XVAozALFssml37HM7PfiPP2YUpPtv+FmNZ1XRRSnJ+u/M+0/2fJ/+e/tAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw2D9CmzsMT+QcxQAAAABJRU5ErkJggg=="
                  />
                </div>
                <hr></hr>
                <div className="footer-2">
                  <div className="footer-21">
                    <ul>
                      <li>
                        <h1>AVILABLE ITEMS</h1>
                      </li>
                      <li>
                        <h3>Breakfast</h3>
                      </li>
                      <li>
                        <h3>Rice & Biryani</h3>
                      </li>
                      <li>
                        <h3>Veg and Non-veg</h3>
                      </li>
                      <li>
                        <h3>Sweet &Hot</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-21">
                    <ul>
                      <li>
                        <h1>Contact</h1>
                      </li>
                      <li>
                        <p>info@deviresidensis.com</p>
                      </li>
                      <li>
                        <p> +91 88858367255</p>
                      </li>
                      <li>
                        <p>+91 9966887744</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-3">
                  <div className="pp-1">
                    <h1>For any Queries or Feedbacks Please fill the form</h1>
                  </div>
                  <div>
                    <form>
                      <div className="pp-2">
                        <lable className="label">Your Name</lable>
                        <br></br>
                        <input
                          className="inputl"
                          placeholder="write your Name"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            let data = e.target.value;
                            setName(data);
                          }}
                        />
                      </div>
                      <div className="pp-2">
                        <lable className="label">Email Address</lable>
                        <br></br>
                        <input
                          value={email}
                          onChange={(e) => {
                            let data = e.target.value;
                            setEmail(data);
                          }}
                          className="inputl"
                          placeholder="write your Email Address"
                        />
                      </div>
                      <div className="pp-2">
                        <lable className="label">Message </lable>
                        <br></br>
                        <input
                          className="inputl"
                          placeholder="write your Name"
                          value={message}
                          onChange={(e) => {
                            let data = e.target.value;
                            setMessage(data);
                          }}
                        />
                      </div>
                      <div className="pp-2">
                        <button className="submit" onClick={handlesubmit}>
                          submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
