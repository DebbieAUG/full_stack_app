import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../api'; // Import API functions

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  // Fetch products on page load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Add new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const addedProduct = await addProduct(newProduct);
      setProducts([...products, addedProduct]);
      setNewProduct({ name: '', price: '', stock: '' }); // Clear form
    } catch (error) {
      setError('Error adding product');
    }
  };

  // Edit existing product
  const handleUpdateProduct = async (id) => {
    const updatedProduct = { ...newProduct };
    try {
      const updated = await updateProduct(id, updatedProduct);
      setProducts(products.map((product) => (product._id === id ? updated : product)));
      setNewProduct({ name: '', price: '', stock: '' });
    } catch (error) {
      setError('Error updating product');
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      setError('Error deleting product');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      {/* Add Product Form */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Add New Product</h3>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="input"
          />
          <input
            type="text"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="input"
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            className="input"
          />
          <button type="submit" className="btn btn-blue">Add Product</button>
        </form>
      </div>

      {/* Product Table */}
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
          {products.map((product) => (
            <tr key={product._id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4">{product._id}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.stock}</td>
              <td className="px-6 py-4 space-x-2">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  onClick={() => handleUpdateProduct(product._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
