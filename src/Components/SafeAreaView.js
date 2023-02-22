import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

const SafeAreaView = ({children}) => {
  return (
    <View style={styles.SafeArea}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})

export default SafeAreaView