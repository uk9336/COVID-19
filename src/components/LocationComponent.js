import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const commonStyles = require('../styles/CommonStyles')

/**
 * 지역별 확진자 현황 컴포넌트
 * @param {city : 지역명 리스트} props 
 */
const LocationComponent = (props) => {
    return (
        <View style={styles.container_radius}>
            <View style={commonStyles.space} />
            <Text style={styles.title_location}>지역별 확진자 현황</Text>
            <View style={commonStyles.space} />
            {props.city.map((item, index) => (
                <View style={styles.item} key={index}>
                    <Text style={styles.tv}>{item.gubun}</Text>
                    <View style={styles.division_location}></View>
                    <Text style={styles.tv}>{item.incDec}</Text>
                </View>
            ))}
        </View>
    )
}
export default LocationComponent;

/**
 * StylesSheet
 */
const styles = StyleSheet.create({
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
});