import React, { ReactElement, useEffect, useState } from "react";
import TableBody from "../components/Table/TableBody";
import TableHeader from "../components/Table/TableHeader";
import RecipeCard from "../components/RecipeCard";
// import recipes from "../recipes.json";
import ButtonGroup from "../components/ButtonGroup";

const Recipes = (): ReactElement => {
  const [showTable, setShowTable] = useState<boolean>(false);

  // const [data, setData] = useState(recipes);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?limitLicense=false&number=20&apiKey=${process.env.REACT_APP_SPOONTACULAR_API_KEY_2}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleShowTable = () => setShowTable(!showTable);

  if (!data) return null;

  return (
    <>
      <div className="flex flex-col flex-1 overflow-hidden max-w-7xl mx-auto sm:px-6 lg:px-8">
        <ButtonGroup showTable={showTable} handleShowTable={handleShowTable} />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {showTable && (
            <div className="bg-white" onClick={handleShowTable}>
              <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
                <div className="space-y-12">
                  <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                    {data.recipes?.map((recipe: any) => (
                      <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {!showTable && (
            <div className="mt-8 sm:block">
              <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <table className="min-w-full">
                  <TableHeader />
                  <tbody className="bg-white divide-y divide-gray-100">
                    {data.recipes?.map((recipe: any) => (
                      <TableBody key={recipe.id} recipe={recipe} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Recipes;
