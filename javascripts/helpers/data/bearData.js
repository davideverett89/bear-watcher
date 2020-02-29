const trackedBears = [];

const getBears = () => {
    return trackedBears;
}

const setBears = (newBear) => {
    trackedBears.push(newBear);
}

const setAttemptedCatches = (bearButtonId, catchAttempt) => {
    const currentBear = trackedBears.find((bear) => bear.id === bearButtonId);
    currentBear.attemptedCatches.push(catchAttempt);
    console.log(trackedBears);
}

export default { getBears, setBears, setAttemptedCatches };