import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Page extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: 'cabbage'
        }
    }
    render() {
        return (
            <View style={{flexDirection: 'column', height: 150}}>
                <Text style={{flex: 1, color: 'red'}}>{this.state.user}</Text>
                <Text style={{flex: 2, color: 'yellow'}}>{this.state.user}</Text>
                <Text style={{flex: 3}}>{this.state.user}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default Page;

