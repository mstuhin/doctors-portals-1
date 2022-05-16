
import './App.css';
import Navbar from './assets/Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './assets/Pages/Home/Home';
import About from './assets/Pages/About/About';
import Login from './assets/Pages/Login/Login';
import Appointment from './assets/Pages/Appointment/Appointment';
import Signup from './assets/Pages/Login/Signup';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
