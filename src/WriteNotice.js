import { useEffect, useState } from 'react';
import {ReactComponent as Default} from './asset/defaultImage.svg';
import {ReactComponent as Pencil} from './asset/pencil.svg';
import './WriteNotice.css';

export default function WriteNotice() {
  let today = new Date().toLocaleDateString()
  const [content, setContent] = useState('');
  const [selected, setSelected] = useState();
  const writeContent = (e) => {
    setContent(e.target.value);
  }
  const select = (e) => {
    setSelected(e.target.value);
  }
  return (
    <div className='write-container'>
      <div className='write-box'>
        <div className='write-title-box'>
          <select className='select-type' onChange={select}>
            <option value="게시글">게시글</option>
            <option value="거래글">거래글</option>
          </select>
          <button type='button' className='write-button'>
            <Pencil style={{width: '25px', height: '25px'}}/>
            등록
          </button>
        </div>
        <input placeholder='제목을 입력해 주세요.' className='write-input'/>
        <div className='write-person-box'>
          <div className='view-person'>
              <Default style={{width:'50px', height:'50px'}}/>
              <div className='view-info'>
                <span>이름</span>
                <span>{today}</span>
              </div>
          </div>
          {selected === '거래글' && <input type='text' placeholder='가격을 입력해 주세요' className='write-price'/>}     
        </div>
        <textarea placeholder='글 작성..' value={content} onChange={writeContent} className='write-content'></textarea>
      </div>
    </div>
  )
}
