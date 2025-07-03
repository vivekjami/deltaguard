import { useState, useEffect } from 'react';
import { Strategy, RiskMetrics } from '../types';
import { calculateDeltaRatio, calculateCollateralRatio } from '../utils/calculations';

export const useDeltaNeutral = (strategy: Strategy) => {
  const [isRebalancing, setIsRebalancing] = useState(false);
  const [riskMetrics, setRiskMetrics] = useState<RiskMetrics>({
    currentIL: strategy.impermanentLoss,
    maxIL: 5.0,
    collateralHealth: strategy.collateralRatio,
    liquidationRisk: 0,
  });

  useEffect(() => {
    // Calculate risk metrics based on strategy
    const liquidationRisk = strategy.collateralRatio < 130 ? 0.8 : 
                           strategy.collateralRatio < 150 ? 0.4 : 0.1;
    
    setRiskMetrics({
      currentIL: strategy.impermanentLoss,
      maxIL: 5.0,
      collateralHealth: strategy.collateralRatio,
      liquidationRisk,
    });
  }, [strategy]);

  const executeRebalance = async () => {
    setIsRebalancing(true);
    try {
      // Simulate rebalancing operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Update strategy state after rebalancing
    } catch (error) {
      console.error('Rebalancing failed:', error);
    } finally {
      setIsRebalancing(false);
    }
  };

  const checkRebalanceRequired = () => {
    return Math.abs(strategy.deltaRatio) > 0.05; // 5% threshold
  };

  const calculateOptimalHedgeRatio = () => {
    // Simplified hedge ratio calculation
    return 0.5 + (strategy.deltaRatio * 0.1);
  };

  const getRebalanceRecommendation = () => {
    if (strategy.deltaRatio > 0.05) {
      return 'Increase short position';
    } else if (strategy.deltaRatio < -0.05) {
      return 'Decrease short position';
    }
    return 'Position is balanced';
  };

  return {
    isRebalancing,
    riskMetrics,
    executeRebalance,
    checkRebalanceRequired,
    calculateOptimalHedgeRatio,
    getRebalanceRecommendation,
  };
};