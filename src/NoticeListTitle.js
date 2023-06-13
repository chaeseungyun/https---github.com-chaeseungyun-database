import "./NoticeListTitle.css";
import { Link } from "react-router-dom";

export default function NoticeListTitle({
  post_number,
  post_title,
  user_name,
  creation_data,
}) {
  return (
    <Link to={"/community/notice-view/" + post_number}>
      <div className="notice-list-container">
        <span className="notice-title_number">{post_number}</span>
        <span className="notice-title_title">{post_title}</span>
        <span className="notice-title_name">{user_name}</span>
        <span className="notice-title_date">{creation_data}</span>
      </div>
    </Link>
  );
}
