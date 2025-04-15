import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const dummyProducts = [
  { _id: 1, name: "Product A", price: 49.99, stock: 10 },
  { _id: 2, name: "Product B", price: 19.99, stock: 0 },
];

const ProductsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <button className="bg-green-600 text-white px-4 py-2 mb-4 rounded">Add Product</button>
          <table className="w-full table-auto border border-collapse bg-white shadow">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyProducts.map((product) => (
                <tr key={product._id}>
                  <td className="p-3 border">{product.name}</td>
                  <td className="p-3 border">${product.price}</td>
                  <td className="p-3 border">{product.stock}</td>
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

export default ProductsPage;
