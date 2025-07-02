import { useState, useEffect } from 'react';
import { PortfolioData } from '../types';
import { generatePortfolioData } from '../utils/mockData';

export const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setPortfolio(generatePortfolioData());
        setIsLoading(false);
      }, 1000);
    };

    fetchPortfolio();
  }, []);

  const refreshPortfolio = () => {
    setPortfolio(generatePortfolioData());
  };

  return {
    portfolio,
    isLoading,
    refreshPortfolio
  };
};