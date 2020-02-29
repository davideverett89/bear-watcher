import utilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';

const closeSingleEvent = () => {
    utilities.printToDom("single-view", '');
    $('#singlebearModal').modal('hide');
}

const showSingleBear = (e) => {
    let domString = "";
    const bearId = e.target.closest(".card").id;
    const trackedBears = bearData.getBears();
    const selectedBear = trackedBears.find((bear) => bear.id === bearId);
    domString += '<div class="container">';
    domString +=    '<div class="row">';
    domString +=        '<div class="col-6 card-separate">'
    domString +=            '<div>';
    domString +=                `<img class="my-img" src="${selectedBear.image}" alt="whatever">`;
    domString +=            '</div>';
    domString +=        '</div>'
    domString +=        '<div class="col-6 card-separate">'
    domString +=            '<div class="d-flex flex-column justify-content-between p-2">';
    domString +=                `<h2>${selectedBear.name}</h2>`;
    domString +=            '</div>';
    domString +=        '</div>';
    // domString += adventureTableBuilder(selectedDino.adventures);
    domString +=    '</div>';
    domString += '</div>';
    $('#singlebearModal').modal('show');
    utilities.printToDom("single-view", domString);
    document.getElementById("close-single-view").addEventListener("click", closeSingleEvent);
}

export default { showSingleBear };