export interface Strategy {
  id: string;
  name: string;
  pair: string;
  value: number;
  pnl: number;
  pnlPercentage: number;
  deltaRatio: number;
  targetDelta: number;
  apy: number;
  risk: 'Low' | 'Medium' | 'High';
  status: 'Active' | 'Rebalancing' | 'Alert';
  borrowedAmount: number;
  collateralRatio: number;
  impermanentLoss: number;
  isActive: boolean;
  lastRebalance: string;
  sparklineData: number[];
}

export interface PortfolioData {
  totalValue: number;
  totalPnl: number;
  totalPnlPercentage: number;
  avgApy: number;
  ilProtected: number;
  activePositions: number;
  alertCount: number;
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
  riskScore: number;
}

export interface YieldData {
  timestamp: number;
  lpFees: number;
  lendingYield: number;
  borrowingCost: number;
  netYield: number;
}

export interface EulerSwapData {
  totalLiquidity: number;
  utilizationRate: number;
  borrowingRate: number;
  supplyRate: number;
  availableLiquidity: number;
}