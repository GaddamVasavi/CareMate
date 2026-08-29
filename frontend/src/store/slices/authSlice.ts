import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/auth.types';

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const savedUser = localStorage.getItem('caremate_user');
const savedToken = localStorage.getItem('caremate_access_token');

const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  accessToken: savedToken || null,
  isAuthenticated: !!savedToken,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; accessToken: string; refreshToken?: string }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      state.isLoading = false;

      localStorage.setItem('caremate_user', JSON.stringify(action.payload.user));
      localStorage.setItem('caremate_access_token', action.payload.accessToken);
      if (action.payload.refreshToken) {
        localStorage.setItem('caremate_refresh_token', action.payload.refreshToken);
      }
    },
    updateUserProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem('caremate_user', JSON.stringify(state.user));
      }
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.isLoading = false;

      localStorage.removeItem('caremate_user');
      localStorage.removeItem('caremate_access_token');
      localStorage.removeItem('caremate_refresh_token');
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCredentials, updateUserProfile, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
