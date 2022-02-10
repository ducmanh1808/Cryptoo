import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const NavBar = ({ menu }) => {
    const [visible, setVisible] = useState(false);
    return (
        <nav className="navbar">
            <Button
                className="menu"
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
            />
            <Drawer
                title="Topics"
                placement="left"
                onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                visible={visible}
                bodyStyle={{ backgroundColor: 'rgb(0, 21, 41)' }}
            >
                {menu}
            </Drawer>
            <a href="/">
                <img src={icon} className="logo" alt="logo" />
            </a>
        </nav>
    );
};
export default NavBar;
