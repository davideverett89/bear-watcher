import ultilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';

const riverBuilder = () => {
    const bearArr = bearData.getBears();
    let domString = "";
    bearArr.forEach((bear, i) => {
        domString += '<div class="card text-center">';
        domString +=    `<img class="card-img-top" src="${bear.image}" alt="bear${i + 1}">`;
        domString +=    '<div class="card-body">';
        domString +=        `<h5 class="card-title">${bear.name}</h5>`;
        domString +=        '<button class="btn btn-dark">Click Me</button>';
        domString +=    '</div>';
        domString += '</div>';
    })
    ultilities.printToDom("river-container", domString);
}

export default { riverBuilder };