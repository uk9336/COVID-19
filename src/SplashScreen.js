import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Splash from 'react-native-splash-screen'

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            Splash.hide();
        }, 1000)
    }

    render() {
        // setTimeout(() => {this.setState({timePassed: true})}, 5000)
        // this.goHomeScreen()

        return (
            <View>
                <Text style={{ fontSize: 30 }}>Splash</Text>
                <Button onPress={() => this.goHomeScreen()} title='GoHome' />
                <Button onPress={() => this.goDetailScreen()} title='GoDetail' />
            </View>
        );
    }

    goHomeScreen() {
        this.props.navigation.navigate('HomeScreen')
    }

    goDetailScreen() {
        this.props.navigation.navigate('DetailScreen')
    }
}