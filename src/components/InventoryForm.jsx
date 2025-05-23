import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function InventoryForm({ items = [], onSave }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const editingItem = id ? items.find(i => i.id === Number(id)) : null;

  const [formData, setFormData] = useState({ sku: '', name: '', category: '', stock: '', threshold: '' });

  useEffect(() => { if (editingItem) setFormData(editingItem); }, [editingItem]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    onSave({ ...formData, stock: Number(formData.stock), threshold: Number(formData.threshold) });
    navigate('/');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">{editingItem ? 'Edit Item' : 'Add Inventory Item'}</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['sku','name','category'].map(field => (
          <div key={field} className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 capitalize">{field}</label>
            <input
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
        {['stock','threshold'].map(field => (
          <div key={field} className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 capitalize">{field}</label>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
        <div className="col-span-full flex justify-end space-x-2 mt-4">
          <button type="button" onClick={() => navigate('/inventories')} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {editingItem ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}