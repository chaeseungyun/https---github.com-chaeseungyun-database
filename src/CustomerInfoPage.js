import { ReactComponent as List } from './asset/list.svg';
import './CustomerInfoPage.css';
import RequestBox from './RequestBox';
import NoticeListTitle from './NoticeListTitle';
export default function CustomerInfoPage() {
  const arr = [1, 2, 3, 4]
  return (
    <div className='cip-container'>
      <div className='cip-box'>
        <div className='cip-title'>
          <span>내가 요청한 붕어빵 가게 목록</span>
          <div className='base-request-button'>
            <List style={{width:'25px', height:'25px'}}/>
            <span>등록 요청하기!</span>
          </div>
        </div>
        <RequestBox />
      </div>
      <div>
        <div className='customer-list-box'>
          <div>작성글</div>
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
      </div>
    </div>
  )
}