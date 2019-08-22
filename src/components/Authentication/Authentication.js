
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Authentication extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){
    const {navigate} = this.props.navigation;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff0'}}>
            <Text style={{fontSize: 30}}>Authentication Screen</Text>
            <TouchableOpacity onPress={()=> navigate('Main')}>
              <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
