import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactForm from './components/contact/ContactPage';
// import ServicesPage from './components/practiceArea/ServicesPage';
import CaliforniaPage from './components/practiceArea/CaliforniaPage';
import AccidentPage from './components/practiceArea/AccidentPage';
import ReportingPage from './components/practiceArea/ReportingPage';
import RentalPage from './components/practiceArea/RentalPage';
import PedestrianPage from './components/practiceArea/PedestrianPage';
import AirbnbPage from './components/practiceArea/AirbnbPage';
import UberPage from './components/practiceArea/UberPage';
import WrongfulPage from './components/practiceArea/WrongfulPage';
import ElectricalPage from './components/practiceArea/ElectricalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route
          path='/california-at-fault-accidents'
          element={<CaliforniaPage />}
        />
        <Route path='/car-accidents' element={<ReportingPage />} />
        <Route path='/accident-lawyer' element={<AccidentPage />} />
        <Route path='/rental-car-accident' element={<RentalPage />} />
        <Route path='/pedestrial-accident' element={<PedestrianPage />} />
        <Route path='/airbnb-attorney' element={<AirbnbPage />} />
        <Route path='/uber-accident-lawyers' element={<UberPage />} />
        <Route path='/wrongful-death-attorney' element={<WrongfulPage />} />
        <Route path='/electric-scooter-accident' element={<ElectricalPage />} />
      </Routes>
    </Router>
  );
}
export default App;
