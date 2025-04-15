import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <div className="text-sm text-gray-500">Hello, Admin</div>
    </header>
  );
};

export default Header;
