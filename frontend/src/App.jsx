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

import React from 'react';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">
        🚀 Admin Panel is Running!
      </h1>
    </div>
  );
};

export default App;
