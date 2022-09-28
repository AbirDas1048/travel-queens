import React, { useEffect, useState } from 'react';
import Plan from '../Plan/Plan';
import Profile from '../Profile/Profile';
import './Travel.css'

const Travel = () => {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])
    // console.log(plans);
    return (
        <div className='row'>
            <div className='col-9 plan bg-light'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {/* <Plan></Plan> */}
                        {
                            plans.map(plan => <Plan key={plan.id} plan={plan}></Plan>)
                        }
                    </div>
                </div>

            </div>
            <div className='col-3 profile'>
                <Profile></Profile>
            </div>

        </div>
    );
};

export default Travel;