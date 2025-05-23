import { Link } from "react-router-dom";
import { HiCube } from "react-icons/hi";

export default function Dashboard({ items = [] }) {
  return (
    <div className="flex flex-col h-full">
      <header>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>
      <main className="p-6 bg-gray-100 flex-1 overflow-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative bg-blue-500 text-white rounded-lg p-10 shadow hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
            <HiCube className="absolute right-4 top-4 text-white opacity-20 text-6xl pointer-events-none" />
            <p className="text-sm uppercase">Total Items</p>
            <p className="text-3xl font-bold mt-2">{items.length}</p>
            <hr className="mt-5 border-blue-300" />
            <Link to="/inventories">
              <p className="text-sm mt-2 text-center hover:blue-500 cursor-pointer">
                View details
              </p>
            </Link>
          </div>

          <div className="relative bg-green-500 text-white rounded-lg p-10 shadow hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
            <HiCube className="absolute right-4 top-4 text-white opacity-20 text-6xl pointer-events-none" />
            <p className="text-sm uppercase">Low Stock Items</p>
            <p className="text-3xl font-bold mt-2">2</p>
            <hr className="mt-5 border-blue-300" />
            <Link to="/inventories">
              <p className="text-sm mt-2 text-center hover:blue-500 cursor-pointer">
                View details
              </p>
            </Link>
          </div>

          <div className="relative bg-red-500 text-white rounded-lg p-10 shadow hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
            <HiCube className="absolute right-4 top-4 text-white opacity-20 text-6xl pointer-events-none" />
            <p className="text-sm uppercase">Out of stock Items</p>
            <p className="text-3xl font-bold mt-2">0</p>
            <hr className="mt-5 border-blue-300" />
            <Link to="/inventories">
              <p className="text-sm mt-2 text-center hover:blue-500 cursor-pointer">
                View details
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
