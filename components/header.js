import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {  
        height: 90,
        paddingTop: 30,
        backgroundColor: '#7596F0'
    },
    title: {
        textAlign: 'center',
        color: '#374670',
        fontSize: 30,
        fontWeight: 'bold'
    }
});