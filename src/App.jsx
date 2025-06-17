import { RouterProvider } from "react-router-dom";
import route from "./router/route";
// import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />     
    </div>
  );
}

export default App;
