import React, { useEffect, useState } from 'react';
import Faq from '../FAQ/Faq';
import Plan from '../Plan/Plan';
import Profile from '../Profile/Profile';
import './Travel.css'

const Travel = () => {
    const [plans, setPlans] = useState([]);
    const [totalDuration, setTotalDuration] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])


    const addDuration = (duration) => {
        const newDuration = [...totalDuration, duration]
        setTotalDuration(newDuration);
    }

    return (
        <div className='row'>
            <div className='col-12 col-sm-6 col-md-8 plan bg-light py-3'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {
                            plans.map(plan => <Plan key={plan.id} plan={plan} addDuration={addDuration}></Plan>)
                        }
                    </div>
                    <Faq></Faq>
                </div>

            </div>
            <div className='col-12 col-sm-6 col-md-4 profile'>
                <Profile durations={totalDuration} ></Profile>
            </div>

        </div>
    );
};

export default Travel;