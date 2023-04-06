import React from 'react'
import { StyleSheet, View } from 'react-native'

const SafeAreaView = ({children}) => {
  return (
    <View style={styles.SafeArea}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1
    }
})

export default SafeAreaView