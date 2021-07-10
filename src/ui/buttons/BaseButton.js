export const BaseButton = ({ children, onClick }) => {
  return (
    <button
      className="w-auto px-4 py-2 m-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
