import { fetchdata } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "./Table";

function User() {
  const [initialbook, setbook] = useState("Book");
  const [isbooked, setisbooked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  const data = useSelector((state) => state.user.tables.data);
  const listdata = useSelector((state) => state.user.list);

  return (
    <div>
      <div>
        <h1></h1>
      </div>
      <div>
        <div className="all-tables">
          {data.map((item, index) => (
            <Table key={index} data={item} list={listdata} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
