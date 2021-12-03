import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Post from "../../components/post/Post";
import "./home.css";

function Home() {
  const [posts, setPost] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);
      setPost(res.data);
    };
    fetchPost();
  }, [search]);

  return (
    <div className="home">
      <Post posts={posts} />
    </div>
  );
}

export default Home;
