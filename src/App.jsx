import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactForm from './components/contact/ContactPage';
import ServicesPage from './components/practiceArea/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route
          path='/california-at-fault-accidents'
          element={<ServicesPage />}
        />
      </Routes>
    </Router>
  );
}
export default App;
