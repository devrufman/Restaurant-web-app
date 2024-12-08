
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold text-gray-900">The Rufai`s Family Local Restaurant</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline text-2xl text-gray-900">Home</Link>
        <Link to="/about" className="hover:underline text-2xl text-gray-900">About Us</Link>
        <Link to="/menu" className="hover:underline text-2xl text-gray-900">Menu</Link>
      </div>
    </nav>
  );
};

export default Navbar;