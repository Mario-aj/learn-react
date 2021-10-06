const Header = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-between pl-4 h-11 border border-gray-700">
      <span className="mr-2 text-purple-600 text-xs">GET</span>
      <input
        type="text"
        placeholder="https://api.myproduct.com/v1/users"
        className="flex-1 bg-gray-900 h-full focus:outline-none"
      />
      <button className="h-full bg-purple-500 hover:bg-purple-700 transition-all duration-300 px-4">
        Send
      </button>
    </div>
  );
};

export default Header;
