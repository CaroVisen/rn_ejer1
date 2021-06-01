import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware,  createStore } from 'redux';
import thunk from 'redux-thunk';
import Padre from './src/Padre';
 
 
import AppReducer from './src/reducers/AppReducer';
 
 
 var createStoreWithMidddleware = applyMiddleware(thunk)(createStore);
 store = createStoreWithMidddleware(AppReducer);
 
export default class App extends React.PureComponent {
 render() {
 
 
   return (
     <SafeAreaView style={styles.safeArea}>
       <Provider store={store}>
           <Padre />
       </Provider>
     </SafeAreaView>
   );
 }
}
 
const styles = StyleSheet.create({
 safeArea: {
   flex: 1,
   backgroundColor: '#ddd'
 }
});
