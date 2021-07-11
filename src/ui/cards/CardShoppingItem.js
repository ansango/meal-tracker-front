import { BookMarkIcon } from "../icons";

export const CardShoppingItem = ({ item }) => (
  <div
    className="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-900"
    key={item}
  >
    <div className="p-6 py-2 rounded-lg flex items-center justify-between">
      <p className="">{item}</p>
      <BookMarkIcon />
    </div>
  </div>
);
