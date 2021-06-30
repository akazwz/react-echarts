import * as echarts from "echarts"
import {useEffect} from "react";

function MyBarChart() {
    const initChart = () => {
        let barChart = echarts.init(document.getElementById('chart-box'))
        barChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
    }
    useEffect(function () {
        initChart()
    }, [])
    return (
        <div>
            <div id="chart-box" style={{width: '100%', height: 333}}/>
        </div>
    )
}

export default MyBarChart
