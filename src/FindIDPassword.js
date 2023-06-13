import "./CustomerPage.css";
import { ReactComponent as User } from "./asset/user.svg";
import { ReactComponent as Home } from "./asset/home.svg";
import { ReactComponent as Name } from "./asset/name.svg";
import { ReactComponent as Phone } from "./asset/phone.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { users } from "./api/communityClient";
import { useState } from "react";

export default function FindIDPassword() {
  const [name, setName] = useState('');
  const [idPhone, setIdPhone] = useState('');
  const [id, setId] = useState('');
  const [passwordPhone, setPasswordPhone] = useState('');
  const navigate = useNavigate();
  const nameHandle = (e) => {
    setName(e.target.value)
  }
  const idPhoneHandle = (e) => {
    setIdPhone(e.target.value)
  }
  const idHandle = (e) => {
    setId(e.target.value)
  }
  const passwordHandle = (e) => {
    setPasswordPhone(e.target.value)
  }
  const findId = async () => {
    try {
      const id = await users.post('/find/id', {
      user_name: name,
      user_phone_number: idPhone
    })
    navigate('/complete-id', {
      state: id.data.user_id
    })
    } catch {
      alert('없는 계정이거나 잘못된 정보입니다.')
    }
  }
  const findPassword = async () => {
    try {
      const password = await users.post('/find/password', {
      user_id: id,
      user_phone_number: passwordPhone
    })
    console.log(password)
    navigate('/complete-password', {
      state: password.data.user_password
    })
    } catch {
      alert('없는 계정이거나 잘못된 정보입니다.')
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
          <div className="boong-p">아이디와 비밀번호가 기억나지 않으신가요?</div>
        </div>
        <div className="find-mid-row">
          <form className="find-form">
            <div className="login-input-set1">
              <Name className="login-user" />
              <input className="login-input" placeholder="이름" value={name} onChange={nameHandle}/>
            </div>
            <div className="login-input-set1">
              <Phone className="login-user" />
              <input className="login-input" placeholder="전화번호" value={idPhone} onChange={idPhoneHandle}/>
            </div>
            <div className="login-button-set">
              <button className="loginpage-button" type='button' onClick={findId}>아이디 찾기</button>
            </div>
          </form>
          <form className="find-form">
            <div className="login-input-set1">
              <User className="login-user" />
              <input className="login-input" placeholder="아이디" value={id} onChange={idHandle}/>
            </div>
            <div className="login-input-set1">
              <Phone className="login-user" />
              <input className="login-input" placeholder="전화번호" value={passwordPhone} onChange={passwordHandle} />
            </div>
            <div className="login-button-set">
              <button className="find-password-button" type='button' onClick={findPassword}>비밀번호 찾기</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
