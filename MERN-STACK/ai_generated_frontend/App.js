import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:4000/products';

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', image: '' });

  const fetchProducts = async () => {
    const res = await axios.get(API_URL);
    setProducts(res.data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, form);
    setForm({ name: '', price: '', image: '' });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(\`\${API_URL}/\${id}\`);
    fetchProducts();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Manager</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>

      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} - ${p.price}
            <button onClick={() => handleDelete(p._id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;