import React from 'react';
import Banner from './Banner';
import RecentBlog from '../Components/RecentBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
        </div>
    );
};

export default Home;