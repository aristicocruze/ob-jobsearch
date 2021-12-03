const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    salary: {
      type: String,
      required: false,
    },
    contract: {
      type: String,
      required: false,
    },
    technologies: {
      type: Array,
      required: false,
    },
    vacancies: {
      type: Number,
      required: false,
    },
    modality: {
      type: String,
      required: false,
    },
    permanence: {
      type: String,
      required: false,
    },
    companysize: {
      type: String,
      required: false,
    },
    headquarters: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
