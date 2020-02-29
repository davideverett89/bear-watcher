import ultilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';
import catchData from '../helpers/data/catchData.js';

const catchFishEvent = (e) => {
    const buttonId = e.target.id;
    const bears = bearData.getBears().find((bear) => bear.id === buttonId);
    const fishCaught = [true, false];
    const randomNum = Math.floor(Math.random() * fishCaught.length);
    const catchAttempt = {
        bearName: bears.name,
        successfulCatch: fishCaught[randomNum],
        time: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")
    };
    catchData.setAttemptedCatches(catchAttempt);
}

const riverEvents = () => {
    let catchAttemptButtons = document.getElementsByClassName("fish-action-button");
    for (let i = 0; i < catchAttemptButtons.length; i++) {
        catchAttemptButtons[i].addEventListener("click", catchFishEvent);
    }
}

const riverBuilder = () => {
    const bearArr = bearData.getBears();
    let domString = "";
    bearArr.forEach((bear, i) => {
        domString += '<div class="card-divider col-xl-4 col-lg-4 col-md-6 col-sm-12">';
        domString +=    '<div class="card text-center">';
        domString +=        `<img class="card-img-top" src="${bear.image}" alt="bear${i + 1}">`;
        domString +=        '<div class="card-body">';
        domString +=            `<h5 class="card-title">${bear.name}</h5>`;
        domString +=            `<button id="${bear.id}" class="btn btn-outline-primary fish-action-button"><i class="fas fa-fish"></i></button>`;
        domString +=        '</div>';
        domString +=    '</div>';
        domString += '</div>';
    })
    ultilities.printToDom("river-container", domString);
    riverEvents();
}

export default { riverBuilder, riverEvents };