import "./CommunityBlock.css";

export default function CommunityBlock({ num }) {
  return (
    <div className="communityBlock-container">
      <div className="communityBlock-img"></div>
      <div className="title">{num}</div>
    </div>
  );
}
