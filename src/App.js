import React, { useEffect, useState } from 'react';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
} from '@ant-design/icons';

import './App.css';
import {
    Exchanges,
    Homepage,
    News,
    Cryptocurrencies,
    CryptoDetails,
    Sidebar,
    TopicMenu,
    Navbar,
} from './components';

const { Footer, Content, Header } = Layout;

const App = () => {
    const location = useLocation();
    const topics = [
        { name: 'Home', icon: <HomeOutlined /> },
        { name: 'Cryptocurrencies', icon: <FundOutlined /> },
        // { name: 'Exchanges', icon: <MoneyCollectOutlined /> },
        { name: 'News', icon: <BulbOutlined /> },
    ];

    const [selectedKey, setSelectedKey] = useState('0');
    const changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
    };
    console.log(location.pathname.split('/')[1]);
    useEffect(()=> {
        if(location.pathname.split('/')[1] === "") {
            setSelectedKey('0');
            return;
        }
        setSelectedKey(topics.findIndex(item => item.name.toLowerCase() === location.pathname.split('/')[1]).toString());
    },[location])

    const Menu = (
        <TopicMenu
            topics={topics}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );

    return (
        <div className="app">
            {/* <div className="navbar">
        
      </div> */}
            <Navbar menu={Menu} />
            <Layout hasSider className="main-content">
                <Sidebar menu={Menu} />
                {/* <div className="main"> */}
                <Layout className="site-layout">
                    <Content
                        style={{ margin: '24px 16px 0', overflow: 'initial' }}
                    >
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/exchanges" element={<Exchanges />} />
                            <Route
                                path="/cryptocurrencies"
                                element={<Cryptocurrencies />}
                            />
                            <Route
                                path="/cryptocurrencies/:coinId"
                                element={<CryptoDetails />}
                            />
                            <Route path="/news" element={<News />} />
                        </Routes>
                    </Content>
                    <Footer
                        className="footer"
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#001529',
                        }}
                    >
                        <Typography.Title
                            level={5}
                            style={{ color: 'white', textAlign: 'center' }}
                        >
                            <Link to="/">Cryptoo Inc.</Link> <br />
                            All Rights Reserved.
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                            <Link to="/exchanges">Exchanges</Link>
                            <Link to="/news">News</Link>
                        </Space>
                    </Footer>
                    {/* </div> */}
                </Layout>
            </Layout>
        </div>
    );
};

export default App;
