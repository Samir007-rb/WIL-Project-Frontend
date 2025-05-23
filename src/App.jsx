import SidebarLayout from "./components/layout/SidebarLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import InventoryTable from "./components/InventoryTable";
import InventoryForm from "./components/InventoryForm";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

const inventoryItems = [
  {
    id: 1,
    sku: "P001",
    name: "Batman Car",
    stock: 3,
    threshold: 5,
    category: "Toys",
  },
  {
    id: 2,
    sku: "P002",
    name: "T-Shirt - Star Wars",
    stock: 10,
    threshold: 5,
    category: "Apparel",
  },
  {
    id: 3,
    sku: "P003",
    name: "Mug - Marvel",
    stock: 2,
    threshold: 4,
    category: "Home & Kitchen",
  },
];

export default function App() {
  const [items, setItems] = useState(inventoryItems);

  const handleSave = (data) => {
    if (data.id) {
      setItems(items.map((item) => (item.id === data.id ? data : item)));
    } else {
      setItems([...items, { ...data, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard items={items} />} />
          <Route path="/inventories" element={<InventoryTable items={items} onDelete={handleDelete} />} />
          <Route path="/add-inventory" element={<InventoryForm onSave={handleSave} />} />
          <Route path="/edit-inventory/:id" element={<InventoryForm items={items} onSave={handleSave} />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </>
  );
}
