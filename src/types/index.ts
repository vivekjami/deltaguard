export interface Strategy {
  name: string;
  pair: string;
  tvl: number;
  apy: number;
  risk: 'Low' | 'Medium' | 'High';
  deltaRatio: number;
  borrowedAmount: number;
  collateralRatio: number;
  impermanentLoss: number;
  isActive: boolean;
}

export interface PortfolioData {
  totalValue: number;
  totalYield: number;
  totalIL: number;
  strategies: Strategy[];
}

export interface PriceData {
  timestamp: number;
  price: number;
  volume: number;
  impermanentLoss: number;
  hedgeRatio: number;
}

export interface RiskMetrics {
  currentIL: number;
  maxIL: number;
  collateralHealth: number;
  liquidationRisk: number;
}

// New wallet-related types
export interface WalletBalance {
  eth: number;
  usdc: number;
  usdt: number;
  [key: string]: number; // For other tokens
}

export interface WalletState {
  address: string | undefined;
  isConnected: boolean;
  chainId: number | undefined;
  balance: WalletBalance;
  isConnecting: boolean;
  error: Error | null;
}

export type SupportedChainId = 1 | 11155111; // Mainnet | Sepolia