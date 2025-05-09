/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpFormData } from '../AUTHENTICATION/schema';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../screen/theme'; // Import your theme context
import LinearGradient from 'react-native-linear-gradient';

const Signup = () => {
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme(); // Use theme context instead of useColorScheme

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    // Handle form submission
    Alert.alert('Success', 'Account created successfully!');
    //@ts-ignore
    navigation.navigate('Verification');
  };

  // Dynamic styles based on theme
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: 30,
      paddingTop: 40,
      backgroundColor: isDarkMode ? '#121212' : '#F9F9F9',
    },
    header: {
      alignItems: 'center',
      marginBottom: 30,
    },
    title: {
      fontSize: 32,
      fontWeight: '800',
      color: isDarkMode ? '#FFF' : '#2D3748',
      textAlign: 'center',
      marginBottom: 8,
      letterSpacing: 0.5,
    },
    subtitle: {
      fontSize: 16,
      color: isDarkMode ? '#A0AEC0' : '#718096',
      textAlign: 'center',
      marginBottom: 40,
      fontWeight: '500',
    },
    inputContainer: {
      marginBottom: 15,
    },
    input: {
      height: 56,
      borderWidth: 1,
      borderColor: isDarkMode ? '#2D3748' : '#E2E8F0',
      backgroundColor: isDarkMode ? '#1E1E1E' : '#FFF',
      borderRadius: 12,
      paddingHorizontal: 20,
      fontSize: 16,
      color: isDarkMode ? '#FFF' : '#2D3748',
      shadowColor: isDarkMode ? '#000' : '#E2E8F0',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 2,
    },
    focusedInput: {
      borderColor: '#667EEA',
      shadowColor: '#667EEA',
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    errorInput: {
      borderColor: '#F56565',
    },
    errorText: {
      color: '#F56565',
      fontSize: 13,
      marginTop: 5,
      marginLeft: 5,
    },
    button: {
      borderRadius: 12,
      overflow: 'hidden',
      marginTop: 25,
      shadowColor: '#667EEA',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 6,
    },
    buttonGradient: {
      paddingVertical: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
      letterSpacing: 0.5,
    },
    loginText: {
      color: isDarkMode ? '#A0AEC0' : '#718096',
      textAlign: 'center',
      marginTop: 24,
    },
    loginLink: {
      color: '#667EEA',
      fontWeight: '600',
    },
    themeToggle: {
      position: 'absolute',
      top: 20,
      right: 20,
      padding: 10,
      borderRadius: 20,
      backgroundColor: isDarkMode ? '#2D3748' : '#E2E8F0',
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.themeToggle}
          onPress={toggleTheme}
        >
          <Text style={{ color: isDarkMode ? '#E2E8F0' : '#2D3748' }}>
            {isDarkMode ? '☀️' : '🌙'}
          </Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us and start shopping smarter 🛍️</Text>
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[
                    styles.input,
                    errors.username && styles.errorInput,
                  ]}
                  placeholder="Username"
                  placeholderTextColor={isDarkMode ? '#4A5568' : '#A0AEC0'}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                />
                {errors.username && (
                  <Text style={styles.errorText}>{errors.username.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[
                    styles.input,
                    errors.email && styles.errorInput,
                  ]}
                  placeholder="Email"
                  placeholderTextColor={isDarkMode ? '#4A5568' : '#A0AEC0'}
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
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[
                    styles.input,
                    errors.password && styles.errorInput,
                  ]}
                  placeholder="Password"
                  placeholderTextColor={isDarkMode ? '#4A5568' : '#A0AEC0'}
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
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={[
                    styles.input,
                    errors.phone && styles.errorInput,
                  ]}
                  placeholder="+961 Phone Number"
                  placeholderTextColor={isDarkMode ? '#4A5568' : '#A0AEC0'}
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
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          activeOpacity={0.9}
          disabled={isSubmitting}
        >
          <LinearGradient
            colors={['#667EEA', '#764BA2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('Signin')}
          >
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
