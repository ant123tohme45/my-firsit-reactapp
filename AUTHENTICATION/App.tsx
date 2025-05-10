import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Sign/Signup';
import Signin from '../Sign/Signin';
import InitialScreen from './initial';
import verification from '../Sign/verification';
import { AuthProvider } from '../AUTHENTICATION/authContext';
import ProductListScreen from '../screen/product';
import details from '../screen/details';
import { ThemeProvider } from '../screen/theme';
import ForgotPasswordScreen from '../forgot';


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
              component={ProductListScreen}
              options={{ title: 'Products' }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={details}
              options={{ title: 'Profile' }}
            />
<Stack.Screen
name="forgot"
component={ForgotPasswordScreen}
/>

          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
