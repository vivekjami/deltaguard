export const calculateImpermanentLoss = (
  priceChange: number,
  initialRatio: number = 0.5
): number => {
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

export const calculateRiskScore = (
  il: number,
  collateralRatio: number,
  deltaRatio: number
): number => {
  const ilScore = Math.min(il * 10, 40);
  const collateralScore = Math.max(0, (150 - collateralRatio) / 2);
  const deltaScore = Math.abs(deltaRatio) * 100;
  
  return Math.min(100, ilScore + collateralScore + deltaScore);
};

export const generateSparklineData = (baseValue: number, points: number = 20): number[] => {
  const data = [];
  let current = baseValue;
  
  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * 0.02;
    current = current * (1 + change);
    data.push(current);
  }
  
  return data;
};