import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface User {
  id: string;
  name: string;
  email?: string;
  phone: string;
  role: 'owner' | 'staff' | 'member' | 'admin' | 'superAdmin';
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

interface LoginSuccessPayload {
  user: User;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<LoginSuccessPayload>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  // blacklist:['isAuthenticated']
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const { setAuth, logout } = authSlice.actions;

export default persistedAuthReducer;
