import "./index.css";
import Employees from "./pages/Employees";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Dictionary" element={<Dictionary />} />
          <Route path="/definition" element={<Definition />} />
          <Route path="/definition/:search" element={<Definition />} />
          <Route path="/Customer" element={<Customer />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
