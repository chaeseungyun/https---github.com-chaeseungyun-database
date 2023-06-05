import BoongMap from "./BoongMap";
import PreCommunity from "./PreCommunity";
import PreSecondHT from "./PreSecondHT";
import "./Main.css";

export default function Main() {
  return (
    <div className="layout">
      <BoongMap />
      <div>
        <PreCommunity />
        <PreSecondHT />
      </div>
    </div>
  );
}
