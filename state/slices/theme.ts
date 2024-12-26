import { THEMES } from '@/constants/Theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  color: string;
}

const initialState: ThemeState = {
  color: THEMES.white,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ThemeState>) => ({
      ...state,
      color: action.payload.color,
    }),
    shuffleTheme: (state) => {
      const colors = Object.values(THEMES);
      const randomIndex = Math.floor(Math.random() * colors.length);
      const newColor = colors[randomIndex];
      state.color = newColor;
    },
  },
});

export const { updateTheme, shuffleTheme } = themeSlice.actions;
export default themeSlice.reducer;
