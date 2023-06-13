import "./RequestBox.css";

export default function RequestBox({ shop_address, count }) {
  return (
    <div className="request-box-container">
      <div className="request-shop-box">{shop_address}</div>
      <div className="request-shop-box2">
        지금까지 요청된수가 {count}회에요.
        <br />
        {5 - Number(count)}회 더 등록 요청되면
        <br />
        정식 가게로 등록돼요.
      </div>
    </div>
  );
}
