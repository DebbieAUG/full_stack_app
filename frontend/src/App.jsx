import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import AdminDashboard from './pages/AdminDashboard';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex">
        <Sidebar />

        <div className="flex-1 bg-gray-100">
          <Header />
          <main className="p-6">
            <Routes>
              {/* <Route path="/" element={<AdminDashboard />} /> */}
              <Route path="/users" element={<UsersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
