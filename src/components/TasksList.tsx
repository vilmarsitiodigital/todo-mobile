import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ItemWrapper } from './ItemWrapper';

import checkIcon from '../assets/icons/check/check.png';
import circleIcon from '../assets/icons/circle/circle.png';
import trashIcon from '../assets/icons/trash/trash.png';
import { ItemWrapperEmpty } from './ItemWrapperEmpty';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<ItemWrapperEmpty />}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                >
                  {item.done ? (
                    <Image source={checkIcon} />
                  ) : (
                    <Image source={circleIcon} />
                  )}
                </View>

                <Text
                  style={item.done ? styles.taskTextDone : styles.taskText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 12, width: 48 }}
              onPress={() => removeTask(item.id)}
            >
              <Image source={trashIcon} />
            </TouchableOpacity>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskText: {
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
    marginLeft: 8,
  },
  taskTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_400Regular',
    marginLeft: 8,
  }
})