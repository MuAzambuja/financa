import 'react-native-reanimated'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import Login from './src/pages/Login';
import Rotas from './src/pages/Rotas';
/*import { Switch, Route, BrowserRouter } from "react-router-dom";*/

export default function App() {
  return (

    /*<BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/rotas" component={Rotas} />
      </Switch>
    </BrowserRouter>*/

    <Login />

    /*<NavigationContainer>
      <Routes />
    </NavigationContainer>*/
  );
}