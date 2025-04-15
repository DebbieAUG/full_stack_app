import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("authToken");
      const res = await fetch("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Admin</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.isAdmin ? "Yes" : "No"}</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-2 py-1 mr-2">Delete</button>
                <button className="bg-blue-500 text-white px-2 py-1">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
