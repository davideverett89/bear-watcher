import bearData from '../helpers/data/bearData.js';
import utilities from '../helpers/utilities.js';
import singleView from '../components/singleView.js';


const showfirstPlace = () => {
    let domString = "";
    let firstPlaceWinner = bearData.sortPercentages()[0];
    const emptyCheck = bearData.getBears().some((bear) => bear.attemptedCatches.length === 0);
    if (firstPlaceWinner === undefined) {
        alert("Not enough contestants.");
    } else if (emptyCheck){
        alert("Results pending.");
    } else {
        domString +=    '<div>';
        domString +=        `<h2 class="display-4">First Place Winner: ${firstPlaceWinner.name}!</h2>`;
        domString +=        `<img class="mb-3" src="${firstPlaceWinner.image}" alt="${firstPlaceWinner.name}">`;
        domString +=        `<p>Catch Percentage: ${firstPlaceWinner.catchPercentage}%</p>`;
        domString +=    '</div>';
        $('#singlebearModal').modal('show');
        utilities.printToDom("single-view", domString);
        document.getElementById("close-single-view").addEventListener("click", singleView.closeSingleEvent);
    }
}

const showSecondPlace = () => {
    let domString = "";
    let secondPlaceWinner = bearData.sortPercentages()[1];
    const emptyCheck = bearData.getBears().some((bear) => bear.attemptedCatches.length === 0);
    if (secondPlaceWinner === undefined) {
        alert("Not enough contestants.");
    } else if (emptyCheck) {
        alert("Results pending.");
    } else {
        domString +=    '<div>';
        domString +=        `<h2 class="display-4">Second Place Winner: ${secondPlaceWinner.name}!</h2>`;
        domString +=        `<img class="mb-3" src="${secondPlaceWinner.image}" alt="${secondPlaceWinner.name}">`;
        domString +=        `<p>Catch Percentage: ${secondPlaceWinner.catchPercentage}%</p>`;
        domString +=    '</div>';
        $('#singlebearModal').modal('show');
        utilities.printToDom("single-view", domString);
        document.getElementById("close-single-view").addEventListener("click", singleView.closeSingleEvent);
    }
}

const showThirdPlace = () => {
    let domString = "";
    let thirdPlaceWinner = bearData.sortPercentages()[2];
    const emptyCheck = bearData.getBears().some((bear) => bear.attemptedCatches.length === 0);
    if (thirdPlaceWinner === undefined) {
        alert("Not enough contestants.");
    } else if (emptyCheck) {
        alert("Result pending.");
    } else {
        domString +=    '<div>';
        domString +=        `<h2 class="display-4">Third Place Winner: ${thirdPlaceWinner.name}!</h2>`;
        domString +=        `<img class="mb-3" src="${thirdPlaceWinner.image}" alt="${thirdPlaceWinner.name}">`;
        domString +=        `<p>Catch Percentage: ${thirdPlaceWinner.catchPercentage}%</p>`;
        domString +=    '</div>';
        $('#singlebearModal').modal('show');
        utilities.printToDom("single-view", domString);
        document.getElementById("close-single-view").addEventListener("click", singleView.closeSingleEvent);
    }
}


export default { showfirstPlace, showSecondPlace, showThirdPlace };