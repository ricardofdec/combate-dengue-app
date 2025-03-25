import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function ReportScreen() {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    Alert.alert('Denúncia enviada!', `Local: ${location}\nDescrição: ${description}`);
    setLocation('');
    setDescription('');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Denunciar Foco de Dengue</Text>

      <TextInput
        placeholder="Localização"
        value={location}
        onChangeText={setLocation}
        style={{ borderBottomWidth: 1, marginBottom: 12 }}
      />

      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
        style={{ borderWidth: 1, marginBottom: 12, height: 80, textAlignVertical: 'top' }}
      />

      <Button title="Enviar denúncia" onPress={handleSubmit} />
    </View>
  );
}
