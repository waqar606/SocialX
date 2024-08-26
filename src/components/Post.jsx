import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
const Post = ({ data, color, bgColor }) => {
  return (
    <>
      <div
        className="post_container"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
        }}
      >
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={data.pImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.userName}</h3>
              <p>{data.title}</p>
            </div>
          </div>
          <div className="dot">
            <BsThreeDotsVertical />
          </div>
        </div>
        <p>{data.description}</p>
        <div className="post_img">
          <img src={data.mImg} alt="" />
        </div>
        <div className="like_comment">
          <div className="likes">
            <FcLike className="items" /> {data.like} K
          </div>
          <div className="comments">
            <FaComment className="items" /> {data.comment} K
          </div>
          <div className="share">
            <FaShare className="items" />
            {data.share} K
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
