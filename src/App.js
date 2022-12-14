import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './components/main/HomePage';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import AboutInfo from './components/AboutInfo';
import Contacts from './components/Contacts';
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<AboutInfo />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
