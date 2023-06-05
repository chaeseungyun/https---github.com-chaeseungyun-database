import "./PreSecondHT.css";
import SecondHandBox from "./SecondHandBox";

export default function PreSecondHT() {
  let arr = [1, 2, 3];
  return (
    <div className="pre-container">
      <div className="pre-sec-title">
        <span className="pre-sec-trade">중고거래</span>
        <span className="pre-sec-more">더보기</span>
      </div>
      <div className="pre-row">
        {arr.map((item) => (
          <SecondHandBox num={item} key={item} />
        ))}
      </div>
    </div>
  );
}
