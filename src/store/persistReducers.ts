import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { AnyAction, Reducer } from 'redux';

export default (reducers: Reducer): Reducer<any, AnyAction> => {
  const persistedReducer = persistReducer(
    {
      key: '@MENTORANDO',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducer;
};
