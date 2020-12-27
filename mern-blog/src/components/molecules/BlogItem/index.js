import React from "react";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";
import "./blogItem.scss";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img src={RegisterBg} alt="post" className="image-thumb" />
      <div className="content-detail">
        <p className="title">Title</p>
        <p className="author">Author</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          tenetur repudiandae quibusdam veritatis aut doloremque eum ea atque
          obcaecati qui.
        </p>
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
