import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { otpSchema, OtpFormData } from '../AUTHENTICATION/schema';
import { useNavigation } from '@react-navigation/native';


const VerificationScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const onSubmit = (data: OtpFormData) => {
    if (data.otp === '1234') {
      Alert.alert('Success', 'OTP verified successfully!');
      navigation.navigate('Signup');
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const handleResend = () => {
    Alert.alert('OTP Resent', 'A new OTP has been sent to your number');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>
      <Controller
        control={control}
        name="otp"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter 4-digit OTP"
              keyboardType="number-pad"
              maxLength={4}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
            {errors.otp && (
              <Text style={styles.errorText}>{errors.otp.message}</Text>
            )}
          </>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  resendText: {
    color: '#6200EE',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default VerificationScreen;
