import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import List from "./components/List/List.jsx";

function App() {
  return (
    <>
      <Navbar />
      <List />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
