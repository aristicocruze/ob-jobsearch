import "./createPost.css";
import { useState } from "react";
import FormInput from "../../components/formInput/FormInput";
import axios from "axios";

function CreatePost() {
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({
    title: "",
    desc: "",
    image: null,
    salary: "",
    contract: "",
    technologies: "",
    vacancies: "",
    modality: "",
    permanence: "",
    companysize: "",
    headquarters: "",
  });

  //pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  //required: true,
  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Titulo",
      errorMessage: "Titulo",
      label: "Titulo",
    },
    {
      id: 2,
      name: "desc",
      type: "text",
      placeholder: "Descripcion",
      errorMessage: "Descripcion",
      label: "Descripcion",
    },
    {
      id: 3,
      name: "image",
      type: "text",
      placeholder: "image",
      label: "image",
    },
    {
      id: 4,
      name: "salary",
      type: "text",
      placeholder: "Salario",
      errorMessage: "",
      label: "Salario",
    },
    {
      id: 5,
      name: "contract",
      type: "text",
      placeholder: "Contrato",
      errorMessage: "",
      label: "Contrato",
    },
    {
      id: 6,
      name: "technologies",
      type: "text",
      placeholder: "Tecnologias",
      errorMessage: "",
      label: "Tecnologias",
    },
    {
      id: 7,
      name: "vacancies",
      type: "text",
      placeholder: "Vacantes",
      errorMessage: "",
      label: "Vacantes",
    },
    {
      id: 8,
      name: "modality",
      type: "text",
      placeholder: "Modalidad",
      errorMessage: "",
      label: "Modalidad",
    },
    {
      id: 9,
      name: "permanence",
      type: "text",
      placeholder: "Permanencia",
      errorMessage: "",
      label: "Permanencia",
    },
    {
      id: 10,
      name: "companysize",
      type: "text",
      placeholder: "Tamaño de la compañia",
      errorMessage: "",
      label: "Tamaño de la compañia",
    },
    {
      id: 11,
      name: "headquarters",
      type: "text",
      placeholder: "Locacion",
      errorMessage: "",
      label: "Locacion",
    },
  ];

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post("/posts", values);
      window.location.replace("/post/" + res.data._id); //Change location to the new post.
    } catch (err) {
      console.log("Error loading created page");
    }
  };

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //console.log(`valores: ${values.desc}`);
  return (
    <div className="create-container">
      <form onSubmit={handleSubmit} className="job-form">
        <h1> Realizar publicación </h1>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Publicar</button>
      </form>
    </div>
  );
}

export default CreatePost;
