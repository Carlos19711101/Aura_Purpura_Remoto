import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Phone from './phone';

const slides = [
  {
    title: 'Bienvenida a Aura Púrpura',
    subtitle: 'Tu escudo personal, siempre a tu lado.',
    icon: '🛡️',
  },
  {
    title: 'Acompañamiento en tiempo real',
    subtitle: 'Activa una alerta y tus contactos de confianza te acompañarán.',
    icon: '📍',
  },
  {
    title: 'Red de apoyo entre mujeres',
    subtitle: 'Comunidad, consejos y conductoras verificadas.',
    icon: '🤝',
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/phone');
    }
  };

  const slide = slides[currentSlide];

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{slide.icon}</Text>
      <Text style={styles.title}>{slide.title}</Text>
      <Text style={styles.subtitle}>{slide.subtitle}</Text>
      <TouchableOpacity style={styles.button} onPress={Phone}>
        <Text style={styles.buttonText}>
          {currentSlide < slides.length - 1 ? 'Siguiente' : 'Comenzar'}
        </Text>
      </TouchableOpacity>
      <View style={styles.dots}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentSlide && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E004F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  icon: { fontSize: 80, marginBottom: 30 },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E6E6FA',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#D8BFD8',
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 25,
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  dots: { flexDirection: 'row' },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    marginHorizontal: 5,
  },
  dotActive: { backgroundColor: '#9370DB' },
});