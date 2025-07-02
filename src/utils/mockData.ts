import { Strategy, PortfolioData, PriceData, YieldData } from '../types';
import { generateSparklineData } from './calculations';

export const generateMockStrategies = (): Strategy[] => [
  {
    id: '1',
    name: 'ETH-USDC Delta Neutral',
    pair: 'ETH/USDC',
    value: 45200,
    pnl: 1446,
    pnlPercentage: 3.2,
    deltaRatio: 0.03,
    targetDelta: 0.05,
    apy: 19.2,
    risk: 'Medium',
    status: 'Active',
    borrowedAmount: 22600,
    collateralRatio: 180,
    impermanentLoss: 0.8,
    isActive: true,
    lastRebalance: '2 hours ago',
    sparklineData: generateSparklineData(45200)
  },
  {
    id: '2',
    name: 'BTC-USDC Delta Neutral',
    pair: 'BTC/USDC',
    value: 38800,
    pnl: 698,
    pnlPercentage: 1.8,
    deltaRatio: 0.07,
    targetDelta: 0.05,
    apy: 22.1,
    risk: 'Medium',
    status: 'Rebalancing',
    borrowedAmount: 19400,
    collateralRatio: 165,
    impermanentLoss: 1.2,
    isActive: true,
    lastRebalance: '15 minutes ago',
    sparklineData: generateSparklineData(38800)
  },
  {
    id: '3',
    name: 'LINK-USDC Delta Neutral',
    pair: 'LINK/USDC',
    value: 41500,
    pnl: 871,
    pnlPercentage: 2.1,
    deltaRatio: 0.02,
    targetDelta: 0.05,
    apy: 15.8,
    risk: 'Low',
    status: 'Alert',
    borrowedAmount: 20750,
    collateralRatio: 195,
    impermanentLoss: 0.5,
    isActive: true,
    lastRebalance: '6 hours ago',
    sparklineData: generateSparklineData(41500)
  }
];

export const generatePortfolioData = (): PortfolioData => {
  const strategies = generateMockStrategies();
  const totalValue = strategies.reduce((sum, s) => sum + s.value, 0);
  const totalPnl = strategies.reduce((sum, s) => sum + s.pnl, 0);
  const avgApy = strategies.reduce((sum, s) => sum + s.apy, 0) / strategies.length;
  const activePositions = strategies.filter(s => s.isActive).length;
  const alertCount = strategies.filter(s => s.status === 'Alert').length;

  return {
    totalValue,
    totalPnl,
    totalPnlPercentage: (totalPnl / (totalValue - totalPnl)) * 100,
    avgApy,
    ilProtected: 95,
    activePositions,
    alertCount,
    strategies
  };
};

export const generatePriceData = (
  basePrice: number,
  hours: number = 168
): PriceData[] => {
  const data: PriceData[] = [];
  let currentPrice = basePrice;
  
  for (let i = 0; i < hours; i++) {
    const volatility = Math.sin(i * 0.1) * 0.02 + (Math.random() - 0.5) * 0.01;
    currentPrice = currentPrice * (1 + volatility);
    
    data.push({
      timestamp: Date.now() - (hours - i) * 3600000,
      price: currentPrice,
      volume: Math.random() * 1000000 + 500000,
      impermanentLoss: Math.abs(volatility) * 100,
      hedgeRatio: 0.5 + volatility * 0.1,
    });
  }
  
  return data;
};

export const generateYieldData = (days: number = 30): YieldData[] => {
  const data: YieldData[] = [];
  
  for (let i = 0; i < days; i++) {
    const lpFees = 8 + Math.random() * 4;
    const lendingYield = 5 + Math.random() * 3;
    const borrowingCost = 6 + Math.random() * 2;
    
    data.push({
      timestamp: Date.now() - (days - i) * 86400000,
      lpFees,
      lendingYield,
      borrowingCost,
      netYield: lpFees + lendingYield - borrowingCost
    });
  }
  
  return data;
};