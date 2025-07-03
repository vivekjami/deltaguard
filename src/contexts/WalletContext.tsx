import React, { createContext, useContext, useEffect, useState } from 'react';
import { WalletState, WalletBalance, SupportedChainId } from '../types';
import { useAccount, useBalance, useChains } from 'wagmi';
import { isSupportedChain } from '../config/wagmi';

const defaultWalletState: WalletState = {
  address: undefined,
  isConnected: false,
  chainId: undefined,
  balance: {
    eth: 0,
    usdc: 0,
    usdt: 0,
  },
  isConnecting: false,
  error: null,
};

const WalletContext = createContext<{
  walletState: WalletState;
  connectWallet: () => void;
  disconnectWallet: () => void;
  switchNetwork: (chainId: SupportedChainId) => void;
}>({
  walletState: defaultWalletState,
  connectWallet: () => {},
  disconnectWallet: () => {},
  switchNetwork: () => {},
});

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletState, setWalletState] = useState<WalletState>(defaultWalletState);
  
  const { address, isConnected } = useAccount();
  const chains = useChains();
  const chain = chains[0];
  const { data: ethBalance } = useBalance({
    address,
  });
  
  useEffect(() => {
    setWalletState(prev => ({
      ...prev,
      address,
      isConnected,
      chainId: chain?.id,
      balance: {
        ...prev.balance,
        eth: parseFloat(ethBalance?.formatted || '0'),
      },
      error: !isSupportedChain(chain?.id) && isConnected 
        ? new Error('Unsupported network') 
        : null,
    }));
  }, [address, isConnected, chain, ethBalance]);

  const connectWallet = () => {
    setWalletState(prev => ({ ...prev, isConnecting: true }));
  };

  const disconnectWallet = () => {
    // Handled by wagmi hooks
  };

  const switchNetwork = (chainId: SupportedChainId) => {
    // Handled by wagmi hooks
  };

  return (
    <WalletContext.Provider 
      value={{ 
        walletState, 
        connectWallet, 
        disconnectWallet,
        switchNetwork
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);