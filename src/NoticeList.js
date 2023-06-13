import "./NoticeList.css";
import { ReactComponent as Pencil } from "./asset/pencil.svg";
import NoticeListTitle from "./NoticeListTitle";
import { community } from "./api/communityClient";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoticeList() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const searchHandle = (e) => {
    setSearch(e.target.value);
  };
  const getList = async () => {
    const result = await community.get("posts/all/desc");
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
  console.log(search);
  return (
    <div className="noticeList-container">
      <div className="noticeList-box">
        <div>게시글</div>
        <div className="noticeList-button-set">
          <input value={search} onChange={searchHandle} />
          <button className="noticeList-button-look">검색</button>
        </div>
      </div>
      <div className="notice-title">
        <span className="notice-title_number">게시글 번호</span>
        <span className="notice-title_title">제목</span>
        <span className="notice-title_name">작성자</span>
        <span className="notice-title_date">작성일</span>
      </div>
      <div className="notice-list-box">
        {search.length !== 0 &&
          data &&
          data
            .filter((i) => i.post_title.includes(search))
            .map((x) => (
              <NoticeListTitle
                post_number={x.post_number}
                post_title={x.post_title}
                user_name={x.user_name}
                creation_data={x.creation_date}
              />
            ))}
        {data &&
          search.length === 0 &&
          data.map((x) => (
            <NoticeListTitle
              post_number={x.post_number}
              post_title={x.post_title}
              user_name={x.user_name}
              creation_data={x.creation_date}
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
