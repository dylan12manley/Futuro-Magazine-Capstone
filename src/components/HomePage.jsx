import React from 'react'
import Header from './Header'
import MainArticleFeed from './MainArticleFeed'
import Ads from './Ads'
import Carousel from './FeaturedCarousel'
import { Col, Row } from 'react-bootstrap'

function Home(){
  return (
  <div id='home'>
    <Header/>
    <Carousel/>
    <Row>
      <Col xs={8} >
        <MainArticleFeed/>
      </Col>
      <Col md={4} >
        <Ads/>
      </Col>
    </Row>
  </div>
  );
}


export default Home;
