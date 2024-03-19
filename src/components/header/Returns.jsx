import { Link } from "react-router-dom";

function Returns() {
  return (
    <div className="text-white hover:border-white border-transparent border box-content p-2 text-xs">
      <Link to="/signin">
        <p>Returns</p>
        <b>& Orders</b>
      </Link>
    </div>
  );
}

export { Returns };
