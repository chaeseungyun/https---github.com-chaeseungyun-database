import ShopInfoBox from "./ShopInfoBox";
import "./ShopInfo.css";

export default function ShopInfo() {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="ShopInfo-container">
      {arr.map((item) => (
        <ShopInfoBox />
      ))}
    </div>
  );
}
