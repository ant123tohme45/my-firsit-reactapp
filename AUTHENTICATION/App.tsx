import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Sign/Signup';
import Signin from '../Sign/Signin';
import InitialScreen from './initial';
import verification from '../Sign/verification';
import { AuthProvider } from './authContext';
import product from '../screen/product';
import details from '../screen/details';
import { ThemeProvider } from '../screen/theme';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Initial"
              component={InitialScreen}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen
              name="Verification"
              component={verification}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen
              name="ProductScreen"
              component={product}
              options={{ title: 'Products' }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={details}
              options={{ title: 'Profile' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
