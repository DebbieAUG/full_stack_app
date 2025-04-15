const Header = () => {
    return (
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    );
  };
  
  export default Header;
  