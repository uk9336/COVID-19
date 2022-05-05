import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import * as dateInfo from '../common/DateInfo'
const commonStyles = require('../styles/CommonStyles')

/**
 * 타이틀 컴포넌트
 */
const TitleComponent = () => {
    return (
        <View style={styles.container_radius}>
            <View>
                <Text style={styles.title}>코로나바이러스감염증-19</Text>
                <View style={commonStyles.space} />
                <Text style={styles.date}>{dateInfo.getMonth() + "월 " + dateInfo.getDay() + "일 00:00 기준"}</Text>
            </View>
        </View>
    )
}
export default TitleComponent;


/**
 * StyleSheet
 */
const styles = StyleSheet.create({
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
    date: {
        fontSize: 13,
        flex: 1,
        color: 'gray',
        textAlign: 'right'
    }
});
