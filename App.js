import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screen/SplashScreen';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import MainScreen from './src/screen/MainScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: '메인화면' }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: '로딩화면' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          title: 'COVID-19',
          headerShown: false
        }} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: '상세화면' }} />
      </Stack.Navigator>
    </NavigationContainer>);
} export default App;
