import "./NoticeViewer.css";
import { ReactComponent as Default } from "./asset/defaultImage.svg";
import { ReactComponent as Comment } from "./asset/comment.svg";
import { useState, useEffect } from "react";
import { community } from "./api/communityClient";
import { useNavigate, useParams } from "react-router-dom";

export default function NoticeCorrection() {
  const params = useParams();
  const nav = useNavigate();
  const today = new Date().toLocaleDateString();
  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const getView = async () => {
    const result = await community.get("/posts/" + params.post_number);
    setData(result.data[0]);
    setTitle(result.data[0].post_title);
    setContent(result.data[0].post_content);
    console.log(result);
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
  const putPost = async () => {
    try {
      const result = await community.put("/posts/" + params.post_number, {
        post_title: title,
        post_content: content,
      });
      nav("/community/notice-list");
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="view-container">
      <div className="view-box">
        <input className="view-title" value={title} onChange={titleHandle} />
        <div className="view-name-box">
          <div className="view-person">
            <Default style={{ width: "50px", height: "50px" }} />
            <div className="view-info">
              <span>{sessionStorage.getItem("user_name")}</span>
              <span>{today}</span>
            </div>
          </div>
        </div>
        <input
          className="correction-content"
          value={content}
          onChange={contentHandle}
        ></input>
        <div>
          <div className="correction-button-container">
            <div>
              <button className="view-button-style" onClick={() => nav(-1)}>
                취소
              </button>
              <button
                className="view-button-style"
                type="button"
                onClick={putPost}
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
