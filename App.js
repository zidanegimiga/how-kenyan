import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameSelectionScreen from './screens/GameSelectionScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GameSelectionScreen" component={GameSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}