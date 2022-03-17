import React from 'react'
import { View, StyleSheet } from 'react-native'

const layout = ({ children }) => { 
    return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#E5E5E5",
        padding: 20,
        flex: 1,
    },
});

export default layout;