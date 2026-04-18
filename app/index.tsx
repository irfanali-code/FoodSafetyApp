import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Safety App</Text>
      <Text>This is my clean, from-scratch home screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the view take up the whole screen
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    backgroundColor: '#ffffff', // Simple white background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});