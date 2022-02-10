import React from 'react';
import { Typography, Avatar, Layout } from 'antd';
import { Link } from 'react-router-dom';

import icon from '../images/cryptocurrency.png';
const { Sider } = Layout;

const Sidebar = ({menu}) => {

    return (
        <Sider
            className="sidebar"
            style={{
                // overflow: 'auto',
                // height: '100vh',
                // position: 'fixed',
                // left: 0,
                // top: 0,
                // bottom: 0,
            }}
            breakpoint="lg"
            collapsedWidth="0"
            trigger={null}
        >
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoo</Link>
                </Typography.Title>
            </div>
            {/* <Menu
                theme="dark"
                selectedKey={selectedKey}
                changeSelectedKey={changeSelectedKey}
                mode="inline"
                selectedKeys={[selectedKey]}
            >
                <Menu.Item
                    key="1"
                    icon={<HomeOutlined />}
                    onClick={changeSelectedKey}
                >
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item
                    key="2"
                    icon={<FundOutlined />}
                    onClick={changeSelectedKey}
                >
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item
                    key="3"
                    icon={<MoneyCollectOutlined />}
                    onClick={changeSelectedKey}
                >
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item
                    key="4"
                    icon={<BulbOutlined />}
                    onClick={changeSelectedKey}
                >
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu> */}
            {menu}  
        </Sider>
    );
};

export default Sidebar;
