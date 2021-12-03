import Job from "../job/Job";
import "./post.css";

function Post({ posts }) {
  return (
    <div className="post">
      <div className="wrapper">
        <p className="title">Ofertas OpenBootcamp 2021</p>
        <p className="desc">
          Encuentra aquí toda la información sobre las distintas ofertas de
          trabajo que ofrecemos.
        </p>
        {posts.map((p, index) => (
          <Job key={index} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Post;
