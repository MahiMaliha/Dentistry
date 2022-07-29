import React from 'react';
import AboutDoctor from '../aboutdoctor/AboutDoctor';
import Article from '../article/Article';
import Banner from '../banner/Banner';
import Services from '../services/Services';
import HomeReviews from '../homereviews/HomeReviews';
const Home = () => {
    
    return (
        <div>
           <Banner></Banner>
           <Article></Article>
           <AboutDoctor></AboutDoctor>
           <Services></Services>
         <HomeReviews></HomeReviews>
        
        </div>
    );
};

export default Home;