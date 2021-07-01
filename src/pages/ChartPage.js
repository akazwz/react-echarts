import React, {useEffect, useState} from "react";
import MyBarChart from "../components/MyBarChart";

function ChartPage() {
    const [state, setState] = useState({
        dataSource: [
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
    })
    const {dataSource} = state
    useEffect(function () {
        setTimeout(function () {
            setState({
                dataSource: [
                    ['score', 'amount', 'product'],
                    [32.7, 20112, 'Walnut Brownie'],
                    [89.3, 58212, 'Matcha Latte'],
                    [57.1, 78254, 'Milk Tea'],
                    [74.4, 41032, 'Cheese Cocoa'],
                    [50.1, 12755, 'Cheese Brownie'],
                    [89.7, 20145, 'Matcha Cocoa'],
                ]
            })
        }, 5000)
    }, [])

    const arr = () => {
        return (
            dataSource.map(function (item, index) {
                return <p key={index}>{index} : {item} </p>
            })
        )
    }

    return (
        <div>
            <p>Chart Page</p>
            <MyBarChart dataSource={dataSource}/>
            {arr()}
        </div>
    )
}

export default ChartPage
