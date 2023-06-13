import { useNavigate, useParams } from "react-router-dom";
import "./NoticeViewer.css";
import { ReactComponent as Default } from "./asset/defaultImage.svg";
import { community } from "./api/communityClient";
import { useState, useEffect } from "react";

export default function TradeCorrection() {
  const params = useParams();
  const nav = useNavigate();
  const today = new Date().toLocaleDateString();
  const [info, setInfo] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [price, setPrice] = useState();
  const getView = async () => {
    try {
      const result = await community.get("/trades/" + params.post_number);
      setInfo(result.data[0]);
      setTitle(result.data[0].trade_title);
      setContent(result.data[0].trade_content);
      setPrice(result.data[0].trade_price);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getView();
  }, []);

  const titleHandle = (e) => {
    setTitle(e.target.value);
  };
  const contentHandle = (e) => {
    setContent(e.target.value);
  };

  const corrcetion = async () => {
    const result = await community.put("/trades/" + params.post_number, {
      trade_title: title,
      trade_buyer_number: null,
      trade_content: content,
      trade_date: null,
      trade_price: Number(price),
      trade_status: 0,
      trade_number: Number(params.post_number),
    });
    console.log(result);
    nav("/community/trade-list");
  };

  const priceHandle = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div className="view-container">
      <div className="view-box">
        <input
          className="trade-correct-title"
          value={title}
          onChange={titleHandle}
        />
        <div className="view-name-box">
          <div className="view-person">
            <Default style={{ width: "50px", height: "50px" }} />
            <div className="view-info">
              <span>{info && sessionStorage.getItem("user_name")}</span>
              <span>{today}</span>
            </div>
          </div>
        </div>
        <input
          placeholder="가격"
          value={price}
          onChange={priceHandle}
          type="number"
        />
        <input
          className="correction-content"
          value={content}
          onChange={contentHandle}
        />
        <div>
          <div className="correction-button-container">
            <div className="trade-button-box">
              <button
                className="view-button-style"
                type="button"
                onClick={() => nav(-1)}
              >
                취소
              </button>
              <button
                className="view-button-style"
                type="button"
                onClick={corrcetion}
              >
                수정 완료
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
