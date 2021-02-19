/* eslint react/prop-types: 0 */

import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }): ReactElement => {
  return (
    <li>
      <div className="space-y-4">
        <Link to={`/recipe/${recipe.id}`}>
          <div className="aspect-w-3 aspect-h-2">
            <img
              className="object-cover shadow-lg rounded-lg"
              src={recipe.image}
              alt=""
            />
          </div>

          <div className="space-y-2">
            <div className="text-lg leading-6 font-medium space-y-1">
              <h3>{recipe.title}</h3>
              <p className="">Likes: {recipe.aggregateLikes}</p>
            </div>
            <ul className="flex space-x-5">
              <li></li>
            </ul>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default RecipeCard;
