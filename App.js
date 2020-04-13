import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigation from './navigation/MealsNavigation';
import mealsReducer from './store/reducers/meals-reducer';

const rootReducer = combineReducers({
  // if there are many reducers, populate them into an object
  mealsReducerState: mealsReducer
});

const rootStore = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setIsFontLoaded(true)} 
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <Provider store={rootStore}>
      <MealsNavigation />
    </Provider>
  );
}
