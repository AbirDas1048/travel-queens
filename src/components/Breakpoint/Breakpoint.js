import React from 'react';

const Breakpoint = ({ value, addBreakPoint }) => {
    return (
        <div>
            <button onClick={() => addBreakPoint(value)} type='button' className='btn btn-light rounded-5 '>{value}s</button>
        </div>

    );
};

export default Breakpoint;