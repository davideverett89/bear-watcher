import ultilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';
import river from '../components/river.js';


const trackNewBear = () => {
    const newBear = {
        name: document.getElementById("bear-name").value,
        image: document.getElementById("bear-image").value
    }
    bearData.setBears(newBear);
    document.getElementById("bear-form").reset();
    river.riverBuilder();
}


const createBearForm = () => {
    let domString = "";
    domString += '<div class="col-xl-12 col-lg-12 col-md-12 col-12 p-5 m-auto">';
    domString +=    '<h1 class="text-center display-4">Track New Bear</h1>'; 
    domString +=    '<form id="bear-form">';
    domString +=        '<div class="form-group">';
    domString +=            '<label for="bear-name" class="lead">Bear Name</label>';
    domString +=            '<input type="text" class="form-control" id="bear-name" placeholder="Name">';
    domString +=        '</div>';
    domString +=        '<div class="form-group">';
    domString +=            '<label for="bear-image" class="lead">Bear Image</label>';
    domString +=            '<input type="text" class="form-control" id="bear-image" placeholder="Image">';
    domString +=        '</div>'
    domString +=    '</form>';
    domString += '</div>';
    domString += '<button id="submit-bear" type="button" class="btn btn-dark m-auto">Track Bear</button>';
    ultilities.printToDom("bear-form-container", domString);
    document.getElementById("submit-bear").addEventListener("click", trackNewBear);
}

export default { createBearForm };


    
    



   

