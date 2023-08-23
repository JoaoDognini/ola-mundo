import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio/inicio";
import Sobremim from "./paginas/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/sobremim" element={<Sobremim />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
