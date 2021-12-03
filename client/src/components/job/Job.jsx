import "./job.css";
import jobimg from "../../img/job.jpeg";
import { Link } from "react-router-dom";

function Job({ post }) {
  //const PF = "http://localhost:5000";

  return (
    <div className="jobs">
      <div className="job-desc">
        <Link to={`/post/${post._id}`} className="link">
          <p className="job-title">{post.title}</p>
          <p className="job-info">
            {post.salary}€/año | {post.contract} | {post.modality}
          </p>
          <p className="date">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </Link>
      </div>
      <div className="job-img">
        <img src={jobimg} alt="" />
      </div>
    </div>
  );
}

export default Job;
