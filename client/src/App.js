import "./App.css";
import Home from "./pages/home/Home.jsx";
import SinglePost from "./pages/singlepost/SinglePost";
import Header from "./components/header/Header";
import CreatePost from "./pages/createPost/CreatePost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
