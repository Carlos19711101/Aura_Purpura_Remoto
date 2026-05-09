import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { supabase } from '../../src/services/supabase';

export default function Verify() {
  const { phone } = useLocalSearchParams<{ phone: string }>();
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleVerify = async () => {
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token: code,
      type: 'sms',
    });

    if (error) {
      Alert.alert('Código incorrecto', 'Intenta de nuevo.');
    } else {
      router.replace('/');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verifica tu número</Text>
      <Text style={styles.subtitle}>Ingresa el código de 6 dígitos enviado al {phone}.</Text>
      <TextInput
        style={styles.input}
        placeholder="123456"
        placeholderTextColor="#999"
        keyboardType="number-pad"
        maxLength={6}
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verificar</Text>
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
    fontSize: 28,
    padding: 15,
    borderRadius: 12,
    width: '80%',
    marginBottom: 25,
    textAlign: 'center',
    letterSpacing: 8,
  },
  button: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});