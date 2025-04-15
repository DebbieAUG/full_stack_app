import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const dummyUsers = [
  { _id: 1, name: "Alice", email: "alice@example.com", isAdmin: true },
  { _id: 2, name: "Bob", email: "bob@example.com", isAdmin: false },
];

const UsersPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <table className="w-full table-auto border border-collapse bg-white shadow">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Admin</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyUsers.map((user) => (
                <tr key={user._id}>
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.isAdmin ? "Yes" : "No"}</td>
                  <td className="p-3 border">
                    <button className="bg-blue-500 text-white px-2 py-1 mr-2 rounded">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
