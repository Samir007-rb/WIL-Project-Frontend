import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiOutlineHome, HiCube } from 'react-icons/hi';

export default function SidebarLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: HiOutlineHome },
    { name: 'Inventories', path: '/inventories', icon: HiCube }
  ];

  const user = { name: 'Admin', avatar: 'https://i.pravatar.cc/40' };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`${collapsed ? 'w-16' : 'w-64'} bg-white border-r transition-width duration-200`}>  
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && <h2 className="text-xl font-bold">Logo</h2>}
          <button onClick={() => setCollapsed(!collapsed)}>
            <HiMenu size={24} />
          </button>
        </div>
        <nav className="mt-4">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-4 hover:bg-gray-100 ${location.pathname === item.path ? 'bg-gray-200' : ''}`}
            >
              <item.icon size={20} />
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto">  
        {/* Top Navigation */}
        <header className="bg-white border-b p-4 flex justify-end items-center relative">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none">
              <img
                src={user.avatar}
                alt="User avatar"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-gray-700">{user.name}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Profile
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
        {/* Content */}
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          {children}
        </main>
        {/* Footer */}
        <footer className="bg-white border-t p-4 text-center text-sm">
          &copy; 2025 popmerch.com • All rights reserved
        </footer>
      </div>
    </div>
  );
}