export const COLORS = {
  primary: '#0066ff',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  background: '#0f172a',
  cardBg: '#1e293b80',
  text: {
    primary: '#ffffff',
    secondary: '#94a3b8',
    muted: '#64748b'
  }
};

export const STRATEGY_PAIRS = [
  'ETH/USDC',
  'BTC/USDC',
  'LINK/USDC',
  'UNI/USDC',
  'AAVE/USDC'
];

export const TIME_RANGES = [
  { label: '1D', value: '1d' },
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: '90D', value: '90d' },
  { label: 'ALL', value: 'all' }
];

export const RISK_LEVELS = {
  Low: { color: '#10b981', threshold: 30 },
  Medium: { color: '#f59e0b', threshold: 70 },
  High: { color: '#ef4444', threshold: 100 }
};