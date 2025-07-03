import React from 'react';
import WalletButton from '../Wallet/WalletButton';
import NetworkIndicator from '../Wallet/NetworkIndicator';
import { useWalletContext } from '../../contexts/WalletContext';
import { usePortfolio } from '../../hooks/usePortfolio';
import { formatTVL } from '../../utils/formatters';

const Header: React.FC = () => {
  const { walletState } = useWalletContext();
  const { calculateTotalValue } = usePortfolio();
  
  const totalPortfolioValue = calculateTotalValue();

  return (
    <header className="bg-gray-800 py-4 px-6 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center gap-3">
          <span className="text-2xl">🛡️</span>
          <div>
            <h1 className="text-xl font-bold">DeltaGuard</h1>
            <p className="text-xs text-gray-400">Delta-Neutral LP Strategies</p>
          </div>
        </div>
        
        {/* Middle section - portfolio value */}
        {walletState.isConnected && (
          <div className="hidden md:block text-center">
            <div className="text-sm text-gray-400">Portfolio Value</div>
            <div className="text-lg font-bold text-green-400">
              {formatTVL(totalPortfolioValue)}
            </div>
          </div>
        )}
        
        {/* Wallet connection */}
        <div className="flex items-center gap-3">
          <NetworkIndicator />
          <WalletButton />
        </div>
      </div>
    </header>
  );
};

export default Header;