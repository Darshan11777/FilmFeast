import {
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";


const pages = createSlice({
  name: "count",
  initialState: { url: {}
  , generas: {}
 },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    addGeneras: (state, action) => {
      
      state.generas = action.payload;
    },

   
  },
 
});
// for store
export default pages.reducer;

// for dispacth
export const { setUrl, addGeneras } = pages.actions;

// for export sfecific data from store
export let sele = createSelector(
  (state) => state.count.ApiData,
  (state) => state
);
