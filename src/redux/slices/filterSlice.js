import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  activePage: 1,
  sortBy: {
    name:'популярністю по-спаданню ↓',
    sort:'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory (state, action) {
      state.categoryId = action.payload
    },
    setActiveSort: (state, action) => {
      state.sortBy = action.payload
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload
    },
    setFilters: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.categoryId = Number(action.payload.categoryId);
      state.activePage = Number(action.payload.activePage);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setActiveCategory, setActiveSort, setActivePage, setFilters } = filterSlice.actions

export default filterSlice.reducer