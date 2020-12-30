import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = (props) => {
    return (
        <View style={styles.headerView}>
            <Ionicons
                style={{ paddingLeft: 10 }}
                name="md-menu"
                size={30}
                color="white"
                onPress={props.openDrawer}
            />
            <Text style={styles.headerText}>{props.title}</Text>
            <Text>      </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: Platform.OS === 'android' ? "blue" : 'white',
        marginTop: 25,
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Platform.OS === 'android' ? "white" : 'blue',
        alignItems: "center",
        textTransform: "uppercase",
    }
})

export default CustomHeader;