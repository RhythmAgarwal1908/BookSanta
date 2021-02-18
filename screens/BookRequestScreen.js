import React from 'react'
import {Text, View,TouchableOpacity, Flatlist, Alert, KeyboardAvoidingView, TextInput,} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/MyHeader'

export default class BookRequestScreen extends Component{
    constructor(){
        super()
        this.state={
        userID:firebase.auth().currentUser.email,
        book_name:'',
        reason_to_request:''
        }
    }
    createUniqueID(){
        return Math.random().toString(36).substring(7)
    }
    addRequest=(book_name,reason_to_request)=>{
var user_ID=this.state.userID
var randomrequestID=this.createUniqueID()
db.collection('bookrequest').add({"User_ID":user_ID,"book_name":book_name,'reason_to_request':reason_to_request, 'request_Id':randomrequestID})
this.setState({
    book_name:'',
    reason_to_request:''
})                      
return Alert.alert("Book Requested Succesfully")
    }
    render(){
return(
    <View style={{flex:1}}>
<MyHeader title='Request Books' navigation={this.props.navigation}/>
<KeyboardAvoidingView style={styles.keyBoardStyle}>
<TextInput style={styles.formTextInput} placeholder={"Enter Book Name"} onChangeText={(text)=>{this.setState({book_name:text})}} value={this.state.book_name}/>
<TextInput style={[styles.formTextInput,{height:300}]} multiline numberOfLines={8} placeholder={"Why do you need the Book"} onChangeText={(text)=>{this.setState({reason_to_request:text})}} value={this.state.reason_to_request}/>
<TouchableOpacity style={styles.button} onPress={()=>{this.addRequest(this.state.bookName,this.state.reasonToRequest)}} > 
<Text>Request</Text> 
</TouchableOpacity>
</KeyboardAvoidingView>
    </View>
)
    }
}
const styles = StyleSheet.create({
keyBoardStyle : { flex:1, alignItems:'center', justifyContent:'center' }, 
formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, 
button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )