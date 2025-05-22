import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function InventoryForm({ items = [], onSave }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const editingItem = id ? items.find((i) => i.id === Number(id)) : null;

    const [formData, setFormData] = useState({
        sku: "",
        name: "",
        category: "",
        stock: "",
        threshold: "",
    });

    useEffect(() => {
        if (editingItem) {
            setFormData(editingItem);
        }
    }, [editingItem]);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...formData,
            stock: Number(formData.stock),
            threshold: Number(formData.threshold),
        });
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {editingItem ? "Edit " : "Add "} Inventory Item
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-xl shadow"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {["sku", "name", "category"].map((field) => (
                            <input
                                key={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="border rounded p-2"
                                placeholder={
                                    editingItem
                                        ? formData[field]
                                        : `Enter ${field}`
                                }
                            />
                        ))}
                        {["stock", "threshold"].map((field) => (
                            <input
                                key={field}
                                name={field}
                                type="number"
                                value={formData[field]}
                                onChange={handleChange}
                                className="border rounded p-2"
                                placeholder={
                                    editingItem
                                        ? formData[field]
                                        : `Enter ${field}`
                                }
                            />
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            {editingItem ? "Update" : "Submit"}
                        </button>

                        <Link to="/">
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
