import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Task } from './TasksList';

interface IProps {
  tasks: Task[]
}

export function TodoCount({ tasks }: IProps) {

  return (
    <View style={styles.container}>
      <View style={styles.boxLabel}>
        <Text style={styles.taskTextLabel}>Criadas</Text>
        <Text style={styles.taskTextLabelCheck}>
          {tasks.length}
        </Text>
      </View>
      <View style={styles.boxLabel}>
        <Text style={styles.taskTextLabelDone}>Concluídas</Text>
        <Text style={styles.taskTextLabelCheck}>
          {tasks.filter((task) => task.done).length}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 32,
  },
  boxLabel: {
    flexDirection: 'row',
  },
  taskTextLabel: {
    color: '#4EA8DE',
    fontFamily: 'Inter_700Bold',
    marginRight: 8,
  },
  taskTextLabelDone: {
    color: '#8284FA',
    fontFamily: 'Inter_700Bold',
    marginRight: 8,
  },
  taskTextLabelCheck: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 8,
    color: '#D9D9D9',
    fontFamily: 'Inter_700Bold',
  }
});