import React from 'react';
import Banner from './Banner';
import RecentBlog from '../Components/RecentBlog';
import MobileNews from '../Components/MobileNews';
import TopReview from '../Components/TopReview';
import Newsletter from '../Components/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
            <TopReview></TopReview>
            <MobileNews></MobileNews>

        </div>
    );
};

export default Home;