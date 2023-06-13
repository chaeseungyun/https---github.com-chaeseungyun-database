import ShopInfomation from "./ShopInfomation";
import NoticeListTitle from "./NoticeListTitle";
import "./SellerPage.css";
import "./NoticeListTitle.css";
import { users, community } from "./api/communityClient";
import { useEffect, useState } from "react";
import { ReactComponent as List } from "./asset/list.svg";
import { Link } from "react-router-dom";
import ReviewMyShop from "./ReviewMyShop";

export default function SellerPage() {
  const [myShop, setMyShop] = useState();
  const [userCom, setUserCom] = useState();
  const getUserCom = async () => {
    const result = await community.get(
      "/posts/users/" + sessionStorage.getItem("user_number")
    );
    setUserCom(result.data);
  };
  useEffect(() => {
    getUserCom();
  }, []);
  const getMyShop = async () => {
    try {
      const result = await users.get(
        "/shop/" + sessionStorage.getItem("user_number")
      );
      setMyShop(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMyShop();
  }, []);

  return (
    <div className="seller-container">
      {myShop && myShop.length === 0 ? (
        <div className="seller-request-button">
          <List style={{ width: "25px", height: "25px" }} />
          <Link to="/shop-register">
            <span>가게 등록하기!</span>
          </Link>
        </div>
      ) : (
        <div className="seller-page-box">
          <ShopInfomation info={myShop} />
          <div className="seller-written-review">
            <div>
              <div className="seller-request-button">
                <List style={{ width: "25px", height: "25px" }} />
                <Link to="/shop-update">
                  <span>가게 정보 수정하기!</span>
                </Link>
              </div>
              <div className="seller-written">작성글</div>
              <div className="notice-title">
                <span>게시글 번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>작성일</span>
              </div>
              <div className="notice-list-box">
                {userCom &&
                  userCom.map((i) => (
                    <NoticeListTitle
                      key={i}
                      post_number={i.post_number}
                      post_title={i.post_title}
                      user_name={sessionStorage.getItem("user_name")}
                      creation_data={i.creation_date}
                    />
                  ))}
              </div>
            </div>
            <ReviewMyShop />
          </div>
        </div>
      )}
    </div>
  );
}
