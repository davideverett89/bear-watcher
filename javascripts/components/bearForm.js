import ultilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';
import river from '../components/river.js';


const trackNewBear = () => {
    const bearName = document.getElementById("bear-name").value;
    const bearImage = document.getElementById("bear-image").value;
    const blankCheck = [bearName, bearImage].some((input) => /^\s*$/.test(input));
    if (!blankCheck) {
        const newBear = {
            name: bearName,
            image: bearImage
        }
        bearData.setBears(newBear);
        document.getElementById("bear-form").reset();
        river.riverBuilder();
    }
}


const createBearForm = () => {
    let domString = "";
    domString += '<div id="bear-jumbo" class="jumbotron jumbotron-fluid col-xl-10 col-lg-10 col-md-10 col-10 m-auto p-5">';
    domString +=    '<div class="container">'
    domString +=        '<h1 class="text-center display-4">Track New Bear</h1>'; 
    domString +=        '<form id="bear-form">';
    domString +=            '<div class="form-group">';
    domString +=                '<label for="bear-name" class="lead">Bear Name</label>';
    domString +=                '<input type="text" class="form-control" id="bear-name" placeholder="Name">';
    domString +=            '</div>';
    domString +=            '<div class="form-group">';
    domString +=                '<label for="bear-image" class="lead">Bear Image</label>';
    domString +=                '<input type="text" class="form-control" id="bear-image" placeholder="Image">';
    domString +=            '</div>'
    domString +=        '</form>';
    domString +=        '<button id="submit-bear" type="button" class="btn btn-primary m-auto">Track Bear</button>';
    domString +=    '</div>';
    domString += '</div>';
    ultilities.printToDom("bear-form-container", domString);
    document.getElementById("submit-bear").addEventListener("click", trackNewBear);
}

export default { createBearForm };


    
    



   

