import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, FlatList, StyleSheet, StatusBar, Dimensions } from 'react-native';
import axios from 'axios';

const screenWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit";

// xml
const converter = require("xml-js");
var parseString = require("react-native-xml2js").parseString;


const DetailScreen = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    var apiKey = '8AGvK4G3WZpiMp1BW1S6oFQ%2F7xKf3zxlB3d6r6LRXslgH8Q7eJUSnP8%2FKd1BEpaQyieYG2aUbXiNzCW%2Ba0%2Bwaw%3D%3D'
    var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=' + apiKey + '&pageNo=1&numOfRows=10&startCreateDt=20220417&endCreateDt=20220417'

    const getData = () => {
        setLoading(true);
        axios.get(url)
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
        getData();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            { <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.seq)}
            />}
            {/* <Text>{asd}</Text> */}
            {/* <LineChart
                data={sample}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            /> */}
        </SafeAreaView>
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