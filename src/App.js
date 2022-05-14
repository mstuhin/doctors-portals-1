
import './App.css';
import Navbar from './assets/Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './assets/Pages/Home/Home';
import About from './assets/Pages/About/About';
import Login from './assets/Pages/Login/Login';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
