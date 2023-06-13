import ShopInfomation from "./ShopInfomation";
import Review from "./Review";
import Map from "./Map";
import "./InfoPage.css";
import { useParams } from "react-router-dom";
import { shops } from "./api/communityClient";
import { useEffect, useState } from "react";

export default function InfoPage() {
  const params = useParams();
  const [info, setInfo] = useState(null);

  const getInfo = async () => {
    try {
      const result = await shops.get("/" + params.id);
      setInfo(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="info-page-container">
      <ShopInfomation info={info} />
      <div className="info-map-review">
        {info && <Map loc={info[0].shop_address} />}
        <Review />
      </div>
    </div>
  );
}
