import './TradeListTitle.css';
import { Link } from 'react-router-dom';

export default function TradeListTitle({creation_date, post_number, trade_price, trade_status, trade_title, user_name}) {
  return (
    <Link to={'/community/trade-view/' + post_number}>
      <div className='trade-list-container'>
        <span className='trade-list_number'>{post_number}</span>
        <span className='trade-list_title' >{trade_title}</span>
        <span className='trade-list_status' >{trade_status === 0 ? '판매중' : "판매완료"}</span>
        <span className='trade-list_price' >{trade_price}</span>
        <span className='trade-list_name'>{user_name}</span>
        <span className='trade-list_date'>{creation_date}</span>
      </div>
    </Link>
  )
}