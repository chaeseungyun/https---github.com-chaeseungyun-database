import './NoticeViewer.css';
import {ReactComponent as Default} from './asset/defaultImage.svg';
import {ReactComponent as Comment} from './asset/comment.svg';
import {ReactComponent as Done} from './asset/done.svg';
import {ReactComponent as Pencil} from './asset/pencil.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { community, users } from './api/communityClient';

export default function TradeViewer() {
  const params = useParams();
  const nav = useNavigate()
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [userNumber, setUserNumber] = useState();
  const [name, setName] = useState('');
  const [state, setState] = useState();
  const getView = async () => {
    const result = await community.get('/trades/' + params.post_number);
    const result2 = await community.get('/comments/' + params.post_number);
    await setData(result.data[0]);
    await setData2(result2.data[0])
  }
  const allUsers = async () => {
    const result = await users.get('/all');
    await setUserNumber(result.data)
  }
  const getName = async () => {
    await setName(userNumber && data && userNumber.filter(i => i.user_number == data.author_number)[0].user_name)
    setState(data, name)
  }
  useEffect(() => {
    getView();
    allUsers();
    getName();
  }, [])
  const deletePost = async () => {
    const result = await community.delete('/' + params.post_number)
    if (result.status == 200) nav('/community/trade-list')
  }
  return (
    <div className='view-container'>
      <div className="view-box">
        <div className='view-title'>
          {data && data.trade_title}
        </div>
        <div className='view-name-box'>
            <div className='view-person'>
              <Default style={{width:'50px', height:'50px'}}/>
              <div className='view-info'>
                <span>{userNumber && data && userNumber.filter(i => i.user_number == data.author_number)[0].user_name}</span>
                <span>{data && data.creation_date}</span>
              </div>
            </div>
            <div className='view-comment-sets'>
              <Done style={{width:'25px', height:'25px'}}/>
              <span>
                {data && data.trade_status == '0' ? '판매중' : '판매완료'}
              </span>
            </div>
        </div>
        <div className='view-content'>
          <span>가격 : {data && data.trade_price}원</span>
          <span>{data && data.trade_content}</span>
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
            <span>{data2 && data2.user_name}</span>
            <span>{data2 && data2.comment_content}</span>
          </div>
          <div className='view-button-container'>
            <div className='trade-button-box'>
              <button className='view-button-style'>구매</button>
              <Link to='/community/write'>
                <button className='view-button-style'>글쓰기</button>
              </Link>
              <Link to={'/community/trade/trade-correction/' + params.post_number}>
              {data && data.author_number == sessionStorage.getItem('user_number') && 
                <button className='view-button-style'>
                  <Pencil style={{width:'25px', height:'25px'}} />
                  수정
                </button>
              }
              </Link>
            </div>
            <div className='trade-button-box'>
              <Link to='/community/trade-list'>
                <button className='view-button-style'>목록</button>
              </Link>
              {data && data.author_number == sessionStorage.getItem('user_number') && 
              <button className='view-button-style' onClick={deletePost}>삭제</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}