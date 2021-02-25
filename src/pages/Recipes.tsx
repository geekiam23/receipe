import { ReactElement, useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import ButtonGroup from "../components/ButtonGroup";
import firebase from "../config/firebase";
import Table from "../components/Table";
import recipes from "../recipes.json";

const db = firebase.database();

const Recipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [favs, setFavs] = useState([]);
  const [favsData, setFavsData] = useState([]);

  useEffect(() => {
    const userId = 1;
    const ref = db.ref(`users/${userId}`);

    ref.on("value", (snapshot) => {
      setFavs(snapshot.val().favorites || []);
      const recipesIds = snapshot.val().favorites.toString();

      if (!recipesIds) return;
      fetch(
        `https://api.spoonacular.com/recipes/informationBulk?ids=${recipesIds}&includeNutrition=true&apiKey=${process.env.REACT_APP_SPOONTACULAR_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFavsData(data);
        });
    });

    return () => ref.off();
  }, []);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?limitLicense=false&number=20&apiKey=${process.env.REACT_APP_SPOONTACULAR_API_KEY_2}`
    )
      .then((res) => res.json())
      .then((data) => {
        const newRecipes = recipes.recipes.map((recipe) => {
          return { ...recipe, favorite: favs.includes(recipe.id) };
        });
        setData(newRecipes);
      });
  }, [data]);

  const handleFavorites = (id) => {
    if (favs.includes(id)) return;

    favs.push(id);

    db.ref("users/" + 1).update({
      favorites: favs,
    });
  };

  const handleShowTable = () => setShowTable(!showTable);

  if (!data) return null;

  return (
    <>
      <div className="flex flex-col flex-1 overflow-hidden max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white">
        <ButtonGroup showTable={showTable} handleShowTable={handleShowTable} />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {favsData.length > 0 && (
            <Table recipes={favsData} handleFavorites={handleFavorites} />
          )}

          {showTable && (
            <RecipeCard recipes={data} handleFavs={handleFavorites} />
          )}

          {!showTable && (
            <Table recipes={data} handleFavorites={handleFavorites} />
          )}
        </main>
      </div>
    </>
  );
};

export default Recipes;
