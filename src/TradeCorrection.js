import './NoticeViewer.css';
import {ReactComponent as Default} from './asset/defaultImage.svg';

export default function TradeCorrection() {
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
        </div>
        <div className='correction-content'>
          content
        </div>
        <div>
        <div className='correction-button-container'>
          <div className='trade-button-box'>
            <button className='view-button-style'>취소</button>
            <button className='view-button-style'>수정 완료</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}