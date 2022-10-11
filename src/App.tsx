import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.scss";
import routeConfig from "./routes";

const App: React.FC = () => {
  const routes = useRoutes(routeConfig);
  return <div className="App">{routes}</div>;
};

export default App;
