import { ToggleTheme } from "./ToggleTheme";

export const Navigation = () => (
  <div className="text-blueGray-700 rounded-lg">
    <div className="flex justify-between p-5">
      <span className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <div className="inline-flex items-center">
          <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
          <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
            meal tracker
          </h2>
        </div>
      </span>
      <ToggleTheme />
    </div>
  </div>
);
