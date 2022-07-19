import { Routes, Route } from "react-router-dom";

import './App.css';
import Blogs from './components/Blogs';
import Home from "./components/Home";
import Header from './components/Header';
import BlogForm from './components/BlogForm';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogDetails />} />
        <Route path="/blogs/new" element={<BlogForm />} />
      </Routes>
    </div>
  );
}

export default App;
