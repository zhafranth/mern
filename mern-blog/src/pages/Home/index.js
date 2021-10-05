import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import { useHistory } from "react-router-dom";
import "./home.scss";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/blog/posts?page=2")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {data.map((item) => (
          <BlogItem
            key={item._id}
            title={item.title}
            body={item.body}
            image={`http://localhost:4000/${item.image}`}
            author={item.author.name}
          />
        ))}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
