import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

export default function ProfileScreen() {
  // Estado para armazenar os dados do usuário
  const [userData, setUserData] = useState({
    nome: '',
    sobrenome: '',
    rg: '',
    cpf: '',
    email: '',
    telefone: '',
  });

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Função para buscar os dados do usuário na API
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get('https://sua-api.com/user/profile');
        setUserData(response.data);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados');
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  // Função para salvar os dados na API
  const handleSave = async () => {
    try {
      setLoading(true);
      await axios.put('https://sua-api.com/user/profile', userData);
      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      setIsEditing(false);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar os dados');
    } finally {
      setLoading(false);
    }
  };

  // Renderizar loading enquanto carrega os dados
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      {/* Campos do formulário */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={userData.nome}
        onChangeText={(text) => setUserData({ ...userData, nome: text })}
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={userData.sobrenome}
        onChangeText={(text) => setUserData({ ...userData, sobrenome: text })}
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        placeholder="RG"
        value={userData.rg}
        onChangeText={(text) => setUserData({ ...userData, rg: text })}
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={userData.cpf}
        onChangeText={(text) => setUserData({ ...userData, cpf: text })}
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })}
        editable={isEditing}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={userData.telefone}
        onChangeText={(text) => setUserData({ ...userData, telefone: text })}
        editable={isEditing}
      />

      {/* Botões de Editar e Salvar */}
      {isEditing ? (
        <Button title="Salvar" onPress={handleSave} color="#27ae60" />
      ) : (
        <Button title="Editar" onPress={() => setIsEditing(true)} color="#2980b9" />
      )}
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
