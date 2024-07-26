import { configureStore } from '@reduxjs/toolkit'
import bazaarslice from './bazaarslice';



export const store = configureStore({
  reducer: {
    bazaar: bazaarslice,
  },

});