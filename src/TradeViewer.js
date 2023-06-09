import './NoticeViewer.css';
import {ReactComponent as Default} from './asset/defaultImage.svg';
import {ReactComponent as Comment} from './asset/comment.svg';
import {ReactComponent as Done} from './asset/done.svg';
import {ReactComponent as Pencil} from './asset/pencil.svg';
import { Link } from 'react-router-dom';

export default function TradeViewer() {
  return (
    <div className='view-container'>
      <div className="view-box">
        <div className='view-title'>
          제목
        </div>
        <div className='view-name-box'>
            <div className='view-person'>
              <Default style={{width:'50px', height:'50px'}}/>
              <div className='view-info'>
                <span>이름</span>
                <span>학번</span>
              </div>
            </div>
            <div className='view-comment-set'>
              <Done style={{width:'25px', height:'25px'}}/>
              <span>
                판매 완료
              </span>
            </div>
        </div>
        <div className='view-content'>
          content
        </div>
        <div>
          <div className='view-comment-top'>
            <div className='view-comment-set'>
            <Comment style={{width:'25px', height:'25px'}}/>
            <span>
              댓글
            </span>
            </div>
            <button className='view-comment-write'>댓글 쓰기</button>
          </div>
          <div className='view-comment-content'>
            댓글 내용
          </div>
          <div className='view-button-container'>
            <div className='trade-button-box'>
              <button className='view-button-style'>구매</button>
              <Link to='/community/write'>
                <button className='view-button-style'>글쓰기</button>
              </Link>
              <Link to='/community/trade/correction'>
              <button className='view-button-style'>
                <Pencil style={{width:'25px', height:'25px'}} />
                수정
              </button>
              </Link>
            </div>
            <div className='trade-button-box'>
              <button className='view-button-style'>목록</button>
              <button className='view-button-style'>맨 위로</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}