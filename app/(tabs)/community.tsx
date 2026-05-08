import { View, Text, StyleSheet } from 'react-native';

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🤝 Red Apoyo</Text>
      <Text style={styles.subtext}>Aquí estará la comunidad de mujeres, conductoras y grupos de ayuda.</Text>
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
    textAlign: 'center',
  },
});