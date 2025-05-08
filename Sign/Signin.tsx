/* eslint-disable no-dupe-keys */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { signInSchema, SignInFormData } from '../AUTHENTICATION/schema';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../AUTHENTICATION/authContext';
import ProfileScreen from '../AUTHENTICATION/profile';
import ProductScreen from '../screen/product';

type RootStackParamList = {
  signin: undefined;
  ProfileScreen: undefined;
  ProductScreen: undefined;
};

type SigninScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'signin'>;

const Signin = () => {
  const { login } = useAuth();
  const navigation = useNavigation<SigninScreenNavigationProp>();

  const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignInFormData) => {
    if (data.email.toLowerCase() === 'eurisko@gmail.com' && data.password === 'academy2025') {
      login();
      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate('ProductScreen'); // Move navigation here after successful login
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

      <View style={styles.logoContainer}>

        <Text style={styles.logoText}>🛒 MyShop</Text>
      </View>
        <Text style={styles.header}>Welcome Back 👋</Text>
      <Text style={styles.subHeader}>Please sign in to continue</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </>
        )}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#007BFF',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#007BFF',
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#999',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    color: '#333',
    fontSize: 14,
  },
  signupLink: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 6,
      textAlign: 'center',
    },
    subHeader: {
      fontSize: 16,
      color: '#666',
      marginBottom: 24,
      textAlign: 'center',
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 15,
      marginBottom: 12,
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    errorText: {
      color: 'crimson',
      fontSize: 13,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 12,
      shadowColor: '#007BFF',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default Signin;