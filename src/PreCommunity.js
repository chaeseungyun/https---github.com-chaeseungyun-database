import CommunityBlock from "./CommunityBlock";
import "./PreCommunity.css";

export default function PreCommunity() {
  let arr = [1, 2, 3, 4];
  return (
    <div className="pre-com">
      <div className="pre-com-title">
        <span className="pre-com-title-com">커뮤니티(게시글)</span>
        <span className="pre-com-title-more">더보기</span>
      </div>
      {arr.map((item) => (
        <CommunityBlock num={item} key={item} />
      ))}
    </div>
  );
}
