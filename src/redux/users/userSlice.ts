import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const fetchUsers = createAsyncThunk('users/getAllUsers', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=1'
  );
  const data = await response.json();
  return data;
});

const user: User =
  typeof window !== 'undefined' && localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
      };

const initialState = {
  currentUser: user,
  entities: [],
  loading: false,
} as any;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUser: (state) => {
      state.currentUser = {
        id: '',
        email: '',
        fisrtName: '',
        lastName: '',
      };
      state.entities = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.entities.push(...action.payload);
    });

    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
  },
});
export const { setUser, removeUser } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
