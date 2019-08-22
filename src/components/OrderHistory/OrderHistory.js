
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class OrderHistory extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){
    const {navigate} = this.props.navigation;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>OrderHistory Screen</Text>
        </View>
    );
  }
}
