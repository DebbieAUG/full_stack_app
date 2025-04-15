import React from 'react';

const dummyProducts = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    price: '$2,499',
    stock: 12,
  },
  {
    id: 2,
    name: 'iPhone 14 Pro',
    price: '$1,099',
    stock: 45,
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    price: '$399',
    stock: 20,
  },
];

const ProductsPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <table className="min-w-full bg-white shadow rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-left text-sm uppercase text-gray-600">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Stock</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((product) => (
            <tr key={product.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4">{product.id}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.stock}</td>
              <td className="px-6 py-4 space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">Edit</button>
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
