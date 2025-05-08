/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../screen/theme';
import { Switch } from 'react-native';


function InitialScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideUpAnim, {
      toValue: 0,
      duration: 600,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, );

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
      padding: 32,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      marginBottom: 8,
      color: isDarkMode ? '#FFFFFF' : '#2d3748',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: isDarkMode ? '#AAAAAA' : '#718096',
      textAlign: 'center',
      marginBottom: 48,
      fontWeight: '400',
    },
    buttonContainer: {
      width: '100%',
      maxWidth: 320,
    },
    primaryButton: {
      backgroundColor: '#6200ee',
      paddingVertical: 16,
      borderRadius: 12,
      marginBottom: 16,
      shadowColor: '#6200ee',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },
    secondaryButton: {
      backgroundColor: isDarkMode ? '#1f1f1f' : 'white',
      paddingVertical: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: isDarkMode ? '#333' : '#e2e8f0',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    buttonText: {
      color: isDarkMode ? '#FFFFFF' : 'white',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    secondaryButtonText: {
      color: '#6200ee',
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    toggleThemeText: {
      color: isDarkMode ? '#ccc' : '#444',
      marginTop: 24,
      fontSize: 14,
      textDecorationLine: 'underline',
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={dynamicStyles.title}>Welcome to My App</Text>
        <Text style={dynamicStyles.subtitle}>Please sign in or create an account</Text>
      </Animated.View>

      <Animated.View
        style={[
          dynamicStyles.buttonContainer,
          { transform: [{ translateY: slideUpAnim }], opacity: fadeAnim },
        ]}
      >
        <TouchableOpacity
          style={dynamicStyles.primaryButton}
          onPress={() => navigation.navigate('Signup')}
          activeOpacity={0.8}
        >
          <Text style={dynamicStyles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={dynamicStyles.secondaryButton}
          onPress={() => navigation.navigate('Signin')}
          activeOpacity={0.8}
        >
          <Text style={dynamicStyles.secondaryButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
  <Text style={{ marginRight: 10, color: isDarkMode ? '#fff' : '#000' }}>
    Dark Mode
  </Text>
  <Switch
    value={isDarkMode}
    onValueChange={toggleTheme}
    trackColor={{ false: '#767577', true: '#81b0ff' }}
    thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
  />
</View>
      </Animated.View>
    </View>
  );
}

export default InitialScreen;
