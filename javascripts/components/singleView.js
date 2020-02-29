import utilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';

const closeSingleEvent = () => {
    utilities.printToDom("single-view", '');
    $('#singlebearModal').modal('hide');
}

const catchAttemptTableBuilder = (attemptArr) => {
    let domString = "";
    domString += '<table class="table">';
    domString +=    '<thead class="thead-light">';
    domString +=        '<tr>';
    domString +=            '<th scope="col">#</th>';
    domString +=            '<th scope="col">Successful Catch?</th>';
    domString +=            '<th scope="col">Time</th>';
    domString +=        '</tr>';
    domString +=    '</thead>';
    domString +=    '<tbody>';
    attemptArr.forEach((x, i) => {
        domString +=    '<tr>';
        domString +=        `<th scope="row">${i + 1}</th>`;
        domString +=        `<td>${x.successfulCatch === true ? "Yes" : "No"}</td>`;
        domString +=        `<td>${x.time}</td>`;
        domString +=    '<tr>';
    });
    domString +=    '</tbody>';
    domString += '</table>';
    return domString;
}

const showSingleBear = (e) => {
    let domString = "";
    const bearId = e.target.closest(".card").id;
    const trackedBears = bearData.getBears();
    const selectedBear = trackedBears.find((bear) => bear.id === bearId);
    domString +=        '<div>'
    domString +=            '<div>';
    domString +=                `<h2 class="display-4">${selectedBear.name}</h2>`;
    domString +=                `<img class="mb-5" src="${selectedBear.image}" alt="whatever">`;
    domString +=            '</div>';
    domString += catchAttemptTableBuilder(bearData.getAttemptedCatches(bearId));
    domString +=        '</div>'
    $('#singlebearModal').modal('show');
    utilities.printToDom("single-view", domString);
    document.getElementById("close-single-view").addEventListener("click", closeSingleEvent);
}

export default { showSingleBear };