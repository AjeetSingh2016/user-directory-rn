import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './screens/UserList';
import UserDetails from './screens/UserDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} options={{ title: 'User Directory' }} />
        <Stack.Screen name="UserDetails" component={UserDetails} options={{ title: 'User Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
