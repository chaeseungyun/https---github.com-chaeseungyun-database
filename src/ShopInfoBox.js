import { Link } from "react-router-dom";
import "./ShopInfoBox.css";

export default function ShopInfoBox({
  shop_name,
  close_time,
  open_time,
  shop_number,
}) {
  return (
    <Link to={"/detail/" + shop_number}>
      <div className="ShopInfoBox-container">
        <span>{shop_name}</span>
        <span>
          {open_time} ~ {close_time}
        </span>
      </div>
    </Link>
  );
}
