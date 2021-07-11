import "./App.css";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App bg-white dark:bg-gray-900 text-blue-900 dark:text-blue-200">
      <div className="container mx-auto min-h-screen flex flex-col">
        <Routes />
      </div>
    </div>
  );
}

export default App;
