import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Star from "../icons/star";
import CircleMinus from "../icons/circle-minus";

const TableBody = ({ recipe, handleFavs }): ReactElement => {
  return (
    <tr>
      <td className="max-w-1">
        <div
          className="flex-shrink-0 px-4"
          aria-hidden="true"
          onClick={() => handleFavs(recipe.id)}
        >
          {recipe.favorite ? (
            <Star size="w-5" fill="yellow" />
          ) : (
            <CircleMinus size="w-5" fill="red" />
          )}
        </div>
      </td>
      <td className="px-6 py-3 max-w-3 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div className="truncate hover:text-gray-600">
            <Link to={`/recipe/${recipe.id}`}>
              <span>{recipe.title}</span>
            </Link>
          </div>
        </div>
      </td>
      <td className="px-6 py-3 max-w-5 text-sm text-gray-500 font-medium whitespace-nowrap overflow-hidden">
        <div className="flex items-center space-x-2 max-w-0">
          <div className="flex flex-shrink-0 md:w-full -space-x-1">
            {recipe.cuisines.join(", ")}
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell max-w-5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
        {recipe.diets.join(", ")}
      </td>
    </tr>
  );
};

export default TableBody;
