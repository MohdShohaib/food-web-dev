import { apiClient } from './client';

/**
 * Example API service module
 * Create separate service files for different API domains (auth, user, products, etc.)
 */

// Authentication endpoints
export const authService = {
  login: (credentials: { email: string; password: string }) =>
    apiClient.post('/auth/login', credentials),
  
  register: (data: { email: string; password: string; name: string }) =>
    apiClient.post('/auth/register', data),
  
  logout: () =>
    apiClient.post('/auth/logout'),
  
  refreshToken: () =>
    apiClient.post('/auth/refresh'),
};

// User endpoints
export const userService = {
  getProfile: () =>
    apiClient.get('/users/profile'),
  
  updateProfile: (data: Record<string, any>) =>
    apiClient.put('/users/profile', data),
  
  getUserById: (id: string) =>
    apiClient.get(`/users/${id}`),
};
