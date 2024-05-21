import { Link } from "react-router-dom";
function Form1() {
  return (
    <div className="form1">
      <button className="btn-form1">
        <Link to="menu-list">Order</Link>
      </button>
      <button className="btn-form1">
        <Link to="cancle">cancle booking</Link>
      </button>
    </div>
  );
}
export default Form1;
