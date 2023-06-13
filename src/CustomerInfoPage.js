import { ReactComponent as List } from './asset/list.svg';
import './CustomerInfoPage.css';
import RequestBox from './RequestBox';
import NoticeListTitle from './NoticeListTitle';
import { community, users } from './api/communityClient';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerInfoPage() {
  const [userCom, setUserCom] = useState();
  const [req, setReq] = useState();
  const getUserCom = async () => {
    const result = await community.get('/posts/users/' + sessionStorage.getItem('user_number'))
    setUserCom(result.data)
  }
  const requestList = async () => {
    const result = await users.get('/requests/' + sessionStorage.getItem('user_number'))
    setReq(result.data)
  }
  useEffect(() => {
    getUserCom();
    requestList()
  }, [])
  return (
    <div className='cip-container'>
      <div className='cip-box'>
        <div className='cip-title'>
          <span>내가 요청한 붕어빵 가게 목록</span>
          <div className='base-request-button'>
            <List style={{width:'25px', height:'25px'}}/>
            <Link to='/shop-request'>
              <span>등록 요청하기!</span>
            </Link>
          </div>
        </div>
        {req && req.map(i => <RequestBox shop_address={i.shop_address} count={i["count(shop_address)"]} />)}
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
          {userCom && userCom.map(i => <NoticeListTitle key={i.post_number} post_number={i.post_number} post_title={i.post_title} user_name={sessionStorage.getItem('user_name')} creation_data={i.creation_date} />)}
        </div>
      </div>
    </div>
  )
}