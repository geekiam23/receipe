import { ReactElement, useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import ButtonGroup from "../components/ButtonGroup";
import { database } from "../config/firebase";
import Table from "../components/Table";
// import recipes from "../recipes.json";

const Recipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [favs, setFavs] = useState([]);
  const [favsData, setFavsData] = useState([]);

  const addFavToRecipeData = (data) => {
    if (data.length === 0) return [];

    return data.map((recipe) => {
      return { ...recipe, favorite: favs?.includes(recipe.id) };
    });
  };

  useEffect(() => {
    const userId = 1;
    const ref = database.ref(`users/${userId}`);

    ref.on("value", (snapshot) => {
      setFavs(snapshot.val().favorites || []);
      const recipesIds = snapshot.val().favorites.toString();

      if (!recipesIds) return;
      fetch(
        `https://api.spoonacular.com/recipes/informationBulk?ids=${recipesIds}&includeNutrition=true&apiKey=${process.env.REACT_APP_SPOONTACULAR_API_KEY_2}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "failure") return;

          const newFavsRecipes = addFavToRecipeData(data);
          setFavsData(newFavsRecipes);
        });
    });

    return () => ref.off();
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

  if (!favsData) return null;

  return (
    <>
      <div className="flex flex-col flex-1 overflow-hidden max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Favorite Recipes
          </h3>
        </div>
        <ButtonGroup showTable={showTable} handleShowTable={handleShowTable} />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {favsData.length > 0 && showTable && (
            <Table recipes={favsData} handleFavorites={handleFavorites} />
          )}

          {favsData.length > 0 && !showTable && (
            <RecipeCard recipes={favsData} handleFavs={handleFavorites} />
          )}
        </main>
      </div>
    </>
  );
};

export default Recipes;
