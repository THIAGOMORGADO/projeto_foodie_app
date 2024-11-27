import { Routes } from "./src/routes/index.jsx";

import AuthRoutes from "./src/routes/RoutesAuth/index.jsx";

import Buscar from "./src/screens/Busca";
import Cardapio from "./src/screens/Cardapio/index.jsx";

export default function App() {
  const userAuth = false;

  // return <>{userAuth ? <AuthRoutes /> : <Routes />}</>;

  return <Cardapio />;
}
