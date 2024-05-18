import {
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";


const pages = createSlice({
  name: "count",
  initialState: { url: {}
  , genres: {},error:false
 },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      
      state.genres = action.payload;
    },
    setError:(state,action)=>{
      state.error = action.payload

    },
   
  },
 
});
// for store
export default pages.reducer;

// for dispatch
export const { setUrl,getGenres ,setError} = pages.actions;

// for export specific data from store
export let sele = createSelector(
  (state) => state.count.ApiData,
  (state) => state
);
