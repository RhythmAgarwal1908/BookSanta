import React, { Component } from 'react'
import {View, Text, TouchableOpacity,StyleSheet,TextInput, Alert,Modal, ScrollView, Keyboard, KeyboardAvoidingView} from 'react-native'
import  db from '../config'
import firebase from 'firebase'


export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            emailID:'',
            password:'',
            firstname:'',
            lastname:'',
            address:'',
            contact:'',
            confirmPassword:'',
            isModalVisible:'false'
        }
    }
    userLogin=(emailID,password)=>{
firebase.auth().signInWithEmailAndPassword(emailID,password).then(()=>{
    this.props.navigation.navigate('Donate')
})
.catch((error)=>{
var errorCode=error.code;
var errorMessage=error.message;
return Alert.alert(errorMessage)
})
}
    
userSignUp=(emailID,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailID,password).then(()=>{
     return(
         Alert.alert('User Added SuccessFully')
     )   
    })
    .catch((error)=>{
    var errorCode=error.code;
    var errorMessage=error.message;
    return Alert.alert(errorMessage)
    })
    }

showModal=()=>{
    return(
        <Modal
        animationType='fade'
        transparent={true}
        visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
<ScrollView style={{width:'100%'}}>
<KeyboardAvoidingView style={styles.keyboardAvoidingView}>
<Text style={styles.modalTitle}>
    Registration
</Text>
<TextInput style={styles.fontTextInput} placeholder={"First Name"} maxLength={8} onChangeText={(text)=>{
    this.setState({firstname:text})
}}/>
<TextInput style={styles.fontTextInput} placeholder={"Last Name"} maxLength={8} onChangeText={(text)=>{
    this.setState({lastname:text})
}}/>
<TextInput style={styles.fontTextInput} placeholder={"Contact No."} maxLength={10} keyboardType={'numeric'} onChangeText={(text)=>{
    this.setState({contact:text})
}}/>
<TextInput style={styles.fontTextInput} placeholder={"Address"} multiline={true} onChangeText={(text)=>{
    this.setState({address:text})
}}/>
<TextInput style={styles.fontTextInput} placeholder={"E-mail Address"} keyboardType={'email-address'} onChangeText={(text)=>{
    this.setState({emailID:text})
}}/>
<TextInput style={styles.fontTextInput} placeholder={"Password"} secureTextEntry={true} onChangeText={(text)=>{
    this.setState({emailID:text})
}}/>
<TextInput style={styles.fontTextInput} placeholder={"Confirm Password"} secureTextEntry={true
} onChangeText={(text)=>{
    this.setState({emailID:text})
}}/>
<View>
    <TouchableOpacity style={styles.registerbutton} onPress={()=>{
            this.userSignUp(this.state.emailID,this.state.password,this.state.confirmPassword)
            }}>
<Text>Register</Text>
    </TouchableOpacity>
</View>

<View>
    <TouchableOpacity style={styles.registerbutton} onPress={()=>this.setState({isModalVisible:false})}>
<Text>Cancel</Text>
    </TouchableOpacity>
</View>

</KeyboardAvoidingView>
</ScrollView>
        </View>
        </Modal>
        
        )
    }
render(){
        return(
            <View style ={styles.container}>
            {this.showModal()}
            <View style={styles.buttonContainer}>
            <TextInput style={styles.logInBox} 
            placeholder="Enter your Email Address" 
            placeholderTextColor="black" 
            keyboardType="email-address" 
            onChangeText={(text)=>{
            this.setState({
            emailID:text
            })
            }}
            />
            
            <TextInput style={styles.logInBox} 
            placeholder="Enter your Password" 
            secureTextEntry={true} 
            onChangeText={(text)=>{
            this.setState({
            password:text
            })
            }}
            />

            <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
            onPress={()=>{
            this.userLogin(this.state.emailID,this.state.password)
            }}
            >
                <Text style={styles.buttonText}>Login</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={()=>
            this.setState({isModalVisible:true})    
            }
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
        }
}
const styles = StyleSheet.create({ 
container:{ flex:1, backgroundColor:'#F8BE85' }, 
profileContainer:{ flex:1, justifyContent:'center', 
alignItems:'center'}, 
title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' }, 
loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 }, 
button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, 
backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, }, 
buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 }, 
buttonContainer:{ flex:1, alignItems:'center' },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle :{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:30,
    color:'#ff5722',
    margin:50
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  registerButton:{
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:30
  },
  registerButtonText:{
    color:'#ff5722',
    fontSize:15,
    fontWeight:'bold'
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
 
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  }})