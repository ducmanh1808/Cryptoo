import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-zoom';
import { Chart as ChartJS } from 'chart.js/auto'

const { Title } = Typography;

const LineChart = ({ coinName, coinHistory, currentPrice }) => {
    const coinPrice = [];
    const coinTimestamp = [];
    for (let i = 0; i < coinHistory?.data?.history.length; i+= 1) {
            coinPrice.unshift(coinHistory?.data?.history[i]?.price);
            coinTimestamp.unshift(new Date(coinHistory?.data?.history[i]?.timestamp*1000).toLocaleString());
    }

    const options = {
        zoom: {
            enabled: true,
            mode: 'x',
          },
          pan: {
            enabled: true,
            mode: 'x',
          },
    };
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                borderColor: `${coinHistory?.data?.change > 0 ? '#04AA6D' : 'rgb(255, 99, 132)'}`,
                backgroundColor: `${coinHistory?.data?.change > 0 ? '#04AA6D' : 'rgb(255, 99, 132)'}`,
            },
        ],
    };

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title" style={{color: "white"}}>
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        Change: {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5} className="current-price">
                        Current Price: {currentPrice} $
                    </Title>
                </Col>
            </Row>
            <Line options={options} data={data} />
        </>
    );
};

export default LineChart;
