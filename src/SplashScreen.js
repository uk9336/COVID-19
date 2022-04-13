import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Splash</Text>
                <Button onPress={() => this.goHomeScreen()} title='Go' />
            </View>
        );
    }

    goHomeScreen() {
        this.props.navigation.navigate('HomeScreen')
    }
}