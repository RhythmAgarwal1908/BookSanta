import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookRequestScreen from '../screens/BookRequestScreen'
import Bookdonatescreen from '../screens/Bookdonatescreen'
export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{screen:Bookdonatescreen,navigationOptions:{tabBarIcon:<Image source={require()} style={{width:20,height:20}}/>,tabBarlabel:"Donate Books"}},
    BookRequest:{screen:BookRequestScreen,navigationOptions:{tabBarIcon:<Image source={require()} style={{width:20,height:20}}/>,tabBarlabel:"Book Request"}
}
})