import React from 'react';
import start from './../assets/images/start-image.png'

function LandingPage(){
  return (
  <div id='landingPage'>
    <div>
      <a href='#/home'><img className='startImgBtn' src={start}/></a>
    </div>
  </div>
  );
}


export default LandingPage;
