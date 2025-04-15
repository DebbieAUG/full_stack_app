// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import AdminDashboard from "./pages/AdminDashboard";
// import UsersPage from "./pages/UsersPage";
// import ProductsPage from "./pages/ProductsPage";
// import OrdersPage from "./pages/OrdersPage";

// const user = JSON.parse(localStorage.getItem("userInfo")); // Assume JWT is stored

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/admin" element={user?.isAdmin ? <AdminDashboard /> : <Navigate to="/" />} />
//         <Route path="/admin/users" element={user?.isAdmin ? <UsersPage /> : <Navigate to="/" />} />
//         <Route path="/admin/products" element={user?.isAdmin ? <ProductsPage /> : <Navigate to="/" />} />
//         <Route path="/admin/orders" element={user?.isAdmin ? <OrdersPage /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

const App = () => {
  return <h1>Hello from Admin Panel</h1>;
};

export default App;
