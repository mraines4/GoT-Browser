
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


// Set up the left hand pane

function makeNameClickers(charArray) {
    const names = charArray.map(function (person) {
        return person.name;
    });
    names.forEach(function(name) {
        let para = document.createElement('p');
        para.textContent = name;
        para.setAttribute('data-target', '');
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
            born.textContent = person.born;
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

const characterButtons = document.querySelectorAll('[data-target]');
characterButtons.forEach(addClickEvent);


