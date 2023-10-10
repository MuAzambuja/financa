import 'react-native-reanimated'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import Login from './src/pages/Login';

export default function App() {
  return (
    <Login />
    /*<NavigationContainer>
      <Routes />
    </NavigationContainer>*/
  );
}