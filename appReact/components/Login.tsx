import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TouchableOpacity style={styles.socialButtonFacebook}>
        <Text style={styles.socialText}>Continuar con Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonGoogle}>
        <Text style={styles.socialText}>Continuar con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonApple}>
        <Text style={styles.socialTextApple}>Continuar con Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>O</Text>

      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} disabled={!email || !password}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.keychain}>Usar el Llavero de iCloud</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding:100,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  socialButtonFacebook: {
    backgroundColor: "#3b5998",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  socialButtonGoogle: {
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  socialButtonApple: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  socialText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialTextApple: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "#aaa",
    textAlign: "center",
    marginVertical: 10,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    opacity: 0.7,
  },
  loginButtonText: {
    color: "#888",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 15,
  },
  keychain: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 5,
  },
});

