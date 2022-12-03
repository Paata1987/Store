import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './components/main/HomePage';

import AboutInfo from './components/AboutInfo';
import Contacts from './components/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="container ">
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<AboutInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
