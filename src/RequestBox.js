import './RequestBox.css';

export default function RequestBox() {
  return (
    <div className="request-box-container">
      <div>chungJeolRo-1600-2kong</div>
      <span className='block'></span>
      <div className='request-box-count'>
        지금까지 요청된수가 x회에요.
        <br />
        x회 더 등록 요청되면
        <br />
        정식 가게로 등록돼요.
      </div>
    </div>
  )
}