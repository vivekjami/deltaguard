import { useState, useEffect, useCallback } from 'react';
import { Strategy, RiskMetrics } from '../types';
import { calculateRiskScore } from '../utils/calculations';

export const useDeltaNeutral = (strategy: Strategy) => {
  const [isRebalancing, setIsRebalancing] = useState(false);
  const [riskMetrics, setRiskMetrics] = useState<RiskMetrics>({
    currentIL: 0,
    maxIL: 5,
    collateralHealth: 150,
    liquidationRisk: 5,
    riskScore: 0
  });

  const calculateHedgeRatio = (
    price: number,
    lpValue: number,
    borrowedAmount: number
  ): number => {
    return (borrowedAmount * price) / lpValue;
  };

  const shouldRebalance = (currentRatio: number, targetRatio: number = 0.05): boolean => {
    return Math.abs(currentRatio - targetRatio) > 0.02;
  };

  const executeRebalance = async (targetRatio: number) => {
    setIsRebalancing(true);
    
    // Simulate rebalancing logic
    setTimeout(() => {
      setIsRebalancing(false);
    }, 3000);
  };

  const assessRisk = useCallback((): RiskMetrics => {
    const currentIL = strategy.impermanentLoss;
    const collateralHealth = strategy.collateralRatio;
    const riskScore = calculateRiskScore(currentIL, collateralHealth, strategy.deltaRatio);
    
    return {
      currentIL,
      maxIL: 5,
      collateralHealth,
      liquidationRisk: collateralHealth < 120 ? 80 : 5,
      riskScore
    };
  }, [strategy]);

  useEffect(() => {
    setRiskMetrics(assessRisk());
  }, [strategy, assessRisk]);

  return {
    isRebalancing,
    riskMetrics,
    executeRebalance,
    shouldRebalance,
    calculateHedgeRatio,
  };
};