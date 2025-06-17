import { RouterProvider } from "react-router-dom";
import route from "./router/route";
import HomePage from "./Pages/HomePage";
import React from 'react';

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />     
    </div>
  );
}

export default App;
