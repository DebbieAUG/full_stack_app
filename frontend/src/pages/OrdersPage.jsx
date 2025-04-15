import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const dummyOrders = [
  { _id: 1, user: "Alice", total: 99.99, status: "Delivered" },
  { _id: 2, user: "Bob", total: 59.99, status: "Pending" },
];

const OrdersPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Orders</h2>
          <table className="w-full table-auto border border-collapse bg-white shadow">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">User</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyOrders.map((order) => (
                <tr key={order._id}>
                  <td className="p-3 border">{order.user}</td>
                  <td className="p-3 border">${order.total}</td>
                  <td className="p-3 border">{order.status}</td>
                  <td className="p-3 border">
                    <button className="bg-green-500 text-white px-2 py-1 mr-2 rounded">View</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
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

export default OrdersPage;
