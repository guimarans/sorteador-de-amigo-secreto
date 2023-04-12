import Configuracao from "pages/Configuracao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}