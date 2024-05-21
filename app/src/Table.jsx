import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { ADD, ADDNOITEM, DELETE, EDIT } from "./store";

function Table(props) {
  // let { props.data, listprops.data } = prps;
  const [isclick, setisclick] = useState(false);
  const [click, setclick] = useState(false);
  const [book, setBook] = useState(false);
  const [userdata, setUserdata] = useState(null);
  // const[]=useState(falase)
  // console.log(props.data?.props.data?.id, "props.data1");
  let handleisclick = (id) => {
    console.log(id, "id");
    setisclick(!isclick);
  };
  let handleorders = () => {
    setclick(!click);
  };
  useEffect(() => {
    let fetchdata = async () => {
      try {
        let userid = sessionStorage.getItem("username");
        let data = await fetch("http://localhost:8001/userdetails/" + userid);
        let responce = await data.json();
        setUserdata(responce);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchdata();
  }, []);
  console.log(userdata);

  let handleBook = () => {
    props.onClick(props.data.id);
    // console.log(props.onClick);
    // console.log(props.data.id);
    // setBook(!book);
    console.log(book, "before");
  };
  let handleCanclebooking = () => {
    // console.log(book);
    props.onClick("");

    setBook(false);
    setisclick(false);
    console.log(book, "after");
  };
  return (
    <div className="table12">
      <div className="div-table">
        <div className="div-head">
          <div className="table-num">
            <h3>{props.data.TableNum}</h3>
          </div>
          <div className="table-more">
            {props.clickedId === props.data.id && (
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAAZlBMVEX///8AAAD39/fy8vLp6en7+/ukpKR8fHxnZ2dPT0+xsbFtbW3b29vT09OdnZ3BwcHi4uI3NzeHh4dCQkJXV1erq6tfX19ycnIfHx+6urpHR0fIyMgnJyeNjY0PDw8aGhovLy+VlZW4KELrAAAD/UlEQVR4nO2cV5KrMBBFETlnB0ywvf9NPjD2GGNA/THz+qqKswDqFtXqLGnar2PpA9bvf/iXsdIoaV2v8ErHjkKDW84GRh174k3jVCm3pDUSpxEzytjkVrWEcbrNlQ54Prewb6JFpT1dzi1tzmFF6cARyg4s+7qhVRyRjli1ZgBPAhzvFWXbUoXAsVlPJlWIilvjk1guVXTcIkd0glQhHG6ZD1qS1huC4zKkB2vkzi20x990rW9cnVuppjk0qSKruZVqxpGoVRy4pWo10VwRDLY6U7U67IH20FG1uuxey6ZKBci26FpLhbTy/1dqKBDixH62Ekma/abllqqFhOR1JOaWqmkBUeoZIN2mpYRCeOxHqy+2vpoty0Ak27Tk5Zxw6xyoSVqP3DJHSorWiFvlSEiQeuIW+UIeZ8/sOdYLI1fEAgbM7YCAEAbepFtib2DtYnM9fGUQnnWK7q8UM0HILW2B8LRoquxZ6zJhMEu8swNAs2UNww68rDlfr012KXMgT7WMFSb+wa9qGO+/s7Ozs/PfMWq7zdu7j5iyTLHC0yTbugBnA2ZVzNOsPILcJ7Kqpdq7uwPagrlWH3pwZUHorkgVorG5xX0SbXVhuxjJaMPLhtQeILGmtFWIU3VL2y6iQ/EGlKZmyS3yCWl6jGEFFUWquHDLfPAVWBfp+NcHNC0hzjYQusVyJ/A0An5XYK0H10+u/KdLFrLe8M84VZod03dIAvYOl0q7DvsOyd+gkr1WxLAlhMNegUe0dEAg+FedGrcQkhdqPlAATDqoy48BQH1oEfNXiC4BZWVfiIzdCzwgbekBnKwBSsFVcIt8sTQ0nsG/WP4klW4SQRysEdmCeY5xsEa2i1n+rfIPovWyq2sBosAH5lpekIF4qyl6vPRrOwcgDVggjL+O2CnBMtU3lplMLSGLoW90a5ae+nngus69NtCO1M7Ozs7O/0IPozpJ6oi9eyXDqNpTWdyaJru4ToyZtoykuffR2MhcqKXyCUa+0N4sYIrCCVa90ojlv7o3x1jvviA03aaYWzfQsZb2N6VCXJH/Qb9vShXixj7W+EHe0ALpEvZuVSoV5LZhD2liwD+RH4goUoXLLfMBbRDTIPiCkDiUR3iS6E6TKkqAJJF6n7vhz7lShe7Jq7RDotK7DirtOuw7JH+DSu/m+Aq9R6TSO08m6aWEAYA5p0Lvkmk28XAd2c21NwKF3tEjGsENoogxSVpBikPSjwUpui1CWggz7I6ksSvglviDdZCIRai1Xuj3TSdbQviAF/rW8psHJbUnWf+rAAFrhukt2sEZIGVZwC+/6sTCYS8GVjD8fLpg2rjQEy4rqmzneCmKMmh9BZ4iMcw0TU0TJKgy8Q+vAjHC/7d11wAAAABJRU5ErkJggg=="
                style={{ height: 20, width: 20, backgroundColor: "aqua" }}
                onClick={() => {
                  handleisclick(props.data.id);
                }}
              />
            )}
          </div>
          {isclick ? (
            <div className="more">
              <button className="btn-more" onClick={handleCanclebooking}>
                Cancle booking
              </button>

              <button
                className="btn-more"
                onClick={() => {
                  handleorders();
                }}
              >
                <Link to={`Orders/${props.data.id}`}> Orders</Link>
              </button>
            </div>
          ) : (
            ""
          )}
          {click && (
            <div className="orders">
              <Outlet />
            </div>
          )}
        </div>

        <div className="img-btn">
          <img src={props.data.image} alt="table" />

          <div className="btn-bookk">
            <button
              className="btn-book"
              onClick={handleBook}
              disabled={props.clickedId === props.data.id}
              style={{
                fontSize: 20,
                backgroundColor:
                  props.clickedId === props.data.id ? "red" : "green",
              }}
            >
              {props.clickedId !== props.data.id ? "Book" : "already booked"}
            </button>
          </div>
        </div>
        <div className="table-footer-btn">
          <div className="table-owned">
            {props.clickedId === props.data.id && (
              <p style={{ color: "white" }}>Boocked by {userdata.fullname}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Orders() {
  const [initialitem, setinitialitem] = useState("");
  const [initialcount, setinitialcount] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editItem, setEditItem] = useState("");
  const [editCount, setEditCount] = useState("");

  useEffect(() => {}, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemdata = useSelector((state) => state.user.list.item);
  const noitem = useSelector((state) => state.user.list.noitem);

  const handleAdd = () => {
    if (initialitem && initialcount) {
      dispatch(ADD(initialitem));
      dispatch(ADDNOITEM(initialcount));
      setinitialitem("");
      setinitialcount("");
    }
  };

  const handleDelete = (index) => {
    dispatch(DELETE(itemdata[index]));
    dispatch(DELETE(noitem[index]));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditItem(itemdata[index]);
    setEditCount(noitem[index]);
  };

  const saveEdit = () => {
    dispatch(EDIT({ index: editIndex, item: editItem, count: editCount }));
    setEditIndex(-1);
    setEditItem("");
    setEditCount("");
  };

  useEffect(() => {
    setArray1(itemdata);
    setArray2(noitem);
  }, [itemdata, noitem]);

  const [array1, setArray1] = useState(itemdata);
  const [array2, setArray2] = useState(noitem);

  return (
    <div>
      <div className="list-tacker">
        <input
          className="inputo"
          type="text"
          placeholder="Enter dish you want"
          value={initialitem}
          onChange={(e) => setinitialitem(e.target.value)}
        />
        <input
          className="inputo"
          type="number"
          placeholder="Enter no of plates"
          value={initialcount}
          onChange={(e) => setinitialcount(e.target.value)}
        />
        <button className="btn-add" onClick={handleAdd}>
          Add
        </button>
        <div>
          <img
            style={{ height: 50, width: 50, float: "right", marginLeft: 50 }}
            src="data:image/png;base64,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"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
      <div className="input-d">
        <div>
          {array1.map((item, index) => (
            <div key={index}>
              <ul>
                <li>
                  {editIndex === index ? (
                    <input
                      value={editItem}
                      className="input-1"
                      onChange={(e) => setEditItem(e.target.value)}
                    />
                  ) : (
                    <span
                      style={{
                        backgroundColor: "#ffff",
                        fontStyle: "normal",
                        fontSize: 25,
                        width: 100,
                      }}
                    >
                      {item}
                    </span>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          {array2.map((item, index) => (
            <div key={index}>
              <ul>
                <li>
                  {editIndex === index ? (
                    <input
                      value={editCount}
                      className="input-1"
                      onChange={(e) => setEditCount(e.target.value)}
                    />
                  ) : (
                    <span
                      style={{
                        backgroundColor: "#ffff",
                        fontStyle: "normal",
                        fontSize: 25,
                        width: 100,
                      }}
                    >
                      {item}
                    </span>
                  )}
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(index)}
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAdVBMVEX////8AAX8AAD9gID+o6T9REb8Cwz+m5z9cnP+pqf+s7T9Skz/xMX8EBH+tbb/9/f9XF3/7u78ICH+vr//3d79aWn/0dL/5eX9lpf+1dX8Ghr9V1n9kZL8MjP+hYb9YGL8Jyj9PT/+ysv9eHn9UVP9ioz+ra1ssD3HAAAEa0lEQVR4nO2c6XbiMAyFg1qWAiEsAQJMWNu+/yNOwjbtaSzHV4qhc3z/xsf5MDa+SLKjCFLaW1Ortijupdh7MC2m5EBX8NF04Y9uMnaCOwOOJ97whnt3vP3RG96o5Y7XGfnDc5t5Z7xWwAt4AS/g/W48Zz05HvnDW476zhotveEFBQUF/XdKVtl4UKl2ExqMs1VSn241j5FtS6J4vqpL1yV3RyJV8cpuPbpX/3AXwNc6dLPpQ+gKvunMTjc5PIiu4GvbAx2jh9EVfHZP2H4kXtv63bpHdxTx9rZvd+ESVlTHW9uigMP4kXjxMOAFvIAX8ALedzzfNvm7bHjp9uWB2npNvQUFBQX9LnVfPekNwqOOH7ViCG/ta6M9QHi+ohm0gfA2vvBOEF7PF94fCO/DF94nhPfmCw/LVfoKpT03HlGNoGiFZp7wOrY/GNUa+gmB0x6rnTv6iYHToXZG45sWuRWv3JIkz89tBlgaP7XuarTO87UZgGhaPrd1AhYeLt8tPVN7lqbDnomP6HRM05HtQ9LcIZ32RbYSTJpfPva2uhnRx6Wbna0bDC+ZW+bV9S/9ZFDZjjbXL21lmZ+9ZvB2t4bVw3ff6RN+ktAJxOMtC73cGnar2hHdPbqlnw+ILkpefODVTpT+EO+o1PD6IF6XndNqeJgjKA1fXbyKdrXxWmi5+szL6LXQkOPxufFWbO25Ft70ufFytO4wZd2G1tJoo3hLNjOuNXob9CDHkvVCWnhzkM5kRZTxsBBGicdGWbTwtihexDoqraUBGpZCJx+jhwWAShlsuiZezcKuSrGOSgmvhcWnSv3xgBejfspi+HSWhuT4H2v4lEZvj6dwR1zmXgkvxw8nDjlPoIR3wPFWnCdQwqtR8WjSkotRKS2NdxyPrSNVGr0dFiPwhQdGWM54nKNSwtsK8DhHpYSXwXRRwoXmVJbGl1YAHvu5NUYPj7CU4iyLEp7kdF3WOF4HNyy8J9DBW0sO3Pdr4uFLQ3SdAnfSVWf0cklJ3KzTNJ7AsPCOSgevjW8a56s5GsYbCOhYw6ezNN4leJzh0xm9XfWL6ylhHJUOXk+CFzGOSgcPDwCVYtJhOnMPTQk54eGjJzEsbAhNB092xw3Xswqe7DoAxvDp4Ek2DcObf+LhS0OG12929EiId2wYby3DSxvGw8pG70oaxsPKRl3x0KWBp4RueOauNUYPT2p4wcOzBhc8sx9VwcOzBheZDzs/BZ45CKSwNGQRllLmtJrC6MlCGKXMiSENvClW1fpP5tpqDbxceiPkZ6N4cJlDDbx7lr1yAnzJhBotNw2k91Wag0CUX92GIYZ6x58YQw20kRmWKJqZS21uvwrH6szb/ZIBZvqOpXhDc5SF4s+i92Rhrrwtg2MJc3+KJOdy0YKLstA8y4x1weXzXpbtuBChIOdyEV9bTXxZt+VxsfileHypjVCSnMsVr8kDTVI/Vcxs99t3HfCkW27DeOJbji2l30I87KTGVzy2UOnheE2eVrsfCjDrL+LHYpU1PkP6AAAAAElFTkSuQmCC"
                      style={{ height: 20, width: 20 }}
                    />
                  </button>
                  {editIndex === index ? (
                    <button className="btn-add" onClick={saveEdit}>
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/wish-list-4946050-4111882.png?f=webp&w=256"
                        style={{ height: 40, width: 40 }}
                      />
                    </button>
                  ) : (
                    <button
                      className="btn-add"
                      onClick={() => handleEdit(index)}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtwr6DYORj7nw_4IET3kQdlvznweWe7xrr9Rrj9uSdeknwFhwhgBs_dwsyA6L8pzMlQ4&usqp=CAU"
                        style={{ height: 20, width: 20 }}
                      />
                    </button>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
