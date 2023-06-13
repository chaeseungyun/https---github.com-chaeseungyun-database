import { useEffect, useState } from 'react';
import './Review.css';
import ReviewLine from './ReviewLine';
import { reviews } from './api/communityClient';

export default function ReviewMyShop() {
  let arr = [1, 2, 3];
  const [review, setReview] = useState();
  const getReviews = async () => {
    if(sessionStorage.getItem('shop_number')) {
      const result = await reviews.get('/shop/' + Number(sessionStorage.getItem('shop_number')));
      setReview(review);
    }
  }
  useEffect(() => {
    getReviews()
  }, []);
  return (
    <div className='review-contaienr'>
      <div className='review-top'>후기</div>
      <div className='review-wrap'>
        {review && review.map(x => <ReviewLine key={x} data={x} />)}    
      </div>
    </div>
  )
}