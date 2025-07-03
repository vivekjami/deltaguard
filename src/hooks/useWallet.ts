import { useState } from 'react';
import { useConnect, useDisconnect, useAccount } from 'wagmi';
import { useWalletContext } from '../contexts/WalletContext';
import { SupportedChainId } from '../types';
import { isSupportedChain } from '../config/wagmi';

export const useWallet = () => {
  const { walletState } = useWalletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  // Removed switchNetwork as it is not exported by wagmi
  const { isConnected, chainId } = useAccount();

  const openConnectModal = () => {
    setIsModalOpen(true);
  };

  const closeConnectModal = () => {
    setIsModalOpen(false);
  };

  const handleConnect = (connectorId: string) => {
    const connector = connectors.find(c => c.id === connectorId);
    if (connector) {
      connect({ connector });
    }
    closeConnectModal();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  // Removed handleSwitchNetwork as it depends on switchNetwork

  const formatAddress = (address: string | undefined) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const isNetworkSupported = () => {
    return isSupportedChain(chainId);
  };

  return {
    isModalOpen,
    openConnectModal,
    closeConnectModal,
    handleConnect,
    handleDisconnect,
    // handleSwitchNetwork,
    formatAddress,
    isNetworkSupported,
    connectors,
    // Removed handleSwitchNetwork from the returned object
    walletState,
  };
};