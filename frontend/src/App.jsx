import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
// import Home from "./pages/Home";
// import Login from "./pages/Login";

const App = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={user && user.isAdmin ? <AdminDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
