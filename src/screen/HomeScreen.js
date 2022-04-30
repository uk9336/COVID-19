import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, Button, SafeAreaView, FlatList, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as dateInfo from '../common/DateInfo'
const screenWidth = Dimensions.get("window").width;
import { LineChart, BarChart } from "react-native-chart-kit";

// xml
const converter = require("xml-js");
var parseString = require("react-native-xml2js").parseString;

import SplashScreen from 'react-native-splash-screen'

export default class MainScreen extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000)

        dateInfo.days7();
        callApi(dateInfo.getToday());
    }

    constructor() {
        super();
        this.state = {
            date: dateInfo.getToday(),
            list: [],
            city: [],
            incDec: [],
            decideCnt: []
        }

    }


    render() {

        callApi = (param) => {
            // 지역별 데이터
            var apiKey = '8AGvK4G3WZpiMp1BW1S6oFQ%2F7xKf3zxlB3d6r6LRXslgH8Q7eJUSnP8%2FKd1BEpaQyieYG2aUbXiNzCW%2Ba0%2Bwaw%3D%3D'
            var urlSub = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey='
                + apiKey
                + '&pageNo=1'
                + '&numOfRows=10';
            var urlSub2 = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey='
                + '%2FBaPnDu1M3YBVRNd3uRoaQTLrU1kt%2BuwdHk4Vl4Wf6F8N6n2pnOmoUNd7VQMW5YWaBv5G50KTJO3c5fYAZo%2FCw%3D%3D'
                + '&pageNo=1'
                + '&numOfRows=10';
            axios.get(urlSub + '&' + 'startCreateDt=' + (dateInfo.days7()) + '&endCreateDt=' + dateInfo.days1())
                .then((res) => {
                    const all = res.data
                    const result = res.data.response.body.items.item
                    const asd = res.data.response.body.items.item.gubun
                    console.log("전체")
                    // console.log(result)
                    // console.log(result)
                    this.setState({
                        list: result,
                        // city: result.gubun,
                        // count: result.incDec
                    });
                    var cityList = [];
                    var incDecList = [];
                    var decideCntList = [];
                    result.forEach((i) => {
                        // decideCntList.push(i.decideCnt)
                        if (i.gubun == "합계") {
                            incDecList.push(i.incDec)
                        }
                    })
                    this.setState({
                        // city: cityList,
                        incDec: incDecList,
                        // decideCnt: decideCntList
                    })
                    // console.log(this.state.incDec)
                })
                .catch((error) => {
                    callApi(dateInfo.getToday());
                    // console.log(error)
                })
            console.log('-----')
            console.log(dateInfo.days7())
            console.log(dateInfo.days1())
            console.log('-----')
        }

        leftClick = () => {
            var dateNumber = Number(this.state.date);
            dateNumber--;
            this.setState({
                date: dateNumber
            })

            callApi(dateNumber);
        }

        rightClick = () => {
            var dateNumber = Number(this.state.date);
            dateNumber++;
            this.setState({
                date: dateNumber
            })

            callApi(dateNumber);
        }

        /**
         * LineChart
         */
        const chartConfig = {
            backgroundGradientFrom: "#2C2929",
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: "#2C2929",
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 3, // optional, default 3
            barPercentage: 0.5,
        };
        const sample = {
            labels: dateInfo.yesterday(),
            datasets: [
                {
                    data: this.state.incDec.reverse(),
                    strokeWidth: 3 // optional
                }
            ],
            legend: ["COVID-19"] // optional
        };


        return (
            < SafeAreaView style={styles.container} >
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.container, { padding: 20, flexDirection: 'row', width: '100%' }} >
                        {/* <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity style={styles.iconbutton} onPress={leftClick}>
                                <Image
                                    source={require('../icon/ic_arrow_left.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Text style={{ color: 'black' }}>{this.state.date}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={styles.iconbutton} onPress={rightClick}>
                                <Image
                                    source={require('../icon/ic_arrow_right.png')}
                                />
                            </TouchableOpacity>
                        </View> */}
                        <View>
                            <Text style={styles.title}>코로나 발생 현황 조회</Text>
                        </View>
                    </View>
                    <BarChart
                        data={sample}
                        width={screenWidth}
                        height={300}
                        chartConfig={chartConfig}
                        fromZero={true}
                        showBarTops={true}
                        showValuesOnTopOfBars={true}
                        withHorizontalLabels={false}
                    />
                </View>
            </SafeAreaView >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2C2929"
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
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
    },
    iconbutton: {
        margin: 10,
    },
});
