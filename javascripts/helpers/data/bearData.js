const trackedBears = [];

const getBears = () => {
    return trackedBears;
}

const setBears = (newBear) => {
    trackedBears.push(newBear);
}

const setAttemptedCatches = (bearId, catchAttempt) => {
    const currentBear = trackedBears.find((bear) => bear.id === bearId);
    currentBear.attemptedCatches.push(catchAttempt);
}

const getAttemptedCatches = (bearId) => {
    let selectedBear = trackedBears.find((bear) => bear.id === bearId);
    return selectedBear.attemptedCatches;
}

export default { getBears, setBears, setAttemptedCatches, getAttemptedCatches };