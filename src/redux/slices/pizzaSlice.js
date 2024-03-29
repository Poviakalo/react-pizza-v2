import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: []
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
        state.items = action.payload;
    }
  }
});
// Action creators are generated for each case reducer function
export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer