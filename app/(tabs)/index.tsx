import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleAccompaniment = () => {
    router.push('/alert');
  };

  const handleRedApoyo = () => {
    router.push('/community');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>AURA PÚRPURA</Text>
      <Text style={styles.tagline}>Nunca caminas sola</Text>

      <TouchableOpacity style={styles.buttonMain} onPress={handleAccompaniment} activeOpacity={0.8}>
        <Ionicons name="shield-checkmark" size={32} color="#FFF" />
        <Text style={styles.buttonText}>ACOMPAÑAMIENTO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={handleRedApoyo} activeOpacity={0.8}>
        <Ionicons name="people" size={32} color="#FFF" />
        <Text style={styles.buttonText}>RED APOYO</Text>
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
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#E6E6FA',
    letterSpacing: 3,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#D8BFD8',
    marginBottom: 60,
  },
  buttonMain: {
    flexDirection: 'row',
    backgroundColor: '#6A0DAD',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonSecondary: {
    flexDirection: 'row',
    backgroundColor: '#8B008B',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    letterSpacing: 2,
  },
});