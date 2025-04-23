import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Incubation from './pages/Incubation';
import Impact from './pages/Impact';
import Teams from './pages/Teams';
import Contact from './pages/Contact';
import PartnerPortal from './pages/PartnerPortal';
import AcademicPortal from './pages/AcademicPortal';
import PaymentGateway from './pages/PaymentGateway';
import InvestorPortal from './pages/InvestorPortal';
import CollaborationHub from './pages/CollaborationHub';
import IncubationApplication from './pages/IncubationApplication';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/incubation" element={<Incubation />} />
            <Route path="/incubation/apply" element={<IncubationApplication />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner-portal" element={<PartnerPortal />} />
            <Route path="/academic-portal" element={<AcademicPortal />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/investor-portal" element={<InvestorPortal />} />
            <Route path="/collaboration-hub" element={<CollaborationHub />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;