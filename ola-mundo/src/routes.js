import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio/inicio";
import Sobremim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/sobremim" element={<Sobremim />}></Route>
        <Route path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
