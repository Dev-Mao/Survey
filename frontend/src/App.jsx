import Wall from "./pages/Wall";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/wall");
    } else if (currentPath === "/" || currentPath === "/signup") {
      navigate(currentPath);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wall" element={<Wall />} />
      </Routes>
    </>
  );
}

export default App;
