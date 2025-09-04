import { useEffect, useState } from "react";
import "../styles/Dash-content.css";

function DashContents() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setAnimate(true); 
      const timer = setTimeout(() => setAnimate(false), 500); 
      return () => clearTimeout(timer);
    }
  }, [index, posts]);

  const handlePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
  };

  if (posts.length === 0) {
    return <p>Loading posts...</p>;
  }

  const post = posts[index];

  return (
    <div className="posts-main">
      <h2>All Posts : {post.id}/{posts.length}</h2>
      <div
        className={`post-card ${animate ? `slide-${direction}` : ""}`}
      >
        <span className="arrow left" onClick={handlePrev}>
            <i class="fa-solid fa-arrow-left"></i>
        </span>

        <div className="post-content">
          <h3>User ID: {post.userId}</h3>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>

        <span className="arrow right" onClick={handleNext}>
            <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
}

export default DashContents;
