import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import Overview from '../components/Dashboard/Overview';
import { useWalletContext } from '../contexts/WalletContext';
import { useWallet } from '../hooks/useWallet';

const Dashboard: React.FC = () => {
  const { walletState } = useWalletContext();
  const { openConnectModal } = useWallet();
  const { isConnected } = walletState;

  return (
    <DashboardLayout>
      {!isConnected ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="text-center max-w-2xl">
            {/* Hero section for non-connected users */}
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-4xl font-bold mb-4">Welcome to DeltaGuard</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Advanced delta-neutral liquidity provision strategies that eliminate impermanent loss 
              while maximizing your DeFi yields through EulerSwap's innovative architecture.
            </p>
            
            {/* Features preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-2xl mb-3">⚖️</div>
                <h3 className="font-bold mb-2">Delta-Neutral</h3>
                <p className="text-sm text-gray-400">
                  Eliminate impermanent loss with automated hedging strategies
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-2xl mb-3">📈</div>
                <h3 className="font-bold mb-2">High Yields</h3>
                <p className="text-sm text-gray-400">
                  Earn 15-25% APY through optimized LP and lending strategies
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="font-bold mb-2">Auto-Rebalance</h3>
                <p className="text-sm text-gray-400">
                  Smart contracts manage your positions automatically
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Connect your wallet to access your dashboard and create your first delta-neutral strategy.
              </p>
              <button 
                onClick={openConnectModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors text-lg"
              >
                Connect Wallet
              </button>
            </div>
            
            {/* Stats preview */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">$21.3M</div>
                <div className="text-sm text-gray-400">Total TVL Protected</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">18.5%</div>
                <div className="text-sm text-gray-400">Average APY</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">95%</div>
                <div className="text-sm text-gray-400">IL Protection</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Overview />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;