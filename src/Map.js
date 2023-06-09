import { useEffect } from "react";
import "./Map.css";
import ShopInfo from "./ShopInfo";

export default function Map() {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div className="map-container">
      <div id="map" style={{ width: "60vw", height: "50vh" }}></div>
    </div>
  );
}
