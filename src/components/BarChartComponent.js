import React from 'react';
import { Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";
import * as dateInfo from '../common/DateInfo'
const screenWidth = Dimensions.get("window").width;

/**
 * BarChart 컴포넌트
 * @param {incDec : 확진자 수} props 
 */
const BarChartComponent = (props) => {
    return (
        <BarChart
            data={{
                labels: dateInfo.days7List(),
                datasets: [
                    {
                        data: props.incDec,
                        strokeWidth: 3 // optional
                    }
                ],
                legend: ["COVID-19"] // optional
            }}
            width={screenWidth}
            height={300}
            chartConfig={{
                backgroundGradientFrom: "#1C1B1B",
                backgroundGradientFromOpacity: 1,
                backgroundGradientTo: "#1C1B1B",
                backgroundGradientToOpacity: 1,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 3, // optional, default 3
                barPercentage: 0.5,
            }}
            fromZero={true}
            showBarTops={true}
            showValuesOnTopOfBars={true}
            withHorizontalLabels={false}
        />
    )
}
export default BarChartComponent;
