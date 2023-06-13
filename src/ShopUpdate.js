import "./CustomerPage.css";
import { ReactComponent as Home } from "./asset/home.svg";
import { ReactComponent as Location } from "./asset/location.svg";
import { ReactComponent as WhitePhone } from "./asset/whitePhone.svg";
import { ReactComponent as Menu } from "./asset/menu.svg";
import { ReactComponent as Clock } from "./asset/clock.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { shops, users } from "./api/communityClient";

export default function ShopUpdate() {
  const times = [];
  const [content, setContent] = useState([]);
  const [info, setInfo] = useState();
  const myShop1 = async () => {
    const myShop = await users.get(
      "/shop/" + sessionStorage.getItem("user_number")
    );
    console.log("myshop: ", myShop);
    setInfo(myShop.data);
    setAdress(myShop.data[0].shop_address);
    setCellPhone(myShop.data[0].shop_phone_number);
    setPName(myShop.data[0].shop_name);
    setStart(myShop.data[0].open_time);
    setEnd(myShop.data[0].close_time);

    // content 배열 초기화
    setContent([]);

    myShop.data.map((i) => {
      const p = {};
      p.bunga_type = i.bunga_type;
      p.bunga_count = i.bunga_count;
      p.bunga_cost = i.bunga_cost;
      p.bunga_name = i.bunga_name;
      setContent((prevContent) => [...prevContent, p]); // 기존의 content 배열에 새로운 붕어빵 객체 추가
    });
  };

  useEffect(() => {
    myShop1();
  }, []);
  const navigator = useNavigate();
  for (let i = 0; i < 25; i++) {
    let op = {};
    // 시간을 00시로 나타내기 위해
    op.hour = ("0" + i).slice(-2);
    op.label = ":";
    op.min = "00";
    times.push(op);
    op = {};
    op.hour = ("0" + i).slice(-2);
    op.label = ":";
    op.min = "30";
    times.push(op);
  }
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [boong, setBoong] = useState();
  const [counts, setCounts] = useState();
  const bread = ["선택", "팥", "슈크림", "치즈", "기타"];
  const count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [address, setAdress] = useState();
  const [cellPhone, setCellPhone] = useState();
  const [pName, setPName] = useState();
  const removeContent = (id) => {
    setContent((prevContent) => prevContent.filter((item) => item.id !== id));
  };

  const addressHandle = (e) => {
    setAdress(e.target.value);
  };
  const cellPhoneHandle = (e) => {
    setCellPhone(e.target.value);
  };
  const pNameHandle = (e) => {
    setPName(e.target.value);
  };

  const startTime = (e) => {
    setStart(e.target.value);
  };
  const endTime = (e) => {
    setEnd(e.target.value);
  };
  const checkboong = (e) => {
    setBoong(e.target.value);
  };
  const checkCounts = (e) => {
    setCounts(e.target.value);
  };
  const priceHandle = (e) => {
    setPrice(e.target.value);
  };
  const nameHandle = (e) => {
    setName(e.target.value);
  };

  const push = () => {
    let p = {};
    p.bunga_type = boong;
    p.bunga_count = Number(counts);
    p.bunga_cost = Number(price);
    p.bunga_name = name;
    p.id = name;
    setContent([...content, p]);
    setBoong("");
    setCounts("");
    setPrice("");
    setName("");
  };

  //shop_name, shop_address, open_time, close_time, producer_number
  //shop_number, bunga_type, bunga_count, bunga_cost, bunga_name
  const register = async () => {
    try {
      const result = await shops.put(
        "/" + sessionStorage.getItem("shop_number"),
        {
          shopTable: {
            shop_name: pName,
            shop_address: address,
            shop_phone_number: cellPhone,
            open_time: start,
            close_time: end,
            producer_number: Number(sessionStorage.getItem("user_number")),
            shop_number: Number(sessionStorage.getItem("shop_number")),
          },
          bungaTable: content,
        }
      );
      console.log(result);
      navigator("/myPage-seller");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="login-box">
      <div className="login-container">
        <Link to="/">
          <Home className="login-home" />
        </Link>
        <div className="boong-set">
          <div className="boong-title">붕어빵 마을</div>
          <div className="boong-p">자신의 붕어빵 가게를 등록해주세요.</div>
          <div className="boong-p">함께 지도를 만들어가요!</div>
        </div>
        <div className="find-mid">
          <div className="join-mid">
            <form className="find-form">
              <div className="login-input-set1">
                <Location className="login-user" />
                <input
                  className="login-input"
                  placeholder="주소"
                  value={address}
                  onChange={addressHandle}
                />
              </div>
              <div className="login-input-set1">
                <WhitePhone className="login-user" />
                <input
                  className="login-input"
                  placeholder="전화번호"
                  value={cellPhone}
                  onChange={cellPhoneHandle}
                />
              </div>
              <div className="login-input-set1">
                <WhitePhone className="login-user" />
                <input
                  className="login-input"
                  placeholder="가게명"
                  value={pName}
                  onChange={pNameHandle}
                />
              </div>
              <div className="open-close">
                <Clock className="login-user" />
                <select onChange={startTime} value={start}>
                  {times.map((x) => (
                    <option key={x.hour + x.min}>
                      {x.hour + x.label + x.min}
                    </option>
                  ))}
                </select>
                <span>~</span>
                <select onChange={endTime} value={end}>
                  {times.map((x) => (
                    <option key={x.hour + 1 + x.min}>
                      {x.hour + x.label + x.min}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <form className="menu-form">
              <button type="button" onClick={push} className="push-button">
                추가
              </button>
              <div className="menu-set">
                <Menu className="login-user" />
                <div className="login-input-set2">
                  <select
                    placeholder="붕어빵 종류"
                    value={boong}
                    onChange={checkboong}
                  >
                    {bread.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                  <select
                    placeholder="개수"
                    value={counts}
                    onChange={checkCounts}
                  >
                    {count.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                  <input
                    placeholder="금액"
                    value={price}
                    onChange={priceHandle}
                  />
                  <input
                    placeholder="붕어빵 이름"
                    value={name}
                    onChange={nameHandle}
                  />
                </div>
              </div>
              <div className="overflow-none">
                {content.map((x) => (
                  <div className="pushed" key={x.id}>
                    <span>{x.bunga_type}</span>
                    <span>{x.bunga_count}</span>
                    <span>{x.bunga_cost}</span>
                    <span>{x.bunga_name}</span>
                    <button
                      type="button"
                      onClick={() => removeContent(x.id)} // 수정: removeContent 함수에 id 전달
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
            </form>
          </div>
          <button className="loginpage-button" type="button" onClick={register}>
            수정 완료
          </button>
        </div>
      </div>
    </div>
  );
}
