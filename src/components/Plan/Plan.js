import React from 'react';

const Plan = ({ plan }) => {
    console.log(plan);
    const { img, name, description, duration, price, person } = plan;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-text text-start">
                        <p>{description}</p>
                        <p>Tour Duration: {duration}Days</p>
                        <p>Per Person Cost: {price}TK</p>
                        <p>Minimum Group Member: {person}</p>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-0 d-grid gap-2">
                    <button className='btn btn-primary'>Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Plan;