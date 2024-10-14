import React from 'react';
import HomeHeader from "../../components/HomeHeader/HomeHeader.jsx";
import Shedule from "../../components/Shedule/Shedule.jsx";

const Home = () => {
    return (
        <div className="Home-deader">
            <HomeHeader/>
            <Shedule/>
        </div>
    );
};

export default Home;