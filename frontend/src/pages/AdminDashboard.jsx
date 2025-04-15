import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome, Admin 👋</h2>
          <p className="text-gray-700">Use the sidebar to manage users, products, and orders.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
