import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/Home" element={<Home />} />


        </Routes>
      </Router>


    </>
  );
}

export default App;
