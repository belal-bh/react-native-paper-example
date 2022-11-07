import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import TypographyScreen from './src/screens/TypographyScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Typography" component={TypographyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
