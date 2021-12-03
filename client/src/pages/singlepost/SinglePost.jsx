import "./singlePost.css";
import jobImg from "../../img/job.jpeg";
import deleteIcon from "../../img/delete.png";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; //to get the id of the post
  const [post, setPost] = useState({});

  //const [image, setImage] = useState([]);
  //const PF = "http://localhost:5000";

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    fetchPost();
  }, [path]);

  const handleDelete = () => {
    try {
      const deletePost = async () => {
        await axios.delete("/posts/" + path);
        window.location.replace("/");
      };
      deletePost();
    } catch (err) {}
  };

  return (
    <div>
      <div className="wrapper">
        <div className="job-intro">
          <img
            src={deleteIcon}
            alt=""
            className="delete-icon"
            onClick={handleDelete}
          />
          <h1 className="job-title">{post.title}</h1>
          <img src={jobImg} alt="" className="job-image" />
        </div>
        <div className="job-descrip">
          <ul className="job-Items">
            <li>
              <strong>Descripción:</strong> <span>{post.desc}</span>
            </li>
            <li>
              <strong>Salario:</strong> <span>{post.salary}€/año</span>
            </li>
            <li>
              <strong>Tipo de contrato:</strong> <span>{post.permanence}</span>
            </li>
            <li>
              <strong>Puesto:</strong>
              {post.title} <span></span>
            </li>
            <li>
              <strong>Tecnologías:</strong>
              {post.technologies &&
                post.technologies.map((tech, index) => (
                  <span key={index}> {tech} </span>
                ))}
            </li>
            <li>
              <strong>Vacantes:</strong> <span>{post.vacancies}</span>
            </li>
            <li>
              <strong>Modalidad:</strong> <span>{post.modality}</span>
            </li>
            <li>
              <strong>Permanencia:</strong> <span>{post.permanence}</span>
            </li>
            <li>
              <strong>Tamaño empresa:</strong> <span>{post.companysize}</span>
            </li>
            <li>
              <strong>Sede principal:</strong> <span>{post.headquarters}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
