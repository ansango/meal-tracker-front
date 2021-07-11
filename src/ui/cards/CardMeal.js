export const CardMeal = ({ children, data }) => {
  const { date, meal } = data;
  return (
    <div className="py-2">
      <div className="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900">
        <div className="p-6 py-2 rounded-lg flex justify-between items-center">
          <strong>{date}</strong>
          <p className="font-bold">{meal}</p>
          {children}
        </div>
      </div>
    </div>
  );
};
