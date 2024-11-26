import { Routes } from "./src/routes/index.jsx";

import AuthRoutes from "./src/routes/RoutesAuth/index.jsx";

import Buscar from "./src/screens/Busca";

export default function App() {
  const userAuth = false;

  return <>{userAuth ? <AuthRoutes /> : <Routes />}</>;
}
