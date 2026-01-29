import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Create axios instance with default configuration
const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      // Add authorization token if available
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle errors globally
      if (error.response?.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('authToken');
        // Redirect to login or trigger logout action
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosClient = createAxiosInstance();

// Generic API request methods
export const apiClient = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => 
    axiosClient.get<T>(url, config) as Promise<AxiosResponse<T>>,
  
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    axiosClient.post<T>(url, data, config) as Promise<AxiosResponse<T>>,
  
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    axiosClient.put<T>(url, data, config) as Promise<AxiosResponse<T>>,
  
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    axiosClient.patch<T>(url, data, config) as Promise<AxiosResponse<T>>,
  
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => 
    axiosClient.delete<T>(url, config) as Promise<AxiosResponse<T>>,
};

export default axiosClient;
