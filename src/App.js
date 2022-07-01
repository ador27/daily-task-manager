import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Completed from './Components/Completed';
import ToDo from './Components/ToDo';
import Calender from './Components/Calender';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import EditTask from './Components/EditTask';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/to-do-list" element={<ToDo />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
