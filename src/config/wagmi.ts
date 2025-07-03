import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

// Configuration for Wagmi
export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet({ 
      appName: 'DeltaGuard',
    }),
    walletConnect({
      projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID || 'default-project-id',
      metadata: {
        name: 'DeltaGuard',
        description: 'Delta-Neutral LP Strategy Dashboard for EulerSwap',
        url: window.location.origin,
        icons: [`${window.location.origin}/logo192.png`]
      }
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

export const CHAIN_NAMES: Record<number, string> = {
  1: 'Ethereum',
  11155111: 'Sepolia',
}

export const isSupportedChain = (chainId: number | undefined): boolean => {
  return chainId !== undefined && ([mainnet.id, sepolia.id] as readonly number[]).includes(chainId);
}

export const getChainName = (chainId: number | undefined): string => {
  return chainId ? CHAIN_NAMES[chainId] || 'Unsupported Network' : 'Not Connected';
}