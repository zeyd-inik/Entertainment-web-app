import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';
import type { ContentData } from '../types';

const initialState = data as ContentData;

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
});

export default contentSlice.reducer;
