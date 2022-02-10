import { Card, Col, Row, Input } from 'antd';
import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Loader } from '../components'

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');
    const dollarUS = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        const filteredCoins = cryptoList?.data?.coins.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCryptos(filteredCoins);
    }, [cryptoList, searchTerm]);

    if (isFetching) return <Loader />;

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}
            <Row gutter={[24, 24]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={currency.uuid}
                    >
                        <Link key={currency.uuid} to={`/cryptocurrencies/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name} (${currency.symbol})`}
                                extra={
                                    <img
                                        className="crypto-image"
                                        src={currency.iconUrl}
                                    />
                                }
                            >
                                <p>Price: {dollarUS.format(currency.price)}</p>
                                <p>Market cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Cryptocurrencies;
