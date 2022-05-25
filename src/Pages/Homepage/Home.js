import React from 'react';
import ToolsServices from '../Tools/ToolsServices';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsServices></ToolsServices>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;