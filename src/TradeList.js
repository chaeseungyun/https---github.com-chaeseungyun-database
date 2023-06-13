import "./NoticeList.css";
import { ReactComponent as Pencil } from "./asset/pencil.svg";
import { Link } from "react-router-dom";
import TradeListTitle from "./TradeListTitle";
import { useState, useEffect } from "react";
import { community } from "./api/communityClient";
import { useNavigate } from "react-router-dom";
export default function TradeList() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const searchHandle = (e) => {
    setSearch(e.target.value);
  };
  const getList = async () => {
    const result = await community.get("trades/all/desc");
    console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    getList();
  }, []);
  const navigate = useNavigate();
  const isLogin = () => {
    if (!sessionStorage.getItem("isLogin")) alert("로그인 후 이용해주세요");
    else {
      navigate("/community/write");
    }
  };
  return (
    <div className="noticeList-container">
      <div className="noticeList-box">
        <div>거래글</div>
        <div className="noticeList-button-set">
          <input value={search} onChange={searchHandle} />
          <button className="noticeList-button-look">검색</button>
        </div>
      </div>
      <div className="notice-title">
        <span className="trade-list_number">게시글 번호</span>
        <span className="trade-list_title">제목</span>
        <span className="trade-list_status">거래 상태</span>
        <span className="trade-list_price">가격</span>
        <span className="trade-list_name">작성자</span>
        <span className="trade-list_date">작성일</span>
      </div>
      <div className="notice-list-box">
        {search.length !== 0 &&
          data &&
          data
            .filter((x) => x.trade_title.includes(search))
            .map((i) => (
              <TradeListTitle
                creation_date={i.creation_date}
                post_number={i.post_number}
                trade_price={i.trade_price}
                trade_status={i.trade_status}
                trade_title={i.trade_title}
                user_name={i.user_name}
              />
            ))}
        {search.length === 0 &&
          data &&
          data.map((i) => (
            <TradeListTitle
              creation_date={i.creation_date}
              post_number={i.post_number}
              trade_price={i.trade_price}
              trade_status={i.trade_status}
              trade_title={i.trade_title}
              user_name={i.user_name}
            />
          ))}
      </div>
      <div className="notice-list-box-loc">
        <button className="notice-list-button" onClick={isLogin}>
          <Pencil style={{ width: "25px", height: "25px" }} />
          글쓰기
        </button>
      </div>
    </div>
  );
}
