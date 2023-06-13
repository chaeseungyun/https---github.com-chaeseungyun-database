import { useEffect, useState } from "react";
import "./Map.css";
import {
  Map,
  ZoomControl,
  MapTypeControl,
  KakaoLatLng,
  MapMarker,
} from "react-kakao-maps-sdk";

export default function NearMap({ loc }) {
  const getLocationByAddress = async (address) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    return await new Promise((resolve) => {
      geocoder.addressSearch(address, function (result) {
        resolve(new window.kakao.maps.LatLng(result[0].y, result[0].x));
      });
    });
  };

  const { kakao } = window;
  console.log(loc && loc);
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 40.76336432590076, lng: 130.28087002349129 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });
  useEffect(() => {
    async function trans() {
      const container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(38.76336432590076, 127.28087002349),
        level: 5,
      };
      let map = new kakao.maps.Map(container, options);
      const ps = new kakao.maps.services.Places();
      const xy = await getLocationByAddress(loc);
      console.log(xy);

      setState((prev) => ({
        ...prev,
        center: {
          lat: xy.Ma,
          lng: xy.La,
        },
      }));
    }
    trans();
  }, []);

  return (
    <div className="map-container">
      <Map // 지도를 표시할 Container
        id="map"
        center={state.center}
        style={{
          width: "60vw",
          height: "50vh",
        }}
        level={5} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={state.center}
        ></MapMarker>
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      </Map>
    </div>
  );
}
