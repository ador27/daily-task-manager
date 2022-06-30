import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Completed from './Components/Completed';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completed" element={<Completed />} />
      </Routes>

    </div>
  );
}

export default App;
