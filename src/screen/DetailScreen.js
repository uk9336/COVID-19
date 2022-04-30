import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, Button, SafeAreaView, FlatList, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';

const screenWidth = Dimensions.get("window").width;
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


// xml
const converter = require("xml-js");
var parseString = require("react-native-xml2js").parseString;

const DetailScreen = ({ navigation }) => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState('');

    var apiKey = '8AGvK4G3WZpiMp1BW1S6oFQ%2F7xKf3zxlB3d6r6LRXslgH8Q7eJUSnP8%2FKd1BEpaQyieYG2aUbXiNzCW%2Ba0%2Bwaw%3D%3D'
    var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey='
        + apiKey
        + '&pageNo=1'
        + '&numOfRows=10'
        + '&startCreateDt=' + getToday()
        + '&endCreateDt=' + getToday();
    var urlSub = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey='
        + apiKey
        + '&pageNo=1'
        + '&numOfRows=10';

    const getData = (param) => {
        console.log(param)
        setLoading(true);
        axios.get(urlSub + '&' + 'startCreateDt=' + param + '&endCreateDt=' + param)
            // axios.get(url)
            .then((response) => {
                const result = response.data.response.body.items.item
                console.log(result)
                setList(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        setDate(getToday())
        getData(getToday());
    }, []);


    const leftClick = () => {
        var dateNumber = Number(date);
        dateNumber--;
        setDate(String(dateNumber))
        getData(String(dateNumber));
    }

    const rightClick = () => {
        var dateNumber = Number(date);
        dateNumber++;
        setDate(String(dateNumber))
        getData(String(dateNumber));
    }


    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
}
export default DetailScreen;