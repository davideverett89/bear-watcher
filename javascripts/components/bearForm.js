import ultilities from '../helpers/utilities.js';
import bearData from '../helpers/data/bearData.js';
import river from '../components/river.js';
import fattestBear from '../components/fattestBearAwards.js';


const trackNewBear = () => {
    const bearName = document.getElementById("bear-name").value;
    const bearImage = document.getElementById("bear-image").value;
    const blankCheck = [bearName, bearImage].some((input) => /^\s*$/.test(input));
    if (!blankCheck) {
        const newBear = {
            name: bearName,
            image: bearImage,
            id: `bear${bearData.getBears().length + 1}`,
            attemptedCatches: [],
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
    domString +=        '<h1 class="text-center display-4">Katmai National Park</h1>';
    domString +=        '<h2 class="text-center display-4">Bear Tracker</h2>';
    domString +=        '<form id="bear-form">';
    domString +=            '<div class="form-group">';
    domString +=                '<label for="bear-name" class="lead">Bear Name</label>';
    domString +=                '<input type="text" class="form-control" id="bear-name" placeholder="Name">';
    domString +=            '</div>';
    domString +=            '<div class="form-group">';
    domString +=                '<label for="bear-image" class="lead">Bear Image</label>';
    domString +=                '<input type="text" class="form-control" id="bear-image" placeholder="Image">';
    domString +=            '</div>'
    domString +=            '<button id="submit-bear" type="button" class="btn btn-primary">Track Bear</button>';
    domString +=        '</form>';
    domString +=        '<div class="d-flex flex-column justify-content-around align-items-center">';
    domString +=           '<h3 class="fattest-bear-title">Fattest Bear Awards:</h3>';
    domString +=           '<div class="d-flex justify-content-start align-items-center p-2">';
    domString +=                '<button id="first-place" class="btn btn-success">First Place</button>';
    domString +=                '<button id="second-place" class="btn btn-warning">Second Place</button>';
    domString +=                '<button id="third-place" class="btn btn-danger">Third Place</button>';
    domString +=           '</div>';
    domString +=        '</div>';
    domString +=    '</div>';
    domString += '</div>';
    ultilities.printToDom("bear-form-container", domString);
    document.getElementById("submit-bear").addEventListener("click", trackNewBear);
    document.getElementById("first-place").addEventListener("click", fattestBear.showfirstPlace);
    document.getElementById("second-place").addEventListener("click", fattestBear.showSecondPlace);
    document.getElementById("third-place").addEventListener("click", fattestBear.showThirdPlace);
}

export default { createBearForm };


    
    



   

