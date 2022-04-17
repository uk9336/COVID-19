import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, FlatList, StyleSheet, StatusBar, Dimensions } from 'react-native';
import axios from 'axios';

const converter = require("xml-js");
var parseString = require("react-native-xml2js").parseString;

const screenWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit";

const DATA = [
    {
        careCnt: '1',
        deathCnt: '11',
        decideCnt: '111',
    },
    {
        careCnt: '2',
        deathCnt: '22',
        decideCnt: '222',
    },
    {
        careCnt: '3',
        deathCnt: '33',
        decideCnt: '333',
    }
];


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

const DetailScreen = ({ navigation }) => {

    const [data, setData] = useState('')

    // const getAxios = () => {
    var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=%2FBaPnDu1M3YBVRNd3uRoaQTLrU1kt%2BuwdHk4Vl4Wf6F8N6n2pnOmoUNd7VQMW5YWaBv5G50KTJO3c5fYAZo%2FCw%3D%3D&pageNo=0&numOfRows=10&startCreateDt=20220410&endCreateDt=20220411';

    axios.get(url).then((response) => {
        const result = response.data
        // setData(result) 
        console.log(result)
    })
    // }
    // getAxios()


    useEffect(() => {
        // getData();
    });
    var i = 0;
    return (
        <SafeAreaView style={styles.container}>
            {/* <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.careCnt)}
            /> */}
            <LineChart
                data={sample}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </SafeAreaView>
    );
}
export default DetailScreen;
/**
 * Item
 */
const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Text>{item.careCnt}</Text>
        <Text>{item.deathCnt}</Text>
        <Text>{item.decideCnt}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});


// /**
//  * fetch
//  */
var DOMParser = require('xmldom').DOMParser;

function fetchData() {

    var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=Pxi1LhT%2FurofWToYgTNQ%2Bo3%2FyTxmtOuzIRh%2BErgjoZvDFcGjoqL%2BHKXZ5OtR3LKTbEzzPcxJDQe4hPxPPoBbPw%3D%3D&pageNo=0&numOfRows=10&startCreateDt=20220410&endCreateDt=20220411';
    return fetch(url)
        .then(response => response.text())
        // .then((responseText) => {
        //     parseString(responseText, (err, result) => {
        //         if (err !== null) {
        //             console.log(result)
        //         }
        //     })
        // })
        .then(data => {
            // console.log(data)
            var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
            var x = xmlDoc.getElementsByTagName("item")

            var json = ""
            parseString(data, function (err, result) {
                // console.log(JSON.stringify(result))
                json = JSON.stringify(result)
            })
            setData(json)
            console.log(data)




            for (var i = 0; i < x.length; i++) {
                // console.log(x[i].childNodes);
                var nodeList = x[i].childNodes
                for (var j = 0; j < nodeList.length; j++) {
                    var item = nodeList[j];

                    if (item.firstChild) {
                        // console.log(item.nodeName + " : " + item.childNodes[0].nodeValue);
                    }
                }
            }

            return xmlDoc;
        })
        .catch(error => {
            console.log(error);
        })
}