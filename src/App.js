import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register"
function App() {
  return (
    <Router>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
