import React from 'react';

const dummyOrders = [
  {
    id: 101,
    customer: 'John Doe',
    total: '$120.50',
    status: 'Pending',
  },
  {
    id: 102,
    customer: 'Jane Smith',
    total: '$230.99',
    status: 'Shipped',
  },
  {
    id: 103,
    customer: 'Mike Johnson',
    total: '$87.00',
    status: 'Delivered',
  },
];

const statusColor = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Shipped: 'bg-blue-100 text-blue-700',
  Delivered: 'bg-green-100 text-green-700',
};

const OrdersPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Orders</h2>
      <table className="min-w-full bg-white shadow rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-left text-sm uppercase text-gray-600">
            <th className="px-6 py-3">Order ID</th>
            <th className="px-6 py-3">Customer</th>
            <th className="px-6 py-3">Total</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map((order) => (
            <tr key={order.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.customer}</td>
              <td className="px-6 py-4">{order.total}</td>
              <td className="px-6 py-4">
                <span className={`text-sm px-2 py-1 rounded ${statusColor[order.status]}`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 space-x-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">View</button>
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
