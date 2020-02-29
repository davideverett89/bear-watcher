import ultilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';

const riverBuilder = () => {
    const bearArr = bearData.getBears();
    let domString = "";
    bearArr.forEach((bear, i) => {
        domString += '<div class="card-divider col-xl-4 col-lg-4 col-md-6 col-sm-12">';
        domString +=    '<div class="card text-center">';
        domString +=        `<img class="card-img-top" src="${bear.image}" alt="bear${i + 1}">`;
        domString +=        '<div class="card-body">';
        domString +=            `<h5 class="card-title">${bear.name}</h5>`;
        domString +=            '<button class="btn btn-outline-primary"><i class="fas fa-fish"></i></button>';
        domString +=        '</div>';
        domString +=    '</div>';
        domString += '</div>';
    })
    ultilities.printToDom("river-container", domString);
}

export default { riverBuilder };