import React, { Component, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import axios from 'axios';
import * as dateInfo from '../common/DateInfo'
const screenWidth = Dimensions.get("window").width;
import { BarChart } from "react-native-chart-kit";

// xml
const converter = require("xml-js");
var parseString = require("react-native-xml2js").parseString;

import SplashScreen from 'react-native-splash-screen'

import * as baseApi from '../common/BaseApi';

/**
 * 코로나 현황 조회 화면
 */
export default class MainScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000)

        callApi(dateInfo.getToday());
    }

    constructor() {
        super();
        this.state = {
            date: dateInfo.getToday(),
            list: [],
            city: [], // 지역 리스트
            incDec: [], // 확진자 수
        }

    }


    render() {

        // 공공데이터 API 호출
        callApi = (param) => {
            // 지역별 데이터
            var urlSub = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey='
                + baseApi.baseUrl
                + '&pageNo=1'
                + '&numOfRows=10';
            axios.get(urlSub
                + '&startCreateDt=' + (dateInfo.ago6Day())
                + '&endCreateDt=' + dateInfo.ago1Day())
                .then((res) => {

                    // response data
                    const result = res.data.response.body.items.item

                    var cityList = [];
                    var incDecList = [];

                    result.forEach((i) => {
                        if (i.stdDay.indexOf(dateInfo.getMonth() + "월 " + dateInfo.getDay() + "일") != -1) {
                            cityList.push(i)
                        }
                        if (i.gubun == "합계") {
                            incDecList.push(i.incDec)
                        }
                    })
                    this.setState({
                        city: cityList,
                        incDec: incDecList,
                    })
                })
                .catch((error) => {
                    callApi(dateInfo.getToday());
                })
        }

        /**
         * LineChart
         */
        const chartConfig = {
            backgroundGradientFrom: "#1C1B1B",
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: "#1C1B1B",
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 3, // optional, default 3
            barPercentage: 0.5,
        };
        const sample = {
            labels: dateInfo.days7List(),
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
                <ScrollView>
                    <StatusBar backgroundColor="#2C2929" />
                    <View style={styles.container_radius}>
                        <View>
                            <Text style={styles.title}>코로나바이러스감염증-19</Text>
                            <View style={styles.space} />
                            <Text style={styles.date}>{dateInfo.getMonth() + "월 " + dateInfo.getDay() + "일 00:00 기준"}</Text>
                        </View>
                    </View>
                    <View style={styles.space_black} />
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
                    <View style={styles.container_radius}>
                        <View style={styles.space} />
                        <Text style={styles.title_location}>지역별 확진자 현황</Text>
                        <View style={styles.space} />

                        {this.state.city.map((item, index) => (
                            <View style={styles.item} key={index}>
                                <Text style={styles.tv}>{item.gubun}</Text>
                                <View style={styles.division_location}></View>
                                <Text style={styles.tv}>{item.incDec}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.space_black} />
                </ScrollView>
            </SafeAreaView >
        );
    }
}

/**
 * StyleSheet
 */
const styles = StyleSheet.create({
    space: {
        height: 15,
        backgroundColor: "#2c2929"
    },
    space_black: {
        height: 15,
        backgroundColor: "#1C1B1B"
    },
    container: {
        flex: 1,
        backgroundColor: "#1C1B1B"
    },
    item: {
        padding: 10,
        marginVertical: 3,
        marginHorizontal: 16,
        flexDirection: 'column',
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tv: {
        color: 'white',
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 32,
        width: '100%',
        textAlign: 'center',
        color: 'white'
    },
    iconbutton: {
        margin: 10,
    },
    container_radius: {
        backgroundColor: "#2c2929",
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 15,
        padding: 15,
        flex: 1,
        marginRight: 15,
    },
    title_location: {
        fontSize: 30,
        flex: 1,
        textAlign: 'center',
        color: 'white'
    },
    division_location: {
        width: 1,
        height: 30,
        backgroundColor: 'gray'
    },
    date: {
        fontSize: 13,
        flex: 1,
        color: 'gray',
        textAlign: 'right'
    }
});
