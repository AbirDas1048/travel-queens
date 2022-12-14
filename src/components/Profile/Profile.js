import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faPlane, faCode, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profile from '../../images/51544.jpg';
import { addDB, getStoredBreakPoint } from '../../utilities/fakedb';
import Breakpoint from '../Breakpoint/Breakpoint';
import './Profile.css'

const Profile = (props) => {

    const { durations } = props;
    const [breakPoints, setBreakPoints] = useState([]);
    const [selectedBreakPoints, setSelectedBreakPoints] = useState([]);

    useEffect(() => {
        fetch('breakPoint.json')
            .then(res => res.json())
            .then(data => setBreakPoints(data))
    }, [])

    useEffect(() => {
        const storedBreakPoint = getStoredBreakPoint();
        setSelectedBreakPoints(storedBreakPoint);
    }, [breakPoints]);

    const addBreakPoint = (value) => {
        setSelectedBreakPoints(value);
        addDB(value);
    }


    let total_duration = 0;
    for (const duration of durations) {
        total_duration = total_duration + duration;
    }

    const notify = () => toast("React Toaster");

    return (
        <div>
            <div className="d-flex align-items-center my-3">
                <div className="flex-shrink-0 w-25">
                    <img src={profile} className="img-fluid rounded-4" alt="profile" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <p className='fw-bolder'>Abir Das</p>
                    <p><FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon> Chattogram, Bangladesh</p>
                </div>
            </div>
            <div className="d-flex justify-content-around align-items-center bg-info text-white rounded-4 py-3 my-3">
                <div className='text-center'>
                    <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
                    <p>Travelling</p>
                </div>
                <div className='text-center'>
                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    <p>Coding</p>
                </div>
                <div className='text-center'>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    <p>Shopping</p>
                </div>
            </div>

            <p className='fw-bolder'>Add A Break</p>
            <div className="d-flex flex-sm-wrap justify-content-around align-items-center bg-info rounded-4 py-3 my-3">

                {
                    breakPoints.map(breakPoint => <Breakpoint key={breakPoint.id} value={breakPoint.value} addBreakPoint={addBreakPoint}></Breakpoint>)
                }

            </div>


            <div className='my-5'>
                <p className='fw-bolder'>Excercise Details</p>
                <div className='d-flex my-3 py-3 align-items-center justify-content-around bg-light rounded-3'>
                    <p className='fw-bold'>Exercise time</p>
                    <p className='text-muted'>{total_duration} Days</p>
                </div>
                <div className='d-flex my-3 py-3 align-items-center justify-content-around bg-light rounded-3'>
                    <p className='fw-bold'>Break time</p>
                    <p className='text-muted'>{selectedBreakPoints} second</p>
                </div>
            </div>

            <div className="card-footer bg-transparent border-0 d-grid gap-2 mb-3">
                <button onClick={notify} className='btn btn-info text-white'>Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>


        </div>
    );
};

export default Profile;