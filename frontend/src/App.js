import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReferralModal from './components/ReferralModal';
import Footer from './components/Footer';

const App = () => {
  
  //to control the visibility of the form
  const [showModal, setShowModal] = useState(false);

  const handleReferClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero onReferClick={handleReferClick} />
        <ReferralModal show={showModal} onClose={handleCloseModal} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
