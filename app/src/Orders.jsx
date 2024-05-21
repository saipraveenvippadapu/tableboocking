import { useState } from "react";
import { ADD, ADDNOITEM, DELETE } from "./store";
import { useDispatch, useSelector } from "react-redux";

function Orders() {
  const [initialitem, setinitialitem] = useState("");
  const [initialcount, setinitialcount] = useState("");
  // const [array1, setarray1] = useState([]);
  // const [array2, setarray2] = useState([]);
  let dispatch = useDispatch();
  let itemdata = useSelector((state) => {
    return state.user.list.item;
  });
  let noitem = useSelector((state) => {
    return state.user.list.noitem;
  });
  console.log(itemdata);
  console.log(noitem);
  useSelector((state) => {
    console.log(state);
  });
  function handleclick() {
    dispatch(ADD(initialitem));
    setinitialitem("");
    dispatch(ADDNOITEM(initialcount));
    setinitialcount("");
  }
  function handledelete(index) {
    console.log(itemdata[index]);
    dispatch(DELETE(itemdata[index]));
    dispatch(DELETE(noitem[index]));
  }
  return (
    <div>
      <div className="input-field">
        <input
          type="text"
          className="inputo"
          value={initialitem}
          placeholder="Enter the dish name"
          onChange={(e) => {
            let data = e.target.value;
            setinitialitem(data);
          }}
        ></input>
        <input
          type="number"
          className="inputo"
          value={initialcount}
          placeholder="Enter the no plates"
          onChange={(e) => {
            let data = e.target.value;
            setinitialcount(data);
          }}
        ></input>
        <button className="btn-add" onClick={handleclick}>
          Add
        </button>
      </div>
      <div className="menu-list">
        <div>
          <ui>
            {itemdata.map((item, index) => {
              return (
                <li key={index}>
                  {index + 1}.{item}
                </li>
              );
            })}
          </ui>
        </div>
        <div>
          <ui>
            {noitem.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button
                    onClick={() => {
                      handledelete(index);
                    }}
                    className="btn-delete"
                  >
                    De
                  </button>
                </li>
              );
            })}
          </ui>
        </div>
      </div>
    </div>
  );
}
export default Orders;
