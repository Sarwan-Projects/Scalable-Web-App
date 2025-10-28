'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = (requireAuth = true) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (requireAuth && !token) {
      router.push('/login');
    } else if (!requireAuth && token) {
      router.push('/dashboard');
    } else {
      setIsAuthenticated(!!token);
    }
    
    setIsLoading(false);
  }, [requireAuth, router]);

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return { isAuthenticated, isLoading, logout };
};
