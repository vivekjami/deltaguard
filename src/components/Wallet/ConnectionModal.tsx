import React from 'react';
import { useWallet } from '../../hooks/useWallet';

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectionModal: React.FC<ConnectionModalProps> = ({ isOpen, onClose }) => {
  const { handleConnect, connectors } = useWallet();

  if (!isOpen) return null;

  const getWalletIcon = (id: string) => {
    switch (id) {
      case 'injected': return '🦊';
      case 'coinbaseWallet': return '🏦';
      case 'walletConnect': return '🔗';
      default: return '📱';
    }
  };

  const getWalletName = (id: string) => {
    switch (id) {
      case 'injected': return 'MetaMask';
      case 'coinbaseWallet': return 'Coinbase Wallet';
      case 'walletConnect': return 'WalletConnect';
      default: return id;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Connect Your Wallet</h2>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-2 gap-3">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                disabled={!connector.ready || Boolean(pending)}
                onClick={() => handleConnect(connector.id)}
                className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors disabled:opacity-50"
              >
                <span className="text-2xl mb-2">{getWalletIcon(connector.id)}</span>
                <span className="text-sm font-medium">{getWalletName(connector.id)}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-4 text-xs text-gray-400">
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionModal;