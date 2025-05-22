import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InventoryTable({ items, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-lg font-semibold">Inventory List</h3>
        <button onClick={() => navigate('/add-inventory')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          <i className='fas fa-plus'></i> Add Inventory
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">SKU</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Reorder Level</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.sku}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className={
                  `p-3 font-semibold ${item.stock < item.threshold ? 'text-red-500' : ''}`
                }>
                  {item.stock}
                </td>
                <td className="p-3">{item.threshold}</td>
                <td className="p-3 space-x-2">
                  <button onClick={() => navigate(`/edit-inventory/${item.id}`)} className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button onClick={() => onDelete(item.id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}