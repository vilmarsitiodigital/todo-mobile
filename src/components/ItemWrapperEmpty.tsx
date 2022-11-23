import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import clipboardImg from '../assets/icons/clipboard/clipboard.png';

export function ItemWrapperEmpty() {
  return (
    <View style={styles.container}>
      <Image source={clipboardImg} />
      <Text style={styles.textOne}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textTwo}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },

  textOne: {
    marginTop: 16,
    color: '#808080',
    fontFamily: 'Inter_700Bold',
  },

  textTwo: {
    color: '#808080',
    fontFamily: 'Inter_400Regular',
  }
});