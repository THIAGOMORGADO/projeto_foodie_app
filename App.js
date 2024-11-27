import { Routes } from "./src/routes/index.jsx";

import AuthRoutes from "./src/routes/RoutesAuth/index.jsx";

export default function App() {
  const userAuth = true;

  return <>{userAuth ? <AuthRoutes /> : <Routes />}</>;
}
