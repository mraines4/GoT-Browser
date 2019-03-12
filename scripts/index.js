
const namesList = document.querySelector("[data-names-list");
const detailsList = document.querySelector("[data-details-list");
const name = document.querySelector("[data-name");
const born = document.querySelector("[data-born]");
const died = document.querySelector("[data-died]");
const title = document.querySelector("[data-title]");
const alleg = document.querySelector("[data-alleg]");
const alias = document.querySelector("[data-alias]");
const spouse = document.querySelector("[data-spouse]");
const mom = document.querySelector("[data-mom]");
const dad = document.querySelector("[data-dad]");

let dataSort = document.querySelector('[data-sort]')
let resetList = document.querySelector(`[data-reset]`);
resetList.addEventListener('click', showAllChars);

// Set up the left hand pane

function makeNameClickers(charArray) {
    const names = charArray.map(function (person) {
        return person.name;
    });
    names.forEach(function(name) {
        let para = document.createElement('p');
        para.textContent = name;
        para.setAttribute('data-target', '');
        para.classList.add('char')
        namesList.append(para);
    });
}
makeNameClickers(characters);

// Fill in the right hand pane
function respondToClick() {
    let personName = event.target.textContent;
    // console.log(Object.keys(characters[0]));
    characters.forEach(function(person){
        if (person.name == personName) {
            name.textContent = person.name;
            if (person.born.length) {
                born.textContent = `Born: ${person.born}`;
            } else {
                born.textContent = 'Unknown born date'
            }
            if (person.died.length) {
                died.textContent = `Died: ${person.died}`;
            } else {
                died.textContent = 'Character isnt dead(yet)'
            }
            if (person.titles.length) {
                title.textContent = `Titles: ${person.titles}`;
            } else {
                title.textContent = 'Character has no titles'
            }
            if (person.aliases.length) {
                alias.textContent = `Aliases: ${person.aliases}`;
            } else {
                alias.textContent = 'Character has no aliases'
            }
            // if (person.spouse.length) {
            //     spouse.textContent = person.spouse;
            // } else {
            //     spouse.textContent = 'person has no spouse'
            // }
            // alleg.textContent = person.allegiances;

            // mom.textContent = person.mother;
            // dad.textContent = person.father;
        }
    });
}


function addClickEvent(person) {
    person.addEventListener('click', respondToClick);
}

const charactersAll = document.querySelectorAll('[data-target]');
charactersAll.forEach(addClickEvent);


let charList = [];
function makeList() {
    let charCode = 65;
    while (charCode <= 90) {
        let letter = String.fromCharCode(charCode);
        let newH3 = document.createElement('h3');
        newH3.style.margin = '5px';
        newH3.style.display = 'inline-block'
        newH3.textContent = letter;
        dataSort.append(newH3);
        charList.push(newH3);
        charCode += 1;
    }
}
makeList();
// console.log(charList)

charList.forEach(function(letter) {
    letter.addEventListener('click', sortList);
});

function sortList(event) {
    let sortLetter = event.target.textContent;
    charactersAll.forEach(function(name) {
        name.style.display = 'block'
        if (name.textContent[0] !== sortLetter) {
            name.style.display = 'none';
        }
    })
}

function showAllChars() {
    charactersAll.forEach(function(name) {
        name.style.display = 'block'
    })
}