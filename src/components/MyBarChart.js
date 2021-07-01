import * as echarts from "echarts"
import {useEffect, useState, useRef} from "react";

function MyBarChart() {
    const initWidth = window.innerWidth;
    const initHeight = window.innerHeight;
    const chartBoxRef = useRef(null);

    const [state, setState] = useState({
        width: initWidth,
        height: initHeight,
        chartBoxWidth: initWidth * 0.9,
        chartBoxHeight: initHeight * 0.3,
    });

    const {width, height, chartBoxWidth, chartBoxHeight} = state

    const initChart = () => {
        let barChart = echarts.init(document.getElementById('chart-box'))
        let option = {
            dataset: {
                source: [
                    ['score', 'amount', 'product'],
                    [89.3, 58212, 'Matcha Latte'],
                    [57.1, 78254, 'Milk Tea'],
                    [74.4, 41032, 'Cheese Cocoa'],
                    [50.1, 12755, 'Cheese Brownie'],
                    [89.7, 20145, 'Matcha Cocoa'],
                    [68.1, 79146, 'Tea'],
                    [19.6, 91852, 'Orange Juice'],
                    [10.6, 101852, 'Lemon Juice'],
                    [32.7, 20112, 'Walnut Brownie']
                ]
            },
            xAxis: {},
            yAxis: {type: 'category'},
            series: [
                {
                    type: 'bar',
                    encode: {
                        // 将 "amount" 列映射到 X 轴。
                        x: 'amount',
                        // 将 "product" 列映射到 Y 轴。
                        y: 'product'
                    }
                }
            ]
        };
        barChart.setOption(option)
    }
    const handleResize = (e) => {
        const width = e.target.innerWidth
        const height = e.target.innerHeight
        let chartBoxHeight = width * 0.9 * 0.5
        if (chartBoxHeight > 500) {
            chartBoxHeight = 500
        }
        setState({
            width: width,
            height: height,
            chartBoxWidth: width * 0.9,
            chartBoxHeight: chartBoxHeight,
        })
        let chartInstance = echarts.getInstanceByDom(document.getElementById('chart-box'))
        chartInstance.resize()
    }
    useEffect(function () {
        initChart()
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <div style={{
            textAlign: "center"
        }}>
            <div ref={chartBoxRef} id="chart-box" style={{
                width: chartBoxWidth,
                height: chartBoxHeight,
                maxHeight: 400,
                backgroundColor: "rebeccapurple",
                margin: "auto"
            }}/>
            <p>宽度:{width}</p>
            <p>高度:{height}</p>
            <p>图表容器宽度:{chartBoxWidth}</p>
            <p>图表容器高度:{chartBoxHeight}</p>
        </div>
    )
}

export default MyBarChart
