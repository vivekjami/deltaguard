import { useState, useEffect } from 'react';
import { PortfolioData, Strategy } from '../types';
import { generatePortfolioData } from '../utils/mockData';

export const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = generatePortfolioData();
        setPortfolio(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  const updateStrategy = (strategyName: string, updates: Partial<Strategy>) => {
    if (portfolio) {
      const updatedStrategies = portfolio.strategies.map(strategy =>
        strategy.name === strategyName ? { ...strategy, ...updates } : strategy
      );
      setPortfolio({
        ...portfolio,
        strategies: updatedStrategies,
      });
    }
  };

  const calculateTotalValue = () => {
    if (!portfolio) return 0;
    return portfolio.strategies.reduce((sum, strategy) => sum + strategy.tvl, 0);
  };

  const calculateAverageAPY = () => {
    if (!portfolio) return 0;
    const activeStrategies = portfolio.strategies.filter(s => s.isActive);
    if (activeStrategies.length === 0) return 0;
    return activeStrategies.reduce((sum, strategy) => sum + strategy.apy, 0) / activeStrategies.length;
  };

  const calculateTotalIL = () => {
    if (!portfolio) return 0;
    return portfolio.strategies.reduce((sum, strategy) => sum + strategy.impermanentLoss, 0);
  };

  return {
    portfolio,
    loading,
    error,
    updateStrategy,
    calculateTotalValue,
    calculateAverageAPY,
    calculateTotalIL,
  };
};