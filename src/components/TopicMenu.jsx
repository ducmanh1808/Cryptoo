import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
    const styledTopics = [];
    topics.forEach((topic, index) =>
        styledTopics.push(
            <Menu.Item
                key={index}
                onClick={changeSelectedKey}
                icon={topic.icon}
            >
                <Link
                    to={
                        topic.name.toLowerCase() === 'home'
                            ? ''
                            : topic.name.toLowerCase()
                    }
                >
                    {topic.name}
                </Link>
            </Menu.Item>
        )
    );

    return (
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
            {styledTopics}
        </Menu>
    );
};
export default TopicMenu;
