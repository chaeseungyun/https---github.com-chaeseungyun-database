import { useState } from "react";
import "./CustomerPage.css";
import { ReactComponent as Home } from "./asset/home.svg";
import { ReactComponent as Location } from "./asset/location.svg";
import { Link, useNavigate } from "react-router-dom";
import { users } from "./api/communityClient";

export default function Request() {
  const [loc, setLoc] = useState('');
  const nav = useNavigate();
  const loctionHandle = (e) => {
    setLoc(e.target.value);
  }
  const postRequest = async () => {
    try {
      const result = await users.post(`/requests`, {
      shop_address: loc,
      user_number: Number(sessionStorage.getItem('user_number'))
      })
      alert('등록 요청되었습니다.')
      nav('/myPage-customer')
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className="login-box">
      <div className="login-container">
        <Link to='/'>
          <Home className="login-home" />
        </Link>
        <div className="boong-set">
          <div className="boong-title">붕어빵 마을</div>
          <div className="boong-p">새로운 붕어빵 가게를 찾으셨나요?</div>
          <div>함께 지도를 만들어봐요!</div>
        </div>
        <div className="request-mid">
          <div className="request-text">
            <Location className="login-user"/>
            <input type='text' placeholder="주소" className="request-input" value={loc} onChange={loctionHandle}/>
          </div>
          <button className="loginpage-button" onClick={postRequest}>등록 요청</button>
        </div>
      </div>
    </div>
  );
}
