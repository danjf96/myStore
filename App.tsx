/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { Provider } from 'react-redux';
 import Routes from './src/routes';
 import store from './src/store'
 import 'react-native-gesture-handler';
 
 const App = () => {
   return (
     <Provider store={store}>
       <Routes />
     </Provider>
   )
 };
 
 export default App;
 