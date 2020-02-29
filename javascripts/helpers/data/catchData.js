const attemptedCatches = [];

const getAttemptedCatches = () => {
    return attemptedCatches;
}

const setAttemptedCatches = (catchAttempt) => {
    attemptedCatches.push(catchAttempt);
    console.log(attemptedCatches);
}

export default { getAttemptedCatches, setAttemptedCatches };