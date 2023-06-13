import "./NoticeList.css";
import { ReactComponent as Pencil } from "./asset/pencil.svg";
import NoticeListTitle from "./NoticeListTitle";
import { Link } from "react-router-dom";
import { community } from "./api/communityClient";
import { useEffect, useState } from "react";

export default function AllNotice() {
  const [search, setSearch] = useState("");
  const searchHandle = (e) => {
    setSearch(e.target.value);
  };
  const [data, setData] = useState();
  const all = async () => {
    const all = await community.get("all/desc");
    console.log(all);
    setData(all.data);
  };
  useEffect(() => {
    all();
  }, []);
  return (
    <div className="noticeList-container">
      <div className="noticeList-box">
        <div>커뮤니티</div>
        <div className="noticeList-button-set">
          <input value={search} onChange={searchHandle} />
          <button className="noticeList-button-look">검색</button>
        </div>
      </div>
      <div className="notice-title">
        <span>게시글 번호</span>
        <span>제목</span>
        <span>작성자</span>
        <span>작성일</span>
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
        {search.length === 0 &&
          data &&
          data.map((i) => (
            <NoticeListTitle
              key={i}
              post_number={i.post_number}
              user_name={i.user_name}
              post_title={i.post_title}
              creation_data={i.creation_date}
            />
          ))}
      </div>
      <div className="notice-list-box-loc">
        <Link to="/community/write">
          <button className="notice-list-button">
            <Pencil style={{ width: "25px", height: "25px" }} />
            글쓰기
          </button>
        </Link>
      </div>
    </div>
  );
}
