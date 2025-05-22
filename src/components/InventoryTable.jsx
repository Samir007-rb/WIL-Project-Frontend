import { Link } from "react-router-dom";

export default function InventoryTable({ items, onDelete }) {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Inventory Management Tool
                    </h1>
                    <div className="flex justify-end mb-4">
                        <Link to="/add-inventory">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                <i
                                    className="fa fa-plus mr-1"
                                    aria-hidden="true"
                                ></i>
                                Add Inventory
                            </button>
                        </Link>
                    </div>
                    <div className="overflow-x-auto shadow bg-white rounded-xl">
                        <table className="min-w-full table-auto text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-2">SKU</th>
                                    <th className="p-2">Product Name</th>
                                    <th className="p-2">Category</th>
                                    <th className="p-2">Stock</th>
                                    <th className="p-2">Reorder Level</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => {
                                    const confirmDelete = () => {
                                        if (
                                            window.confirm(
                                                "Do you want to delete this product?"
                                            )
                                        ) {
                                            onDelete(item.id);
                                        }
                                    };

                                    return (
                                        <tr key={item.id} className="border-b">
                                            <td className="p-2">{item.sku}</td>
                                            <td className="p-2">{item.name}</td>
                                            <td className="p-2">
                                                {item.category}
                                            </td>
                                            <td className="p-2">
                                                <span
                                                    className={`font-semibold ${
                                                        item.stock <
                                                        item.threshold
                                                            ? "text-red-500"
                                                            : ""
                                                    }`}
                                                >
                                                    {item.stock}
                                                </span>
                                            </td>
                                            <td className="p-2">
                                                {item.threshold}
                                            </td>
                                            <td className="p-2">
                                                <Link
                                                    to={`/edit-inventory/${item.id}`}
                                                >
                                                    <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                                        Edit
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={confirmDelete}
                                                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
