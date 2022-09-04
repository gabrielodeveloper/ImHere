import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {

  const participants = [
    {
      id: '1',
      name: 'Gabriel'
    },
    
    {
      id: '2',
      name: 'Rodrigo'
    },

    {
      id: '3',
      name: 'Mayk'
    },

    {
      id: '4',
      name: 'Diego'
    },
    ];

  function handleParticipantAdd() {
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome dos participantes"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item.id}
        renderItem={({item }) => (
          <Participant key={item.id} name={item.name} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}