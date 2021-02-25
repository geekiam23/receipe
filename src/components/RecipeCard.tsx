import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Star from "./icons/star";
import CircleMinus from "./icons/circle-minus";

const RecipeCard = ({ recipes, handleFavs }): ReactElement => {
  return (
    <div className="">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-12">
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {recipes?.map((recipe: any) => (
              <li key={recipe.id}>
                <div className="space-y-4 border rounded-lg">
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
                  <div className="" onClick={() => handleFavs(recipe.id)}>
                    {recipe.favorite ? (
                      <Star size="w-5" fill="yellow" />
                    ) : (
                      <CircleMinus size="w-5" fill="red" />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
