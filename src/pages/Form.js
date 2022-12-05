import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


{/* Phone number chai props bata liga ani autofill hana*/}

export default function Test({navigation}) {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear())
  const [name, setName] = useState(null)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [email, setEmail] = useState(null)

  const onChange = (event,selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate)

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + tempDate.getMonth() + '/' + tempDate.getFullYear()
    setText(fDate)
  }

  const showMode = (currentMode) =>{
    setShow(true);
    setMode(currentMode);
  }

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  const checkName= () => {
    if (name){
      let formattedName = name.split(' ')
    if(formattedName.length >= 2){
      formattedName.map((element) =>{
        console.log(element)
        if (element.length < 3){
            setNameError(true)
        }
      })
    }
    else{
    setNameError(false)
    }
  }
  else{
    setNameError(true)
  }
    }

  const checkEmail = () =>{
   let  valid = validateEmail(email)
    if (!valid) {
      console.log(valid)
      setEmailError(false)
    }else{
      setEmailError(false)
    }
  }

  const validateInput =() => {
     checkEmail()
     checkName()

     if(checkEmail && checkName){
      navigation.navigate('VehicleOption');
     }

    }
    

  return (
      <SafeAreaView style={styles.container}>
      <View style={{width:'80%'}}>
        <Text style={styles.textInputTitle}>Name<Text style={{color:'red'}}> *</Text></Text>
        <TextInput style={styles.textInput} autoCapitalize='words' onChangeText={setName}></TextInput>
        {nameError && <Text style={styles.textError}>Enter a valid Name</Text>}
      </View>
      <View style={{width:'80%'}}>
        <Text style={styles.textInputTitle}>Phone</Text> 
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View style={{width:'80%'}}>
        <Text style={styles.textInputTitle}>Current Address<Text style={{padding:3,color:'red'}}> *</Text></Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View style={{width:'80%'}}>
        <Text style={styles.textInputTitle}>Email</Text>
        <TextInput style={styles.textInput} onChangeText={setEmail}></TextInput>
        {emailError && <Text style={styles.textError}>Enter a valid Email</Text>}
      </View>
      <View style={{width:'80%'}}>
        <Text style={styles.textInputTitle}>Birth Date<Text style={{color:'red'}}> *</Text></Text>
        <TouchableOpacity  style={[styles.textInput,{width:'100%',height:50,borderBottomWidth:1,paddingTop:10}]} onPress={() => showMode()}><Text style={styles.date}>{text}</Text></TouchableOpacity>
        {show && (
        <DateTimePicker
          testID = 'DatePicker'
          value = {date}
          mode = {mode}
          is24Hours = {true}
          display = 'default'
          onChange = {onChange}
        />
      )}
      </View>
      <TouchableWithoutFeedback style={{width:'80%'}} onPress={validateInput}>
            <View style={[styles.customButtom,styles.textInputTitle]}>
              <Text style={[styles.buttonText]}>Submit</Text>
            </View>
    </TouchableWithoutFeedback>
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  customButtom: {
    backgroundColor: "#00FF66",
    width: '80%',
    height: 50,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight:'400'
  },
  textInput: {
    paddingBottom: 10,
    paddingLeft: 15,
    borderBottomColor: "#e3bb9a",
    borderBottomWidth: 1,
    width: "100%",
    fontSize: 18,
  },
  textInputTitle: {
    fontSize: 18,
    marginTop: 20,
    color: "#e3bb9a",
  },
  date:{
    color: "#e3bb9a",
    fontSize: 18,
  },
  textError:{
    fontSize : 12,
    padding:10,
    color:'red'
  }
});
