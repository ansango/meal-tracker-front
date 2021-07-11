export const CardIngredient = ({ children, data }) => {
  const { name, amount, units } = data;
  return (
    <div className="py-2">
      <div className="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900">
        <div className="p-6 py-2 rounded-lg flex justify-between items-center">
          <strong>{name}</strong>
          <p className="font-bold">
            {amount} {units}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};
