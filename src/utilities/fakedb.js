// use local storage to manage Break Point data
const addDB = (value) => {
    localStorage.setItem('break-point', value);
}

const getStoredBreakPoint = () => {
    let previousBreakpoint = 0;
    const breakPoint = localStorage.getItem('break-point');
    if (breakPoint) {
        previousBreakpoint = breakPoint;
    }
    return previousBreakpoint;
}


export {
    addDB,
    getStoredBreakPoint
}