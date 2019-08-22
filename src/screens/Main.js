
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Main extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){
    const {navigate} = this.props.navigation;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f00'}}>
            <Text style={{fontSize: 30}}>Main Screen</Text>
            <TouchableOpacity onPress={() => navigate('Authentication')}>
              <Text>Go to Authentication</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
