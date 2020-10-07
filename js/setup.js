'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const setupList = userDialog.querySelector(`.setup-similar-list`);
const setupWizardTemplate = document.querySelector(`#similar-wizard-template`)
.content
.querySelector(`.setup-similar-item`); // HERE to the div inside the template tag

// make patterns be chosen randomly
const getRandomItem = function (wizardPattern) {
  return wizardPattern[Math.floor(Math.random() * wizardPattern.length)];
};

// algorythm for making a wizard
const getWizard = () => ({
  name: getRandomItem(WIZARD_NAMES) + ` ` + getRandomItem(WIZARD_SURNAMES),
  coatColor: getRandomItem(WIZARD_COLOR),
  eyesColor: getRandomItem(WIZARD_EYES),
});

// array of 4 wizards
const wizardsArr = [];
const countWizards = 4;
const getWizardsArr = function () {
  for (let i = 0; i < countWizards; i++) {
    wizardsArr.push(getWizard());
  }
  return wizardsArr;
};

getWizardsArr(4);

const renderWizard = function (getWizard) {
  const wizardElement = setupWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = getWizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = getWizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = getWizard.eyesColor;

  return wizardElement;
};


const fragment = document.createDocumentFragment();

for (let i = 0; i < wizardsArr.length; i++) {
  fragment.appendChild(renderWizard(wizardsArr[i]));
}

setupList.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);


