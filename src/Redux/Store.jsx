// npm install @reduxjs/toolkit react-redux

// 1.create Redux folder in src 
// 2.create slices folder in redux
// 3.in slices Slice.jsx
// 3.create Store.jsx in redux
import {configureStore} from '@reduxjs/toolkit';
import pages from "./slices/Slice";
export const store=configureStore({
    reducer:{pages:pages},
    // devTools:true,
})

 