import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
  return (
    <View
      style={{
        marginHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        backgroundColor: '#262626',
        marginBottom: 8,
      }}
    >
      {children}
    </View>
  )
}