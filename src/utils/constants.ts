export const SUPPORTED_TOKENS = {
  ETH: '0x0000000000000000000000000000000000000000',
  USDC: '0xA0b86a33E6441e073E6DA52C91ff80Ff39Ec00E9',
  USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
};

export const RISK_LEVELS = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
} as const;

export const REBALANCE_THRESHOLDS = {
  CONSERVATIVE: 0.05,
  MODERATE: 0.1,
  AGGRESSIVE: 0.15,
};

export const LIQUIDATION_RATIOS = {
  SAFE: 200,
  MODERATE: 150,
  RISKY: 120,
};