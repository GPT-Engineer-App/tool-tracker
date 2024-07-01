import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ToolsOnTrucks from "./pages/ToolsOnTrucks.jsx";
import ShopInventory from "./pages/ShopInventory.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/tools-on-trucks" element={<ToolsOnTrucks />} />
        <Route exact path="/shop-inventory" element={<ShopInventory />} />
      </Routes>
    </Router>
  );
}

export default App;