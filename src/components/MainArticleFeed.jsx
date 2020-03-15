import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import tyler from './../assets/images/tyler.jpg';
import kenith from './../assets/images/kenith.jpg';
import rick from './../assets/images/RickFuturo.jpg';
import stephen1 from './../assets/images/stephen1.jpg';
import savage from './../assets/images/savageSoul.jpeg';
import "./../styles/mainArticlesFeed.css"

const fullArticlesList = [
  {
    title: 'Why is Rick so Sick, for Real tho?',
    author: 'Joey P',
    publishDate: 'Febuary 19, 2020',
    articleTeaser: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought...",
    articleMain: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought , It just is mothafuckafucking thing. Like just waking up , opening your eyes and just doing shit , no negative self talk , no barriers , no fucks given.",
    mainImage: rick,
    catagory: 'People'
  },
  {
    title: 'Kenneth Cappello’s Photography is Flithy',
    author: 'Joey P',
    publishDate: 'Febuary 19th, 2020',
    articleTeaser: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck.',
    articleMain: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck. You have have cunt’s take lame pictures of you because they be kinda hating on the Low lol , That’s not Kenneth Cappelo , he’s def not a hater with camera.',
    mainImage: kenith,
    catagory: 'Film'
  },
  {
    title: 'Stephen Gibbs Brain is Melting',
    author: 'Joey P',
    publishDate: 'Febuary 19th, 2020',
    articleTeaser: 'Is it me or is Stephen Gibbs really into Psychedelics or maybe he’s just a trippy dude but either way his work has a fucking place here.  The fact that him and the Homey trippy Redd hooked up for and album cover ...',
    articleMain: 'Is it me or is Stephen Gibbs really into Psychedelics or maybe he’s just a trippy dude but either way his work has a fucking place here.  The fact that him and the Homey trippy Redd hooked up for and album cover is ridiculously cool and trippy unto itself. These first few artist that we feature in Art now where not going to say too much about because there work speaks fr itself. Have a tab , put on some Nicholas Jarr and watch his world come to life.',
    mainImage: stephen1,
    catagory: 'Art'
  },
  {
    title: 'Savage Seoul , Skoot Designer MLMA @melovemealot',
    author: 'Joey P',
    publishDate: 'Febuary 20th, 2020',
    articleTeaser: 'We here at Futuro loves us some street wear , and we also understand that every cunt and there momma is a streetwear designer of artist. So in saying that its hard to stand out from the pack. Well MLMA from Korea has done just that.',
    articleMain: 'We here at Futuro loves us some street wear , and we also understand that every cunt and there momma is a streetwear designer of artist. So in saying that its hard to stand out from the pack. Well MLMA from Korea has done just that. Her dragon ball Z , Kung fu , Anime inspired gear is pretty sick. We aint gonna give her to many words but just enough to say we see you. Outtie 5000 G.',
    mainImage: savage,
    catagory: 'Fashion'
  },
  {
    title: 'Fourth Story Title',
    author: 'Fourth Author',
    publishDate: 'March 2nd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    articleMain: 'We here at Futuro loves us some street wear , and we also understand that every cunt and there momma is a streetwear designer of artist. So in saying that its hard to stand out from the pack. Well MLMA from Korea has done just that. Her dragon thsia aboout music actullly, got emm.',
    mainImage: tyler,
    catagory: 'Sound'
  }
]

function MainArticleFeed(){
  return (
  <>
    <div>
      <div className="articleFeed">
        <div className="articlesAvailableDiv">
          {fullArticlesList.map((article, index) =>
            <Card className="cardClass">
            <div className='cardHeader'>
            <Row>
            <Col xs={8} sm={9}><h5 className='cardTitle'>{article.title}</h5></Col>
            <Col>
              <h6 className='cardTitleB'>{article.author}</h6>
              <h6> <span className='publishDate'>{article.publishDate}</span></h6>
            </Col>
            </Row>
            <Row>
              <Col>
              </Col>
            </Row>
            </div>
            <div className="cardImg">
              <Card.Img className="cardImgImg" src={article.mainImage} alt="The article's main image." />
            </div>
              <Card.Text>
              <div className="articleSubtitle" >
              <p className='ArticleTeaserOnCard'>{article.articleTeaser}</p>
              </div>
              </Card.Text>
            </Card>
          )
        }
        </div>
      </div>
    </div>
  </>
);
}

export default MainArticleFeed;
