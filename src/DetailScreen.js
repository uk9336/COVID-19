import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';

export default class DetailScreen extends Component {

    state = {
        data: {}
    }

    render() {
        
        fetchData()
        
        const renderItem = ({ item }) => (
            <Item title={item.title} />
        );
  
        return (
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem = {renderItem}
                    keyExtractor = {item => item.id}
                />
            </SafeAreaView>
        );
    }
}
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
            console.log(data)
            var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
            var x = xmlDoc.getElementsByTagName("item")

            for (var i = 0; i < x.length; i++) {
                // console.log(x[i].childNodes);
                var nodeList = x[i].childNodes
                

                for (var j = 0; j < nodeList.length; j++) {
                    var item = nodeList[j];

                    if (item.firstChild) {
                        console.log(item.nodeName + " : " + item.childNodes[0].nodeValue);
                    }
                }
            }

            return xmlDoc;
        })
        .catch(error => {
            console.log(error);
        })
}
const DATA = [
    {
        id:1,
        title:'asd'
    }
];
  
/**
 * Item
 */
const Item = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
)