const printToDom = (divId, textToPrint) => {
    let targetDiv = document.getElementById(divId);
    targetDiv.innerHTML = textToPrint;
}

export default { printToDom };