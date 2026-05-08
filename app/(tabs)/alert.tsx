import { View, Text, StyleSheet } from 'react-native';

export default function AlertScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🛡️ Acompañamiento activo</Text>
      <Text style={styles.subtext}>Aquí irá la ubicación en tiempo real y la videollamada.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E004F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: '#E6E6FA',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 14,
    color: '#D8BFD8',
  },
});