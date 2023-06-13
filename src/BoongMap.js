import { useEffect, useState } from "react";
import "./BoongMap.css";
import ShopInfo from "./ShopInfo";
import { shops } from "./api/communityClient";
import {
  Map,
  ZoomControl,
  MapTypeControl,
  MapMarker,
} from "react-kakao-maps-sdk";

const { kakao } = window;

export default function BoongMap() {
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 36.76336432590076, lng: 127.28087002349129 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });
  useEffect(() => {
    const container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(36.76336432590076, 127.28087002349),
      level: 5,
    };
    let map = new kakao.maps.Map(container, options);
  }, []);

  const [shop, setShop] = useState();

  const getLocationByAddress = async (address) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    return await new Promise((resolve) => {
      geocoder.addressSearch(address, function (result) {
        resolve(new window.kakao.maps.LatLng(result[0].y, result[0].x));
      });
    });
  };

  const getShop = async () => {
    const result = await shops.get("/all");
    console.log(result);
    setShop(result.data);

    const temp = [];
    for (let i = 0; i < result.data.length; i++) {
      const item = result.data[i];
      const xy = await getLocationByAddress(item.shop_address);
      temp.push({
        center: {
          lat: xy.Ma,
          lng: xy.La,
        },
      });
    }

    setMarkerList(temp);
  };
  useEffect(() => {
    getShop();
  }, []);

  const [markerList, setMarkerList] = useState([]);

  return (
    <div className="map-container">
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: state.center.lat,
          lng: state.center.lng,
        }}
        style={{
          width: "60vw",
          height: "50vh",
        }}
        level={5} // 지도의 확대 레벨
      >
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        {markerList.map((marker, index) => (
          <MapMarker
            key={`marker-${index},${index}`}
            position={{ lat: marker.center.lat, lng: marker.center.lng }}
          ></MapMarker>
        ))}

        <button
          onClick={() =>
            setState({
              center: { lat: 36.76336432590076, lng: 127.28087002349129 },
              isPanto: true,
            })
          }
          className="map-button"
        >
          원래 위치로
        </button>
      </Map>
      <ShopInfo shop={shop} />
    </div>
  );
}
