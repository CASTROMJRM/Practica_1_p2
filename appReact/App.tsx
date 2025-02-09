import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./components/Login"

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>{/*Aqui va el componente */}
      <StatusBar style="auto" />
    </View>
  );
}

const colors = {
  background: "#1E293B",  // Azul oscuro para el fondo principal
  card: "#334155",        // Azul grisáceo para la tarjeta de login
  inputBackground: "#475569", // Color de fondo para los inputs
  inputBorder: "#64748B",  // Borde sutil para los inputs
  button: "#3B82F6",       // Azul vibrante para el botón de login
  buttonHover: "#2563EB",  // Azul más oscuro al pasar el mouse
  text: "#F1F5F9",         // Texto en blanco grisáceo
  placeholder: "#CBD5E1",  // Color de texto para los placeholders
  error: "#EF4444"         // Rojo para mensajes de error
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
