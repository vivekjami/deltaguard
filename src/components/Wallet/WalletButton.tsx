import React from 'react';
import { useWallet } from '../../hooks/useWallet';
import { getChainName } from '../../config/wagmi';

const WalletButton: React.FC = () => {
  const { 
    walletState, 
    openConnectModal, 
    handleDisconnect,
    formatAddress,
    isNetworkSupported
  } = useWallet();

  const { isConnected, address, chainId, balance } = walletState;

  if (!isConnected) {
    return (
      <button 
        onClick={openConnectModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* Network indicator */}
      <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
        isNetworkSupported() ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'
      }`}>
        {getChainName(chainId)}
      </div>
      
      {/* Wallet dropdown */}
      <div className="relative group">
        <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 px-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>{formatAddress(address)}</span>
          <span className="text-green-400">{balance.eth.toFixed(4)} ETH</span>
        </button>
        
        {/* Dropdown menu */}
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-2 invisible group-hover:visible z-10">
          <button 
            onClick={handleDisconnect}
            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 rounded"
          >
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletButton;