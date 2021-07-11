export const BaseButton = ({
  children,
  onClick,

  text = "blue-800",
  darkText = "blue-300",
  color = "blue-200",
  darkColor = "blue-900",
}) => {
  return (
    <button
      className={`w-auto px-3 py-2 m-2 text-base font-medium text-${text} dark:text-${darkText} transition duration-500 ease-in-out transform bg-${color} border-${color} rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-${color} dark:bg-${darkColor} dark:border-${darkColor} dark:hover:bg-${darkColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
