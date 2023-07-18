import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-400 text-white">
      <span className="font-bold uppercase">Products List</span>

      <span>
        <Link to="/" className="mr-2">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
};
