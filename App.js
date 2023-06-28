import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TelaLogin from './src/components/TelaLogin';
import TelaCadastro from './src/components/TelaCadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" components={TelaLogin} />
        <Stack.Screen name="Cadastro" components={TelaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
