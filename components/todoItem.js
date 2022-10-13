import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (

        <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableOpacity style={styles.icon} onPress={() => pressHandler(item.key)}>
                <MaterialIcons name="delete" size={30} color="#003061" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        marginTop: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 12 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    text: {
        maxWidth: '85%',
        margin: 4,
        color: '#003061',
        fontSize: 18,
    },
    icon: {
        padding: 3,
        borderRadius: 3,
        backgroundColor: '#dfe3e8',
        alignItems: 'center',
        justifyContent: 'center',
    }
});