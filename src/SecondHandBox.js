import "./SecondHandBox.css";

export default function SecondHandBox({ num }) {
  return (
    <div className="SecondHandBox-container">
      <div className="img-place"></div>
      <span>{num}</span>
    </div>
  );
}
