const Tags = ({ recipe }) => {
  return (
    <div className="z-10 relative flex justify-around py-10 px-20 lg:py-3 lg:px-4">
      {recipe.dairyFree && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-gray-800">
          Diary Free
        </span>
      )}
      {recipe.cheap && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
          Cheap
        </span>
      )}
      {recipe.vegan && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
          Vegan
        </span>
      )}
      {recipe.veryPopular && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
          Popular
        </span>
      )}
      {recipe.veryHealthy && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          Healthy
        </span>
      )}
      {recipe.sustainable && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
          Badge
        </span>
      )}
      {recipe.glutenFree && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-indigo-800">
          Gluten Free
        </span>
      )}
    </div>
  );
};

export default Tags;
