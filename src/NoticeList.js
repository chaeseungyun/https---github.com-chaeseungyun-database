import './NoticeList.css';
import {ReactComponent as Pencil} from './asset/pencil.svg';
import NoticeListTitle from './NoticeListTitle';
import { Link } from 'react-router-dom';

export default function NoticeList() {
  let arr = [1, 2, 3]
  return (
    <div className='noticeList-container'>
      <div className='noticeList-box'>
        <div>게시글</div>
        <div className="noticeList-button-set">
          <input />
          <button className='noticeList-button-look'>검색</button>
        </div>
      </div>
      <div className='notice-title'>
        <span>게시글 번호</span>
        <span>제목</span>
        <span>작성자</span>
        <span>작성일</span>
      </div>
      <div className='notice-list-box'>
        {arr.map(i => <NoticeListTitle />)}
      </div>
      <div className='notice-list-box-loc'>
        <Link to='/community/write'>
          <button className='notice-list-button'>
            <Pencil style={{width:'25px', height:'25px'}}/>
            글쓰기
          </button>
        </Link>
      </div>
      
    </div>
  )
}