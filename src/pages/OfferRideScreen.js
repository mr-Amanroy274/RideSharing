import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function OfferRideScreen({navigation}) {
  const [response, setResponse] = useState(true)
  
  const owns = () =>{
    setResponse(true)
    navigation.navigate('LicenseRegistration')

  }

  const doesNotOwn = () =>{
    setResponse(false)
    navigation.navigate('MapScreen')
  }

  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.textInputTitle}>Are you willing to offer ride?</Text>
      <View style={{flexDirection:'row',}}>
      <TouchableWithoutFeedback style={{width:'50%'}} onPress={owns}>
            <View style={[styles.customButtom,styles.textInputTitle]}>
              <Text style={[styles.buttonText]}>Yes</Text>
            </View>
    </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={{width:'50%'}} onPress={doesNotOwn} >
            <View style={[styles.customButtom,styles.textInputTitle,{backgroundColor:'red'}]}>
              <Text style={[styles.buttonText]}>No</Text>
            </View>
    </TouchableWithoutFeedback>
    </View>
    <StatusBar backgroundColor='#00FF66' barStyle='light-content' animated={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButtom: {
    backgroundColor: "#00FF66",
    width: '40%',
    height: 50,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOpacity: 0.6,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin:10
  },
  textInputTitle: {
    fontSize: 26,
    margin: 20,
  }
});
