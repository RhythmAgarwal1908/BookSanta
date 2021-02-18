import React from 'react'
import {Text, View,TouchableOpacity, Flatlist,} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import {listItem} from 'react-native-elements' 
import MyHeader from '../components/MyHeader'
export default class Bookdonatescreen extends Component{
    constructor(){
        super()
        this.state={
        requestedbooklist:[]

        }
        this.requestref=null
    }
    getRequestedbookList=()=>{
this.requestref=db.collection('bookrequest').onSnapshot((snapshot)=>{
    var requestedbooklist=snapshot.docs.map(document=>document.data())
    this.setState({
        requestedbooklist:requestedbooklist
    });

})
  
}
componentdidMount(){
this.getRequestedbookList()
}
componentWillUnmount(){
    this.requestref()

}
keyExtractor=(item,index)=>index.toString()
renderItem=({item,i})=>{
    return(
        <listItem key={i} title={item.book_name} subtitile={item.reason_to_request} titleStyle={{color:'black',fontWeight:"bold"}} rightElement={<TouchableOpacity style={styles.button}>
            <Text style={{color:'#ffff'}}>
View
            </Text>
                </TouchableOpacity>} bottomDivider/>
    )
}
render(){
return(
    <View style={{flex:1}}>
        <MyHeader title='Donate Books' navigation={this.props.navigation}/>
    <View style={{flex:1}}>
{
    this.state.requestedbooklist.length===0?(
    <View style={styles.subContainer}>
        <Text style={{fontSize:20}} > List Of all requested Books</Text></View>
        ):(<Flatlist keyExtractor={this.keyExtractor} data={this.state.requestedbooklist} renderItem={this.renderItem}/>)}
        </View>
        </View>
        
    )
    }
}
const styles = StyleSheet.create({ 
    subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' }, 
    button:{ width:100, height:30, justifyContent:'center', alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8 } } })
