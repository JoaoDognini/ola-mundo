import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Sobremim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu></Menu>

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />}></Route>
          <Route path="sobremim" element={<Sobremim />}></Route>
        </Route>



        <Route path="*"></Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
