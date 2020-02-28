const trackedBears = [];

const getBears = () => {
    return trackedBears;
}

const setBears = (newBear) => {
    trackedBears.push(newBear);
    console.log(trackedBears);
}

export default { getBears, setBears };