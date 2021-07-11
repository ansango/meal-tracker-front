export const LoaderCardBase = () => (
  <div className="py-2">
    <div className="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900">
      <div className="animate-pulse p-6 py-2 rounded-lg flex justify-between items-center">
        <div className="flex-1 space-y-4 py-1">
          <div className="space-y-2">
            <div className="h-4 bg-blue-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-blue-100 dark:bg-gray-600 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const LoaderCard = ({ amount = 1 }) => {
  const arr = [...Array(amount).fill(LoaderCardBase)];
  return (
    <>
      {arr.map((LoaderComponent, index) => (
        <LoaderComponent key={index} />
      ))}
    </>
  );
};
