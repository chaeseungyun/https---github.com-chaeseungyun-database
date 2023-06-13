import { useState } from 'react';
import {ReactComponent as Default} from './asset/defaultImage.svg';
import {ReactComponent as Pencil} from './asset/pencil.svg';
import { community } from './api/communityClient';
import {useNavigate} from 'react-router-dom'
import './WriteNotice.css';

export default function WriteNotice() {
  let today = new Date().toLocaleDateString()
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [selected, setSelected] = useState('게시글');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const priceHandle = (e) => {
    setPrice(e.target.value);
  }
  const writeContent = (e) => {
    setContent(e.target.value);
  }
  const select = (e) => {
    setSelected(e.target.value);
  }
  const titleHandle = (e) => {
    setTitle(e.target.value)
  }
  const push = async () => {
    try {
      if (selected === '게시글') {
        const result = await community.post('/posts', {
          author_number: Number(sessionStorage.getItem('user_number')),
          post_title: title,
          post_content: content,
        })
        console.log(result);
        navigate('/community/notice-list')
      } else if (selected === '거래글') {
        const result = await community.post('/trades', {
          author_number: Number(sessionStorage.getItem('user_number')),
          trade_title: title,
          trade_content: content,
          trade_price: Number(price),
          trade_status: 0,
          trade_date: null,
          trade_buyer_number: null,
        })

        navigate('/community/trade-list')
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='write-container'>
      <div className='write-box'>
        <div className='write-title-box'>
          <select className='select-type' onChange={select} value={selected}>
            <option value="게시글">게시글</option>
            <option value="거래글">거래글</option>
          </select>
          <button type='button' className='write-button' onClick={push}>
            <Pencil style={{width: '25px', height: '25px'}}/>
            등록
          </button>
        </div>
        <input placeholder='제목을 입력해 주세요.' className='write-input' value={title} onChange={titleHandle} />
        <div className='write-person-box'>
          <div className='view-person'>
              <Default style={{width:'50px', height:'50px'}}/>
              <div className='view-info'>
                <span>{sessionStorage.getItem('user_name')}</span>
                <span>{today}</span>
              </div>
          </div>
          {selected === '거래글' && <input type='text' placeholder='가격을 입력해 주세요' className='write-price' value={price} onChange={priceHandle}/>}     
        </div>
        <textarea placeholder='글 작성..' value={content} onChange={writeContent} className='write-content'></textarea>
      </div>
    </div>
  )
}
