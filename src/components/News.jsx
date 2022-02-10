import React, { useState } from 'react';
import { Typography, Row, Col, Select, Avatar, Card } from 'antd';
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi'
import moment from 'moment';
import { Loader } from '../components';

const { Title, Text } = Typography;
const { Option } = Select;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptosNewsQuery({ newsCategory, count: simplified ? 12 : 100 });

  if (isFetching) return <Loader />;

  return (
    <Row gutter={[24,24]}>
       {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news, i) => (
        <Col xs={24} md={12} lg={8} key={i}>
          <Card hoverable className="news-card" >
            <a href={news.url} target="_blank" rel="oreferrer" className="news-card-body">
              <div className="news-image-container">
                <Title level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" style={{maxWidth: '200px', maxHeight: '200px', margin: '3px'}}/>
              </div>
              <p>{news.description.length > 150 ? `${news.description.substring(0, 150)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0].image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <Text className="provider-name">{news.provider[0].name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div> 
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
