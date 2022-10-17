
import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './color/colorSlice'
import counterReducer from './counter/counterSclice'

const store = configureStore({
  reducer :{
      colorReducer : colorReducer,
      counter : counterReducer
  }
});

export default store
