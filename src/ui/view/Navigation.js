import { Link } from "react-router-dom";
import { ToggleTheme } from "../buttons";
import { ShoppingListButton } from "..";

export const Navigation = () => (
  <div className="flex justify-between items-center p-5">
    <span className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
      <div className="inline-flex items-center">
        <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
        <h2 className="block p-2 text-xl font-medium tracking-tighter lg:mr-8">
          <Link to={"/"}>meal tracker</Link>
        </h2>
      </div>
    </span>
    <div className="">
      <ShoppingListButton />
      <ToggleTheme />
    </div>
  </div>
);
