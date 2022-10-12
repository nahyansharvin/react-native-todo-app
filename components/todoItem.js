import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        color: '#003061',
        padding: 16,
        marginTop: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 12 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }
});