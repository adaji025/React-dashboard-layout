import React from "react";
import "./App.css";
import Sidebar from "./componenents/Sidebar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <h1>Main App</h1>
      {/* Sidebar */}

      {/* Main */}
      <MainRoutes />
    </div>
  );
}

export default App;
