import "./nav.css";
import {ReactComponent as DefaultImage} from './asset/defaultImage.svg';
import LoginButton from './LoginButton.js';
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname === '/login') return;
  if (location.pathname === '/find-id-password') return;
  if (location.pathname === '/join') return;
  if (location.pathname === '/shop-request') return;

  const myPage = async () => {
    const type = sessionStorage.getItem('user_type');
    if (type === '1') navigate('/myPage-customer')
    else if (type ==='0') navigate('/myPage-seller')
  }
  const logOut = () => {
    sessionStorage.clear();
    navigate('/')
  }
  return (
    <div className="top">
      <Link to='/'>
        <span className="font">붕어빵 마을</span>
      </Link>
      <div className="name-box">
        {sessionStorage.getItem('id') ? 
        <div className="info-box">
          <DefaultImage  className="default-image" onClick={myPage}/>
          <span onClick={logOut}>로그아웃</span>
        </div>
         : <LoginButton />}
      </div>
    </div>
  )
}