import { Link } from "react-router-dom";
import "./PreSecondHT.css";
import SecondHandBox from "./SecondHandBox";
import { useState, useEffect } from "react";
import { community } from "./api/communityClient";

export default function PreSecondHT() {
  const [data, setData] = useState();
  const getList = async () => {
    const result = await community.get("trades/all/desc");
    setData(result.data);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="pre-container">
      <div className="pre-sec-title">
        <span className="pre-sec-trade">중고거래</span>
        <Link to="/community/trade-list">
          <span className="pre-sec-more">더보기</span>
        </Link>
      </div>
      <div className="pre-row">
        {data &&
          data
            .slice(0, 4)
            .map((i) => <SecondHandBox data={i} key={i.post_number} />)}
      </div>
    </div>
  );
}
