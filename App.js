
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/index';

//hiding status bar
StatusBar.setHidden(true);

export default class App extends Component{
  render(){
    return <Navigation />;
  }
}
