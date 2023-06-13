import "./CommunityBlock.css";
import { ReactComponent as Bunny } from './asset/bunny.svg';
import { Link } from "react-router-dom";

export default function CommunityBlock({ data }) {
  console.log(data && data)
  return (
    <Link to={'/community/notice-view/' + data.post_number}>
      <div className="communityBlock-container">
        <Bunny className="communityBlock-img"></Bunny>
        <div className="title">{data && data.post_title}</div>
      </div>
    </Link>
  );
}
