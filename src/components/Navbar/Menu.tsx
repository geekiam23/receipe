import { Link } from "react-router-dom";

const Menu = ({ openMenu }) => {
  if (!openMenu) return null;

  return (
    <div>
      <div
        className="origin-top-right absolute right-5 top-10 mt-2 w-48 z-10 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <Link
          to="/"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Recipes
        </Link>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default Menu;
