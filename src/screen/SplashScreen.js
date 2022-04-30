import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, Button, SafeAreaView, FlatList, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';

const screenWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit";

// xml
const converter = require("xml-js");
var parseString = require("react-native-xml2js").parseString;

import Splash from 'react-native-splash-screen'

export default class SplashScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            Splash.hide();
        }, 1000)
    }

    // constructor() {
    // super();
    // this.state = {
    //     date: getToday(),
    //     loading: true,
    //     list: [],
    // };
    // }
    // state = {
    //     date: '',
    //     list: []
    // }


    callApi = (param) => {

        console.log(param)

        console.log('asdasdasd')
        var url1 = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=%2FBaPnDu1M3YBVRNd3uRoaQTLrU1kt%2BuwdHk4Vl4Wf6F8N6n2pnOmoUNd7VQMW5YWaBv5G50KTJO3c5fYAZo%2FCw%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315'
        var apiKey = '8AGvK4G3WZpiMp1BW1S6oFQ%2F7xKf3zxlB3d6r6LRXslgH8Q7eJUSnP8%2FKd1BEpaQyieYG2aUbXiNzCW%2Ba0%2Bwaw%3D%3D'
        var urlSub = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey='
            + apiKey
            + '&pageNo=1'
            + '&numOfRows=10';
        var urlSub2 = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey='
            + '%2FBaPnDu1M3YBVRNd3uRoaQTLrU1kt%2BuwdHk4Vl4Wf6F8N6n2pnOmoUNd7VQMW5YWaBv5G50KTJO3c5fYAZo%2FCw%3D%3D'
            + '&pageNo=1'
            + '&numOfRows=10';

        // console.log(param)
        // this.loading = true;
        axios.get(urlSub2 + '&' + 'startCreateDt=' + param + '&endCreateDt=' + '20224020')
            // axios.get(url1)
            // axios.get(url)
            .then((response) => {
                const result = response.data.response.body.items.item
                console.log(result)
                this.setState({
                    list: result
                }, () => {
                    console.log('1231231')
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    leftClick = () => {
        // var dateNumber = Number(this.state.date);
        // dateNumber--;
        // this.api(dateNumber);
    }

    rightClick = () => {
        // var dateNumber = Number(this.state.date);
        // dateNumber++;
        // this.api(dateNumber);
    }



    render() {

        // this.callApi('20220418')

        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.container, { padding: 20, flexDirection: 'row', width: '100%' }} >
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity style={styles.iconbutton} onPress={this.leftClick}>
                                <Image
                                    source={require('../icon/ic_arrow_left.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            {/* <Text style={{ color: 'black' }}>{this.state.date}</Text> */}
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={styles.iconbutton} onPress={this.rightClick}>
                                <Image
                                    source={require('../icon/ic_arrow_right.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <FlatList style={{ marginBottom: 150 }}
                        data={this.state.list}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.seq)}
                    /> */}
                </View>
            </SafeAreaView >
        );
    }
}


/**
 * Item
 */
const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.tv}>{item.deathCnt}</Text>

        {/* <Text style={styles.tv}>{item.gubun}</Text> */}
        {/* <Text style={styles.tv}>{item.deathCnt}</Text> */}
        {/* <Text style={styles.tv}>{item.incDec}</Text> */}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#000000',
        padding: 10,
        marginVertical: 3,
        marginHorizontal: 16,
    },
    tv: {
        color: 'white'
    },
    title: {
        fontSize: 32,
    },
    iconbutton: {
        margin: 10,
    },
});


function getToday() {
    var d = new Date();
    var year = d.getFullYear();
    var month = ("0" + (1 + d.getMonth())).slice(-2);
    var day = ("0" + d.getDate()).slice(-2);

    return year + month + day;
}

