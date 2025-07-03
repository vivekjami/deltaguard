import React from 'react';
import Header from './Header';
import ConnectionModal from '../Wallet/ConnectionModal';
import { useWallet } from '../../hooks/useWallet';
import { useWalletContext } from '../../contexts/WalletContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isModalOpen, closeConnectModal } = useWallet();
  const { walletState } = useWalletContext();
  
  const showNetworkWarning = walletState.isConnected && walletState.error;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Network warning banner */}
      {showNetworkWarning && (
        <div className="bg-red-900 border-b border-red-700 p-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-red-100">⚠️</span>
            <span className="text-red-100 text-sm">
              Please switch to a supported network (Ethereum Mainnet or Sepolia)
            </span>
          </div>
        </div>
      )}
      
      {/* Main content area */}
      <main className="container mx-auto py-6 px-4 max-w-7xl">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6 px-4 mt-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-xl">🛡️</span>
              <div>
                <div className="font-bold">DeltaGuard</div>
                <div className="text-xs text-gray-400">Built for EulerSwap Builder Competition</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 DeltaGuard. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      {/* Wallet connection modal */}
      <ConnectionModal isOpen={isModalOpen} onClose={closeConnectModal} />
    </div>
  );
};

export default DashboardLayout;