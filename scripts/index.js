
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
function makeNamesButtons(charactersArray){
    const names = charactersArray.map(function (guy){
        return guy.name;
    });
    names.forEach(function (name){
            let button = document.createElement("button");
            button.textContent = name;
            button.setAttribute("data-target",'');
            namesList.append(button);
        });
}
makeNamesButtons(characters);

// Fill in the right hand pane
function respondToClick() {
    personName = event.target.textContent;
    console.log(Object.keys(characters[0]));
    characters.forEach(function(person){
        if (person.name == personName) {
            name.textContent = person.name;
            born.textContent = person.born;
            died.textContent = person.died;
            title.textContent = person.titles;
            alleg.textContent = person.allegiances;
            alias.textContent = person.aliases;
            spouse.textContent = person.spouse;
            mom.textContent = person.mother;
            dad.textContent = person.father;
        }
    });
}
function addClickEvent(person) {
    person.addEventListener('click', respondToClick);
}

const characterButtons = document.querySelectorAll('[data-target]');
characterButtons.forEach(addClickEvent);


