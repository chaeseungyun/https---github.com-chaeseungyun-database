import "./Review.css";
import { reviews } from "./api/communityClient";

export default function ReviewLine({ data }) {
  const deleteReview = async () => {
    try {
      const del = await reviews.delete("" + data.review_number);
      console.log(del);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="review-box">
      <span>{data && data.user_name}</span>
      <span className="review-content">{data && data.content}</span>
      <span>{data && data.rating}점</span>
      {data.user_name == sessionStorage.getItem("user_name") && (
        <button type="button" onClick={deleteReview}>
          삭제
        </button>
      )}
    </div>
  );
}
