import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutInfo from "./components/AboutInfo";
import Contacts from "./components/Contacts";

function App() {
  return (
    <BrowserRouter>
      <div className="container ">
        <Header />
        <Routes>
          <Route
            path="*"
            element={<HomePage />}
          />
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/contacts"
            element={<Contacts />}
          />
          <Route
            path="/about"
            element={<AboutInfo />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
