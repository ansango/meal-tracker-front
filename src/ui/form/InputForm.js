export const InputForm = ({
  type = "text",
  placeholder = "placeholder",
  value = "",
  onChange = null,
  onKeyPress = null,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="mx-2 block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-900"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
  />
);
