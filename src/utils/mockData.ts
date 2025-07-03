import { Strategy, PriceData, PortfolioData } from '../types';

export const generateMockStrategies = (): Strategy[] => [
  {
    name: 'ETH-USDC Delta Neutral',
    pair: 'ETH/USDC',
    tvl: 12500000,
    apy: 18.5,
    risk: 'Medium',
    deltaRatio: 0.02,
    borrowedAmount: 2500000,
    collateralRatio: 180,
    impermanentLoss: 0.8,
    isActive: true,
  },
  {
    name: 'BTC-USDC Delta Neutral',
    pair: 'BTC/USDC',
    tvl: 8750000,
    apy: 22.3,
    risk: 'Medium',
    deltaRatio: 0.03,
    borrowedAmount: 1800000,
    collateralRatio: 165,
    impermanentLoss: 1.2,
    isActive: true,
  },
  {
    name: 'LINK-USDC Conservative',
    pair: 'LINK/USDC',
    tvl: 3200000,
    apy: 15.8,
    risk: 'Low',
    deltaRatio: 0.01,
    borrowedAmount: 650000,
    collateralRatio: 220,
    impermanentLoss: 0.4,
    isActive: true,
  },
  {
    name: 'UNI-ETH Aggressive',
    pair: 'UNI/ETH',
    tvl: 1800000,
    apy: 28.7,
    risk: 'High',
    deltaRatio: 0.08,
    borrowedAmount: 900000,
    collateralRatio: 135,
    impermanentLoss: 2.5,
    isActive: false,
  },
];

export const generatePriceData = (
  basePrice: number,
  hours: number = 168
): PriceData[] => {
  const data: PriceData[] = [];
  
  for (let i = 0; i < hours; i++) {
    const volatility = Math.sin(i * 0.1) * 0.02 + (Math.random() - 0.5) * 0.01;
    const price = basePrice * (1 + volatility);
    
    data.push({
      timestamp: Date.now() - (hours - i) * 3600000,
      price,
      volume: Math.random() * 1000000 + 500000,
      impermanentLoss: Math.abs(volatility) * 100,
      hedgeRatio: 0.5 + volatility * 0.1,
    });
  }
  
  return data;
};

export const generatePortfolioData = (): PortfolioData => {
  const strategies = generateMockStrategies();
  
  return {
    totalValue: strategies.reduce((sum, s) => sum + s.tvl, 0),
    totalYield: strategies.reduce((sum, s) => sum + (s.tvl * s.apy / 100), 0),
    totalIL: strategies.reduce((sum, s) => sum + s.impermanentLoss, 0),
    strategies,
  };
};