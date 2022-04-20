import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, Button, SafeAreaView, FlatList, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';

const screenWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit";

// xml
const converter = require("xml-js");
var parseString = require("react-native-xml2js").parseString;

// svg
// import SVGImg from './assets/ic_arrow_right.svg';
// import { SvgXml } from 'react-native-svg';


const DetailScreen = ({ navigation }) => {



    const [data, setData] = useState([]);
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
                setData(result)
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
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.container, { padding: 20, flexDirection: 'row', width: '100%' }} >
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.iconbutton} onPress={() => leftClick()}>
                            <Image
                                source={require('./icon/ic_arrow_left.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>{date}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.iconbutton} onPress={() => rightClick()}>
                            <Image
                                source={require('./icon/ic_arrow_right.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList style={{ marginBottom: 150 }}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item.seq)}
                />
            </View>
        </SafeAreaView >
    );
}
export default DetailScreen;



/**
 * Item
 */
const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.tv}>{item.gubun}</Text>
        <Text style={styles.tv}>{item.deathCnt}</Text>
        <Text style={styles.tv}>{item.incDec}</Text>
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

/**
 * LineChart
 */
const chartConfig = {
    backgroundGradientFrom: "#000000",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(226, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
const sample = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
    legend: ["COVID-19"] // optional
};


const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + month + day;
}
