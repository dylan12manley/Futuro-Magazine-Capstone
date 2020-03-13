import React from 'react'
import Header from './Header'
import MainArticleFeed from './MainArticleFeed'
import Ads from './Ads'
import Carousel from './FeaturedCarousel'
import { Col, Row } from 'react-bootstrap'
import './../styles/home.css';

function Home(){
  return (
  <div id='home'>
    <Header/>
    <Carousel/>
    <div className='homeBody'>
    <Row>
        <Col xs={7} sm={8} xl={8}>
          <MainArticleFeed/>
        </Col>
        <Col xs={3} sm={4} xl={4}>
          <Ads/>
        </Col>
    </Row>
    </div>
  </div>
  );
}


export default Home;
