import './SideNav.css';
import {ReactComponent as Town} from './asset/town.svg';
import {ReactComponent as Pencil} from './asset/pencil.svg';
import {ReactComponent as Notice} from './asset/notice.svg';
import {ReactComponent as Write} from './asset/write.svg';
import {ReactComponent as Trade} from './asset/trade.svg';
import { Link } from 'react-router-dom';

export default function SideNav() {
  return (
    <div className="side-container">
      <div className='side-title'>
        <Town style={{width:"50px", height:"50px"}}/>
        <div className='side-title-boong'>붕어빵 마을</div>
      </div>
      <div className='side-count'>
        <div className='side-count-box'>
          <span>회원수</span>
          <span>5000명</span>
        </div>
        <div className='side-count-box'>
          <span>게시글 수</span>
          <span>18000개</span>
        </div>
      </div>
      <div className='side-write'>
        <Link to='/community/write'>
          <button className='side-write-button'>
            <Pencil style={{width:"50px", height: "50px"}}/>
            글쓰기
          </button>
        </Link>    
      </div>
      <div className='side-notice-box'>
        <Notice style={{width:"50px", height:"50px"}} />
        <Link to='/community/all-notice'>
          <span className='side-notice-comment'>
          전체 커뮤니티 글
          </span>
        </Link>
      </div>
      <div className='side-notice-text'>
        <Link to='/community/notice-list'>
          <div className='side-text-box'>
            <Write style={{width:"40px", height:"40px"}} />
            <span>게시글</span>
          </div>
        </Link>
        <Link to='/community/trade-list'>
          <div className='side-text-box'>
            <Trade style={{width:"40px", height:"40px"}} />
            <span>거래글</span>  
          </div>
        </Link>
      </div>
    </div>
  )
}