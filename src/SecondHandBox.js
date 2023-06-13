import "./SecondHandBox.css";
import { ReactComponent as Bunny } from './asset/bunny.svg';
import { Link } from "react-router-dom";

export default function SecondHandBox({ data }) {
  return (
    <Link to={'/community/trade-view/' + data.post_number}>
      <div className="SecondHandBox-container">
        <Bunny className="img-place"></Bunny>
        <span>{data && data.trade_title}</span>
      </div>
    </Link>
  );
}
