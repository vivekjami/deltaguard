import LandingPage from './pages/LandingPage';
import React from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './config/wagmi';
import { WalletProvider } from './contexts/WalletContext';
import Dashboard from './pages/Dashboard';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
          <div className="App">
            <LandingPage />;
            <Dashboard />
          </div>
        </WalletProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;