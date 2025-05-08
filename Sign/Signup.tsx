import React from 'react';
import {

  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpFormData } from '../AUTHENTICATION/schema';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark'; // Use system preference

  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const onSubmit = () => {
    //@ts-ignore
    navigation.navigate('Verification');
  };

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 24,
      backgroundColor: isDarkMode ? '#121212' : '#F5F5F5',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: isDarkMode ? '#FFF' : '#333',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: isDarkMode ? '#CCC' : '#666',
      textAlign: 'center',
      marginBottom: 24,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      color: isDarkMode ? '#fff' : '#000',
      marginBottom: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    errorText: {
      color: 'red',
      fontSize: 13,
      marginBottom: 10,
      marginLeft: 2,
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
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

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join us and start shopping smarter 🛍️</Text>

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.username && (
              <Text style={styles.errorText}>{errors.username.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
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
              placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
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

      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="+961 ...Phone Number"
              placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
              keyboardType="phone-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone.message}</Text>
            )}
          </>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} activeOpacity={0.85}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Signup;
