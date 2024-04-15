import {
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";


const pages = createSlice({
  name: "count",
  initialState: { url: {}
  , genres: {}
 },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      
      state.genres = action.payload;
    },

   
  },
 
});
// for store
export default pages.reducer;

// for dispatch
export const { setUrl,getGenres } = pages.actions;

// for export specific data from store
export let sele = createSelector(
  (state) => state.count.ApiData,
  (state) => state
);
