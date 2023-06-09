import ShopInfomation from './ShopInfomation';
import Review from './Review';
import Map from './Map';
import './InfoPage.css';

export default function InfoPage() {
  return (
    <div className='info-page-container'>
      <ShopInfomation />
      <div className='info-map-review'>
        <Map />
        <Review />
      </div>
    </div>
  )
}