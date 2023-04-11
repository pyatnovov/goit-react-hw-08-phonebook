import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contacts/Itemslice';
import { filtersReducer } from 'redux/contacts/filterslice';
const reducers = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
export const store = configureStore({
  reducer: reducers,
});
