import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navClass =
    'block py-2 px-4 rounded hover:bg-gray-700 transition-colors';

  return (
    <aside className="w-64 bg-gray-800 text-white p-6 space-y-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>
      <nav className="space-y-2">
        {/* <NavLink to="/" className={navClass}>Dashboard</NavLink> */}
        <NavLink to="/users" className={navClass}>Users</NavLink>
        <NavLink to="/products" className={navClass}>Products</NavLink>
        <NavLink to="/orders" className={navClass}>Orders</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
