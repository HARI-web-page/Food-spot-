import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import Menu from "./components/Menu";
import KitchenDisplay from "./components/KitchenDisplay";
import FoodDetail from "./pages/FoodDetail";
import Bill from "./pages/Bill";
import ThankYoupage from "./pages/ThankYou";
import TablePage from "./pages/TablePage"; // ✅ Add new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/food/:id" element={<FoodDetail />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/kitchendisplay" element={<KitchenDisplay />} />
        <Route path="/thankyou" element={<ThankYoupage />} />
        <Route path="/table/:tableId" element={<TablePage />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;
