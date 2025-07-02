import React, { useState } from 'react';
import LandingPage from './components/Landing/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard'>('landing');
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleEnterApp = () => {
    setCurrentPage('dashboard');
  };

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    setCurrentPage('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setIsWalletConnected(false);
  };

  if (currentPage === 'landing') {
    return (
      <LandingPage 
        onEnterApp={handleEnterApp}
        onConnectWallet={handleConnectWallet}
      />
    );
  }

  return (
    <Dashboard 
      isWalletConnected={isWalletConnected}
      onBackToLanding={handleBackToLanding}
    />
  );
}

export default App;