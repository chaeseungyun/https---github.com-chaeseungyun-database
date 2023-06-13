import "./NoticeViewer.css";
import { ReactComponent as Default } from "./asset/defaultImage.svg";
import { ReactComponent as Comment } from "./asset/comment.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { community } from "./api/communityClient";

export default function NoticeViewer() {
  const params = useParams();
  const [isClicked, setIsClicked] = useState(false);
  const [comment, setComment] = useState();
  const commentHandle = (e) => {
    setComment(e.target.value);
  };
  const nav = useNavigate();
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const getView = async () => {
    const result = await community.get("/posts/" + params.post_number);
    const result2 = await community.get("/comments/" + params.post_number);
    setData(result.data[0]);
    console.log(result2);
    setData2(result2.data);
  };
  useEffect(() => {
    getView();
  }, []);
  const deletePost = async () => {
    const result = await community.delete("/" + params.post_number);
    if (result.status == 200) nav("/community/notice-list");
  };
  const addComment = async () => {
    try {
      const add = await community.post("/comments/" + params.post_number, {
        author_number: sessionStorage.getItem("user_number"),
        comment_content: comment,
      });
      console.log(add);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  const deleteComment = async (number) => {
    try {
      const del = await community.delete("/comments/" + number);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="view-container">
      <div className="view-box">
        <div className="view-title">{data && data.post_title}</div>
        <div className="view-name-box">
          <div className="view-person">
            <Default style={{ width: "50px", height: "50px" }} />
            <div className="view-info">
              <span>{data && data.user_name}</span>
              <span>{data && data.creation_date}</span>
            </div>
          </div>
          <div className="view-comment-sets">
            <Comment style={{ width: "25px", height: "25px" }} />
            <span>댓글</span>
          </div>
        </div>
        <div className="view-content">{data && data.post_content}</div>
        <div>
          <div className="view-comment-top">
            <div className="view-comment-set">
              <Comment style={{ width: "25px", height: "25px" }} />
              <span>댓글</span>
            </div>
            <button
              className="view-comment-write"
              onClick={() => setIsClicked((x) => !x)}
            >
              댓글 쓰기
            </button>
            {isClicked && (
              <div>
                <input
                  placeholder="댓글"
                  value={comment}
                  onChange={commentHandle}
                />
                <button type="button" onClick={addComment}>
                  확인
                </button>
              </div>
            )}
          </div>
          <div className="view-comment-content">
            <span>
              {data2 &&
                data2.map((x) => (
                  <div className="comment-space">
                    <span>{x.user_name}</span>
                    <span>{x.comment_content}</span>
                    {x.user_name == sessionStorage.getItem("user_name") && (
                      <button
                        type="button"
                        onClick={() => deleteComment(x.comment_number)}
                      >
                        삭제
                      </button>
                    )}
                  </div>
                ))}
            </span>
          </div>
          <div className="view-button-container">
            <div>
              <button className="view-button-style1">글쓰기</button>

              <Link
                to={"/community/view/notice-correction/" + params.post_number}
              >
                <button className="view-button-style2">수정</button>
              </Link>
              {data &&
                data.user_name == sessionStorage.getItem("user_name") && (
                  <button className="view-button-style3" onClick={deletePost}>
                    삭제
                  </button>
                )}
            </div>
            <div>
              <Link to="/community/notice-list">
                <button className="view-button-style4">목록</button>
              </Link>
              <button className="view-button-style5">맨 위로</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
