import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../src/services/supabase';

export default function Phone() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSendCode = async () => {
    const cleanPhone = phone.replace(/\s/g, '');
    if (!cleanPhone.startsWith('+') || cleanPhone.length < 10) {
      Alert.alert('Número inválido', 'Ingresa tu número con código de país, ejemplo: +573001234567');
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      phone: cleanPhone,
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      router.push({ pathname: '/verify', params: { phone: cleanPhone } });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa tu número</Text>
      <Text style={styles.subtitle}>Te enviaremos un código de verificación por SMS.</Text>
      <TextInput
        style={styles.input}
        placeholder="+57 300 1234567"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E004F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: { fontSize: 28, color: '#E6E6FA', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#D8BFD8', marginBottom: 30, textAlign: 'center' },
  input: {
    backgroundColor: '#3A0066',
    color: '#FFF',
    fontSize: 20,
    padding: 15,
    borderRadius: 12,
    width: '100%',
    marginBottom: 25,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});