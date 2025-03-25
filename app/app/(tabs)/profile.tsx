import { View, Text } from 'react-native';
import React from 'react';

const locais = ['UBS Central', 'UBS Vila Nova', 'Posto de Saúde Jardim Florido'];

export default function ProfileScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Vacinação contra a Dengue</Text>
      <Text>A vacina é importante para proteger contra formas graves da doença.</Text>
      <Text style={{ marginTop: 16, fontWeight: 'bold' }}>Locais para vacinar:</Text>
      {locais.map((lugar, index) => (
        <Text key={index}>• {lugar}</Text>
      ))}
    </View>
  );
}
