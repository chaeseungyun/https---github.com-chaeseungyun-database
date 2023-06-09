import './ShopInfomation.css';
import {ReactComponent as Location} from './asset/location.svg';
import {ReactComponent as Clock} from './asset/clock.svg';
import {ReactComponent as WhitePhone} from './asset/whitePhone.svg';
import {ReactComponent as Menu} from './asset/menu.svg';
import {ReactComponent as Down} from './asset/down.svg';

export default function ShopInfomation() {
  return (
    <div className='shop-info-container'>
      <div className='shop-info-title'>코룡붕어빵빵</div>
      <div className='shop-common-style'>
        <Location className='svg-style'/>
        <span className='shop-text-style'>한국기술교육대학교</span>
      </div>
      <div className='shop-common-style'>
        <Clock className='svg-style'/>
        <span className='shop-text-style'>13:00 ~ 19:00</span>
      </div>
      <div className='shop-common-style'>
        <WhitePhone className='svg-style'/>
        <span className='shop-text-style'>041-1234-5678</span>
      </div>
      <div className='shop-menu-box'>
        <Menu className='svg-style'/>
        <div className='shop-menu-list'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <Down className='svg-style' />
      </div>
    </div>
  )
}