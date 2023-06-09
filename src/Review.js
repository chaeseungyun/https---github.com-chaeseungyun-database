import './Review.css';
import ReviewLine from './ReviewLine';

export default function Review() {
  let arr = [1, 2, 3];

  return (
    <div className='review-contaienr'>
      <div className='review-top'>후기</div>
      <div className='review-wrap'>
        {arr.map(x => <ReviewLine />)}    
      </div>
    </div>
  )
}