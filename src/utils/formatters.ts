export const formatCurrency = (value: number, decimals: number = 2): string => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K`;
  }
  return `$${value.toFixed(decimals)}`;
};

export const formatPercentage = (value: number, decimals: number = 2): string => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
};

export const formatAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatDelta = (value: number): string => {
  return value.toFixed(3);
};

export const formatAPY = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const getPercentageColor = (value: number): string => {
  if (value >= 0) return '#10b981';
  return '#ef4444';
};

export const getRiskColor = (risk: string): string => {
  switch (risk) {
    case 'Low': return '#10b981';
    case 'Medium': return '#f59e0b';
    case 'High': return '#ef4444';
    default: return '#64748b';
  }
};