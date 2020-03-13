import React from 'react';
import start from './../assets/images/start-image.png'
import fBnW from './../assets/images/FbNw-trans.png'
import './../styles/landingPage.css'

function LandingPage(){
  return (
  <div id='landingPage'>
    <div className='landingImgs'>
      <img className='fTrans' src={fBnW}/>
      <a href='#/home'><img className='startImgBtn' src={start}/></a>
    </div>
  </div>
  );
}


export default LandingPage;
