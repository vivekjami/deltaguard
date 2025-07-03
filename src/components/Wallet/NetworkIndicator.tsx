import React from 'react';
import { useWallet } from '../../hooks/useWallet';
import { getChainName } from '../../config/wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

const NetworkIndicator: React.FC = () => {
  const { walletState, isNetworkSupported } = useWallet();
  const { chainId, isConnected } = walletState;

  if (!isConnected) return null;

  return (
    <div className="relative group">
      <div 
        className={`px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer ${
          isNetworkSupported() 
            ? 'bg-green-800 text-green-100' 
            : 'bg-red-800 text-red-100'
        }`}
      >
        <div className={`w-2 h-2 rounded-full ${isNetworkSupported() ? 'bg-green-400' : 'bg-red-400'}`}></div>
        <span className="text-sm font-medium">{getChainName(chainId)}</span>
      </div>

      {/* Network switching dropdown */}
      {!isNetworkSupported() && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-2 invisible group-hover:visible z-10">
          <div className="text-xs text-red-400 mb-2 px-3">Wrong network detected</div>
          <div className="text-xs text-gray-400 mb-2 px-3">Please switch networks manually</div>
        </div>
      )}
    </div>
  );
};

export default NetworkIndicator;