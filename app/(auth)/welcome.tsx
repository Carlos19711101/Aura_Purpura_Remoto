import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoIcon}>🟣</Text>
        <Text style={styles.appName}>AURA PÚRPURA</Text>
        <Text style={styles.tagline}>Nunca caminas sola</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/onboarding')}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Crear cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/phone')}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Al registrarte aceptas nuestros términos y política de privacidad
      </Text>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logoIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#E6E6FA',
    letterSpacing: 3,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#D8BFD8',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 18,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#8B008B',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#E6E6FA',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footerText: {
    color: '#999',
    fontSize: 12,
    textAlign: 'center',
    position: 'absolute',
    bottom: 40,
  },
});