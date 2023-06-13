import './ShopInfomation.css';
import {ReactComponent as Location} from './asset/location.svg';
import {ReactComponent as Clock} from './asset/clock.svg';
import {ReactComponent as WhitePhone} from './asset/whitePhone.svg';
import {ReactComponent as Menu} from './asset/menu.svg';

export default function ShopInfomation({info}) {
  return (
    <div className='shop-info-container'>
      <div className='shop-info-title'>{info && info[0].shop_name}</div>
      <div className='shop-common-style'>
        <Location className='svg-style'/>
        <span className='shop-text-style'>{info && info[0].shop_address}</span>
      </div>
      <div className='shop-common-style'>
        <Clock className='svg-style'/>
        <span className='shop-text-style'>{info && info[0].open_time} ~ {info && info[0].close_time}</span>
      </div>
      <div className='shop-common-style'>
        <WhitePhone className='svg-style'/>
        <span className='shop-text-style'>{info && info[0].shop_phone_number}</span>
      </div>
      <div className='shop-menu-box'>
        <Menu className='svg-style'/>
        <div className='shop-menu-list'>
          {info && info.map(i => 
          <div className='shop-list-set'>
            <span>{i.bunga_name}</span>
            <span>{i.bunga_count}개</span>
            <span>{i.bunga_cost}원</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}