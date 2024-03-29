import React, {Component} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';

const {width, height} = Dimensions.get('window');

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'home'};
  }
  openDrawerMenu() {
    const {open} = this.props;
    open();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: height / 8}}>
          <TouchableOpacity onPress = {this.openDrawerMenu.bind(this)}>
            <Text>TopBar</Text>
          </TouchableOpacity>
        </View>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            onPress={() => this.setState({selectedTab: 'home'})}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'contact'}
            title="Contact"
            onPress={() => this.setState({selectedTab: 'contact'})}>
            <Contact />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title="Cart"
            onPress={() => this.setState({selectedTab: 'cart'})}>
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="Search"
            onPress={() => this.setState({selectedTab: 'search'})}>
            <Search />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
