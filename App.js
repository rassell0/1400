import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootContainer from './component/RootContainer';
import { store } from './redux/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <View style={styles.container}>
       <Provider store={store}>
        <RootContainer/>
       </Provider>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
