import React from "react";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";
import "./blogItem.scss";

const BlogItem = ({ title, author, body, image }) => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img src={image} alt="post" className="image-thumb" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
