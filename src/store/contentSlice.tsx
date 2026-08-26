import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import data from '../data.json';
import type { ContentData } from '../types';

const initialState = data as ContentData;

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<string>) => {
      const title = action.payload;
      const selectedContent = state.find((content) => {
        return content.title === title;
      });
      if (selectedContent) {
        selectedContent.isBookmarked = !selectedContent.isBookmarked;
      }
    },
  },
});

export const { toggleBookmark } = contentSlice.actions;
export default contentSlice.reducer;
