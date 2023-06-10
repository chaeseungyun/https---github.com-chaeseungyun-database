import Review from "./Review";
import ShopInfomation from "./ShopInfomation";
import NoticeListTitle from "./NoticeListTitle";
import './SellerPage.css';
import './NoticeListTitle.css';

export default function SellerPage() {
  const arr = [1, 2, 3];

  return (
    <div className="seller-container">
      <ShopInfomation />
      <div className="seller-written-review">
        <div>
          <div className="seller-written">작성글</div>
          <div className='notice-title'>
            <span>게시글 번호</span>
            <span>제목</span>
            <span>작성자</span>
            <span>작성일</span>
          </div>
          <div className='notice-list-box'>
            {arr.map(i => <NoticeListTitle />)}
          </div>
        </div>
        <Review />
      </div>
    </div>
  )
}