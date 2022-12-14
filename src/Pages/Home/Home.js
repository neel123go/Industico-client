import React from 'react'
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusineesSummary/BusinessSummary';
import CurrentAffairs from '../CurrentAffairs/CurrentAffairs';
import CustomerReview from '../CustomerReview/CustomerReview';
import RecentProject from '../RecentProject/RecentProject';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div className='bg-info'>
            <Banner />
            <Tools />
            <BusinessSummary />
            <RecentProject />
            <CustomerReview />
            <CurrentAffairs />
        </div>
    )
}

export default Home;