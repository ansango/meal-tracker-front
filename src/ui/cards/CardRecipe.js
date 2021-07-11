export const CardRecipe = ({ onClick, name, missingIngredients }) => {
  const areMissingIng =
    missingIngredients.length !== 0 ? (
      <>{`Te faltan ${missingIngredients.length} ingredientes`}</>
    ) : (
      <>{"Todos los ingredientes están en tu lista"}</>
    );

  return (
    <div className="bg-white border rounded-lg shadow-md cursor-pointer hover:bg-blue-50 dark:bg-gray-800 dark:border-gray-900">
      <div className="p-6 py-2 rounded-lg">
        <strong onClick={onClick}>{name}</strong>
        <p className="">{areMissingIng}</p>
      </div>
    </div>
  );
};

