export const calculateImpermanentLoss = (
  priceChange: number,
  initialRatio: number = 0.5
): number => {
  const ratio = initialRatio;
  const k = Math.sqrt(priceChange);
  const il = (2 * k) / (1 + k) - 1;
  return Math.abs(il) * 100;
};

export const calculateDeltaRatio = (
  price: number,
  borrowedAmount: number,
  lpValue: number
): number => {
  return (borrowedAmount * price) / lpValue;
};

export const calculateYield = (
  lpFees: number,
  lendingYield: number,
  borrowingCost: number
): number => {
  return lpFees + lendingYield - borrowingCost;
};

export const calculateCollateralRatio = (
  collateralValue: number,
  borrowedValue: number
): number => {
  return (collateralValue / borrowedValue) * 100;
};

export const formatCurrency = (amount: number): string => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`;
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  }
  return `$${amount.toFixed(2)}`;
};

export const formatPercentage = (value: number): string => {
  return `${Math.abs(value).toFixed(2)}%`;
};