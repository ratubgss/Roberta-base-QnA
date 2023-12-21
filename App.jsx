import { Routes, Route } from "react-router-dom";

//components
import HeaderComponents from "./components/HeaderComponents";
//pages
import HomePage from "./pages/HomePage";
import TentangKami from "./pages/TentangKami";
import YourvoiceQna from "./pages/YourvoiceQna";
import YourvoiceUpdate from "./pages/YourvoiceUpdate";

function App() {
  return (
    <div>
      <HeaderComponents />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="TentangKami" Component={TentangKami} />
        <Route path="YourvoiceUpdate" Component={YourvoiceUpdate} />
        <Route path="YourvoiceQna" Component={YourvoiceQna} />
      </Routes>
    </div>
  );
}

export default App;
