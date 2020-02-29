import ultilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';
import singleView from '../components/singleView.js';

const catchFishEvent = (e) => {
    const bearId = e.target.closest(".card").id;
    const fishCaught = [true, false];
    const randomNum = Math.floor(Math.random() * fishCaught.length);
    const catchAttempt = {
        successfulCatch: fishCaught[randomNum],
        time: moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")
    };
    bearData.setAttemptedCatches(bearId, catchAttempt);
}

const riverEvents = () => {
    let catchAttemptButtons = document.getElementsByClassName("fish-action-button");
    let showBearButtons = document.getElementsByClassName("inspect-bear-button");
    for (let i = 0; i < catchAttemptButtons.length; i++) {
        catchAttemptButtons[i].addEventListener("click", catchFishEvent);
    }
    for (let j = 0; j < showBearButtons.length; j++) {
        showBearButtons[j].addEventListener("click", singleView.showSingleBear);
    }
}

const riverBuilder = () => {
    const bearArr = bearData.getBears();
    let domString = "";
    bearArr.forEach((bear, i) => {
        domString += '<div class="card-divider col-xl-4 col-lg-4 col-md-6 col-sm-12">';
        domString +=    `<div id="${bear.id}" class="card text-center">`;
        domString +=        `<img class="card-img-top" src="${bear.image}" alt="bear${i + 1}">`;
        domString +=        '<div class="card-body">';
        domString +=            `<h5 class="card-title">${bear.name}</h5>`;
        domString +=            `<button class="btn btn-outline-info inspect-bear-button"><i class="fas fa-info-circle"></i></button>`;
        domString +=            `<button class="btn btn-outline-primary fish-action-button"><i class="fas fa-fish"></i></button>`;
        domString +=        '</div>';
        domString +=    '</div>';
        domString += '</div>';
    })
    ultilities.printToDom("river-container", domString);
    riverEvents();
}

export default { riverBuilder, riverEvents };