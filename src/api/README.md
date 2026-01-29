/**
 * API Client Usage Examples
 * 
 * This file demonstrates how to use the centralized API client in your components
 */

// Example 1: Using the generic apiClient
// ========================================
/*
import { apiClient } from '@/api/client';

export default function MyComponent() {
  const fetchData = async () => {
    try {
      const response = await apiClient.get('/endpoint');
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={fetchData}>Fetch Data</button>;
}
*/

// Example 2: Using predefined services
// ======================================
/*
import { authService, userService, productService } from '@/api/services';

export default function LoginComponent() {
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      // Redirect or update state
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <button onClick={() => handleLogin('user@example.com', 'password')}>
      Login
    </button>
  );
}
*/

// Example 3: Using with Redux thunk
// ===================================
/*
import { apiClient } from '@/api/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get('/users/profile');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);
*/

// Example 4: Using with React hooks (custom hook)
// ================================================
/*
import { useState, useCallback } from 'react';
import { apiClient } from '@/api/client';

export const useApi = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get<T>(url);
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};

// Usage:
// const { data, loading, error, fetchData } = useApi();
// useEffect(() => fetchData('/products'), []);
*/

export {};
