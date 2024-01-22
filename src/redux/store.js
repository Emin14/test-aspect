import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlices';

export default configureStore({
  reducer: {
    content: contentReducer
  }
});