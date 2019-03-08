// populate list of characters

let mainDiv = document.querySelector('[data-chars]');


function listOfChars (chars) {
    return chars.map(function (each) {
        let charName = document.createElement('p');
        return charName.textContent = each.name;
    });
}
mainDiv.append(listOfChars(characters))
