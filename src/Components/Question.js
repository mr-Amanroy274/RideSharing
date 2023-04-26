import { Text } from '@rneui/themed'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'


const Question = ({question, ownsPrivateVehicle,navigation, signUp, lastQuestion}) => {
  return (
    <>
      <View style={styles.questionSet}>
        <Text style={styles.question}>{question}</Text>
        <View style={styles.buttonContainer}>

          <TouchableOpacity 
            style={styles.button} 
            onPress={()=>{
              ownsPrivateVehicle(true)
              lastQuestion?signUp:null
            }}
          >
            <Text style={[styles.buttonText, styles.yesText]}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.no]}
            onPress={()=> {
              if(!lastQuestion){
                console.log('signup function called')
              // signUp();
              
              navigation.navigate('Authenticated')
            }
            }}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    questionSet:{
      alignContent:'center',
      justifyContent:'center',
      paddingHorizontal:10,
      marginVertical: 30
    },
    question: {
      fontSize: 30,
      fontWeight: "800",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    button: {
      padding: 12,
      paddingHorizontal: 30,
      backgroundColor: "#00FF78",
      borderRadius: 12,
      elevation: 2,
    },
    buttonText: {
      fontWeight: "600",
      fontSize: 20,
      textAlign: "center",
      color: "white",
    },
    no: {
      backgroundColor: "red",
    },
    yesText: {
      color: "black",
    },
  });

export default Question