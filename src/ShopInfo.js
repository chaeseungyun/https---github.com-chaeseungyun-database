import ShopInfoBox from "./ShopInfoBox";
import "./ShopInfo.css";

export default function ShopInfo({ shop }) {
  return (
    <div className="ShopInfo-container">
      {shop &&
        shop.map((i) => (
          <ShopInfoBox
            key={i.shop_name}
            close_time={i.close_time}
            open_time={i.open_time}
            shop_name={i.shop_name}
            shop_number={i.shop_number}
          />
        ))}
    </div>
  );
}
