const trackedBears = [];

const getBears = () => {
    return trackedBears;
}

const setBears = (newBear) => {
    trackedBears.push(newBear);
}

export default { getBears, setBears };