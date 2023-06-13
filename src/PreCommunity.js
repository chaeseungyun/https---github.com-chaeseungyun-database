import { Link } from "react-router-dom";
import CommunityBlock from "./CommunityBlock";
import "./PreCommunity.css";
import { community } from "./api/communityClient";
import { useState, useEffect } from "react";

export default function PreCommunity() {
  let arr = [1, 2, 3, 4];
  const [data, setData] = useState();
  const getList = async () => {
    const result = await community.get('posts/all/desc');
    console.log(result.data)
    setData(result.data)
  }
  useEffect(() => {
    getList()
  }, [])
  return (
    <div className="pre-com">
      <div className="pre-com-title">
        <span className="pre-com-title-com">커뮤니티(게시글)</span>
        <Link to='/community/notice-list'>
          <span className="pre-com-title-more">더보기</span>
        </Link>
      </div>
      {data && data.slice(0,4).map(i => <CommunityBlock key={i} data={i} />)}
    </div>
  );
}
