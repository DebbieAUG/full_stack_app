import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded hover:bg-gray-800 ${
      pathname === path ? "bg-gray-800 text-white" : "text-gray-300"
    }`;

  return (
    <div className="w-60 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/admin" className={linkClass("/admin")}>Dashboard</Link>
        <Link to="/admin/users" className={linkClass("/admin/users")}>Users</Link>
        <Link to="/admin/products" className={linkClass("/admin/products")}>Products</Link>
        <Link to="/admin/orders" className={linkClass("/admin/orders")}>Orders</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
