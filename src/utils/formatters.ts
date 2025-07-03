export const formatAddress = (address: string | undefined): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatBalance = (balance: number, decimals: number = 4): string => {
  return balance.toFixed(decimals);
};

export const formatTimestamp = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString();
};

export const formatAPY = (apy: number): string => {
  return `${apy.toFixed(1)}%`;
};

export const formatTVL = (tvl: number): string => {
  if (tvl >= 1000000) {
    return `$${(tvl / 1000000).toFixed(2)}M`;
  }
  if (tvl >= 1000) {
    return `$${(tvl / 1000).toFixed(1)}K`;
  }
  return `$${tvl.toFixed(2)}`;
};