/* eslint react/prop-types: 0 */

import { ReactElement } from "react";
import { Link } from "react-router-dom";

const TableBody = ({ recipe }): ReactElement => {
  return (
    <tr>
      <td className="px-6 py-3 max-w-0 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div
            className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600"
            aria-hidden="true"
          ></div>
          <div className="truncate hover:text-gray-600">
            <Link to={`/recipe/${recipe.id}`}>
              <span>{recipe.title}</span>
            </Link>
          </div>
        </div>
      </td>
      <td className="px-6 py-3 max-w-0 text-sm text-gray-500 font-medium whitespace-nowrap overflow-hidden">
        <div className="flex items-center space-x-2 max-w-0">
          <div className="flex flex-shrink-0 md:w-full -space-x-1">
            {recipe.cuisines.join(", ")}
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
        {recipe.diets.join(", ")}
      </td>
    </tr>
  );
};

export default TableBody;
