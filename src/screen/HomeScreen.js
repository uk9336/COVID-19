import React, { Component, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import axios from 'axios';
import * as dateInfo from '../common/DateInfo'
const screenWidth = Dimensions.get("window").width;
const commonStyles = require('../styles/CommonStyles')
const col = require('../common/color')
// Component
import BarChartComponent from '../components/BarChartComponent';
import TitleComponent from '../components/TitleComponent';
import LocationComponent from '../components/LocationComponent'
// xml
const converter = require("xml-js");
var parseString = require("react-native-xml2js").parseString;
// Splash
import SplashScreen from 'react-native-splash-screen'
// Api
import * as baseApi from '../common/BaseApi';


/**
 * 코로나 현황 조회 화면
 */
export default class MainScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000)

        this.callApi(dateInfo.getToday());
    }

    constructor() {
        super();
        this.state = {
            city: [],   // 지역 리스트
            incDec: [], // 확진자 수
        }

    }

    // 공공데이터 API 호출
    callApi = async () => {
        console.log('ApiCall')
        // 지역별 데이터
        axios.get(
            'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey='
            + baseApi.baseUrl
            + '&pageNo=1'
            + '&numOfRows=10'
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
                // setState
                this.setState({
                    city: cityList,
                    incDec: incDecList,
                })
            })
            .catch((error) => {
                callApi(dateInfo.getToday());
            })
    }

    render() {
        return (
            <SafeAreaView style={commonStyles.container} >
                <ScrollView>
                    <StatusBar backgroundColor={col.darkGray} />
                    <TitleComponent />
                    <View style={commonStyles.space_black} />
                    <View style={commonStyles.space_black} />
                    <BarChartComponent incDec={this.state.incDec} />
                    <LocationComponent city={this.state.city} />
                    <View style={commonStyles.space_black} />
                </ScrollView>
            </SafeAreaView >
        );
    }
}