import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../src/services/supabase';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const router = useRouter();

  const handleSignOut = async () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás segura de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Cerrar sesión',
          style: 'destructive',
          onPress: async () => {
            await supabase.auth.signOut();
            // La redirección a /welcome ocurrirá automáticamente por _layout.tsx
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={80} color="#E6E6FA" />
        <Text style={styles.title}>Mi Perfil</Text>
        <Text style={styles.subtitle}>Aquí podrás editar tus datos y contactos de confianza.</Text>
      </View>

      <View style={styles.menuContainer}>
        {/* Aquí irán las opciones de menú en el futuro */}
        <View style={styles.menuItem}>
          <Ionicons name="people" size={24} color="#D8BFD8" />
          <Text style={styles.menuItemText}>Contactos de confianza</Text>
          <Ionicons name="chevron-forward" size={20} color="#D8BFD8" />
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="shield-checkmark" size={24} color="#D8BFD8" />
          <Text style={styles.menuItemText}>Historial de acompañamientos</Text>
          <Ionicons name="chevron-forward" size={20} color="#D8BFD8" />
        </View>

        <View style={styles.menuItem}>
          <Ionicons name="settings" size={24} color="#D8BFD8" />
          <Text style={styles.menuItemText}>Configuración</Text>
          <Ionicons name="chevron-forward" size={20} color="#D8BFD8" />
        </View>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Ionicons name="log-out" size={22} color="#FF6B6B" />
        <Text style={styles.signOutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E004F',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    color: '#E6E6FA',
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#D8BFD8',
    textAlign: 'center',
    marginTop: 8,
  },
  menuContainer: {
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4B0082',
  },
  menuItemText: {
    flex: 1,
    color: '#E6E6FA',
    fontSize: 16,
    marginLeft: 15,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#FF6B6B',
    borderRadius: 12,
    marginTop: 'auto',
    marginBottom: 20,
  },
  signOutText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});