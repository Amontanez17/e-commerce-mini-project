import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import List from "./components/List/List.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Form />
      <List />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
