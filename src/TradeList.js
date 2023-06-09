import './NoticeList.css';
import {ReactComponent as Pencil} from './asset/pencil.svg';
import { Link } from 'react-router-dom';
import TradeListTitle from './TradeListTitle';

export default function TradeList() {
  let arr = [1, 2, 3]
  return (
    <div className='noticeList-container'>
      <div className='noticeList-box'>
        <div>거래글</div>
        <div className="noticeList-button-set">
          <input />
          <button className='noticeList-button-look'>검색</button>
        </div>
      </div>
      <div className='notice-title'>
        <span>게시글 번호</span>
        <span className='notice-title-width'>제목</span>
        <span>거래 상태</span>
        <span>가격</span>
        <span>작성자</span>
        <span>작성일</span>
      </div>
      <div className='notice-list-box'>
        {arr.map(i => <TradeListTitle />)}
      </div>
      <div className='notice-list-box-loc'>
        <Link to={
          {
            pathname: '/community/write',
          }
        }>
          <button className='notice-list-button'>
            <Pencil style={{width:'25px', height:'25px'}}/>
            글쓰기
          </button>
        </Link>
      </div>
    </div>
  )
}