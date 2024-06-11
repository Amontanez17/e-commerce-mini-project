import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Manage from "./components/Pages/Manage.jsx";
import DashboardPage from "./components/Pages/DashboardPage.jsx";
import ItemDetailsPage from "./components/Pages/ItemDetailsPage.jsx";
import AboutPage from "./components/Pages/AboutPage.jsx";
import { Routes, Route } from "react-router-dom";
import data from "./assets/products.json";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailsPage products={products} />}
        />
        <Route path="/manage" element={<Manage setProducts={setProducts} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* <Sidebar /> */}
      <Footer />
    </>
  );
}

export default App;
