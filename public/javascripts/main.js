import bearForm from '../javascripts/components/bearForm.js';
import river from '../javascripts/components/river.js';

const init = () => {
    bearForm.createBearForm();
    river.riverEvents();
}

init();