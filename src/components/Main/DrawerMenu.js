import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class DrawerMenu extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f03'}}>
                <Text>Menu</Text>
                <TouchableOpacity>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Go to ChangeInfor</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
