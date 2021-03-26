import { ReactElement, useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import ButtonGroup from "../components/ButtonGroup";
import { database } from "../config/firebase";
import Table from "../components/Table";
// import recipes from "../recipes.json";

const Recipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [recipesData, setRecipesData] = useState([]);
  const [favs, setFavs] = useState([]);

  const addFavToRecipeData = (data) => {
    if (data.length === 0) return [];

    return data.map((recipe) => {
      return { ...recipe, favorite: favs?.includes(recipe.id) };
    });
  };

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?limitLicense=false&number=2&apiKey=${process.env.REACT_APP_SPOONTACULAR_API_KEY_2}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "failure") return;

        const newRecipes = addFavToRecipeData(data.recipes);
        setRecipesData(newRecipes);
      });
  }, []);

  const handleFavorites = (id) => {
    if (favs.includes(id)) return;

    favs.push(id);
    setFavs(favs);

    database.ref("users/" + 1).update({
      favorites: favs,
    });
  };

  const handleShowTable = () => setShowTable(!showTable);

  if (!recipesData) return null;

  return (
    <>
      <div className="recipe-container">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Random Recipes
          </h3>
        </div>
        <ButtonGroup showTable={showTable} handleShowTable={handleShowTable} />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <span className="flex divide-y-4 divide-black divide-opacity-25" />
          {!showTable && (
            <RecipeCard recipes={recipesData} handleFavs={handleFavorites} />
          )}

          {showTable && (
            <Table recipes={recipesData} handleFavorites={handleFavorites} />
          )}
        </main>
      </div>
    </>
  );
};

export default Recipes;
