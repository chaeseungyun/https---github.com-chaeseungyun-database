import { useEffect, useState } from "react";
import "./Review.css";
import ReviewLine from "./ReviewLine";
import { reviews } from "./api/communityClient";
import { useParams } from "react-router-dom";

export default function Review() {
  const [review, setReview] = useState();
  const [content, setContent] = useState();
  const [rating, setRating] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const contentHandle = (e) => {
    setContent(e.target.value);
  };
  const ratingHandle = (e) => {
    setRating(e.target.value);
  };
  const isClickedHandle = () => {
    setIsClicked((x) => !x);
  };
  const params = useParams();
  const getReviews = async () => {
    const result = await reviews.get("/shop/" + params.id);
    console.log(result);
    setReview(result.data);
  };
  const addReview = async () => {
    const add = await reviews.post("", {
      user_id: sessionStorage.getItem("id"),
      shop_number: Number(params.id),
      content: content,
      rating: Number(rating),
    });
    window.location.reload();
  };
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div className="review-contaienr">
      <div className="review-top">후기</div>
      <button type="button" onClick={isClickedHandle}>
        후기 추가
      </button>
      {isClicked && (
        <div>
          <input
            value={content}
            onChange={contentHandle}
            placeholder="후기를 작성해주세요."
          />
          <input
            value={rating}
            onChange={ratingHandle}
            placeholder="별점을 남겨주세요."
          />
          <button type="button" onClick={addReview}>
            추가
          </button>
        </div>
      )}
      <div className="review-wrap">
        {review && review.map((x) => <ReviewLine key={x} data={x} />)}
      </div>
    </div>
  );
}
