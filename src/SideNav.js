import './SideNav.css';
import {ReactComponent as Town} from './asset/town.svg';
import {ReactComponent as Pencil} from './asset/pencil.svg';
import {ReactComponent as Notice} from './asset/notice.svg';
import {ReactComponent as Write} from './asset/write.svg';
import {ReactComponent as Trade} from './asset/trade.svg';
import { Link, useNavigate } from 'react-router-dom';
import { community, users } from './api/communityClient';
import { useEffect, useState } from 'react';

export default function SideNav() {
  const navigate = useNavigate();
  const [userNumber, setUserNumber] = useState();
  const [comm, setComm] = useState();
  const isLogin = () => {
    if (!sessionStorage.getItem('isLogin')) alert ('로그인 후 이용해주세요')
    else {
      navigate('/community/write')
    }
  }
  const allCommunity = async () => {
    const result = await community.get('/all/desc')
    setComm(result.data);
  }
  const allUsers = async () => {
    const result = await users.get('/all');
    setUserNumber(result.data)
  }
  useEffect(() => {
    allUsers();
    allCommunity()
  }, [])

  return (
    <div className="side-container">
      <div className='side-title'>
        <Town style={{width:"50px", height:"50px"}}/>
        <div className='side-title-boong'>붕어빵 마을</div>
      </div>
      <div className='side-count'>
        <div className='side-count-box'>
          <span>회원수</span>
          <span>{userNumber && userNumber.length}명</span>
        </div>
        <div className='side-count-box'>
          <span>게시글 수</span>
          <span>{comm && comm.length}개</span>
        </div>
      </div>
      <div className='side-write'>
          <button className='side-write-button' onClick={isLogin}>
            <Pencil style={{width:"50px", height: "50px"}}/>
            글쓰기
          </button>
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