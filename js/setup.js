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

const wizards = [
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ` ` + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: WIZARD_COLOR[Math.floor(Math.random() * WIZARD_COLOR.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ` ` + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: WIZARD_COLOR[Math.floor(Math.random() * WIZARD_COLOR.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ` ` + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: WIZARD_COLOR[Math.floor(Math.random() * WIZARD_COLOR.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ` ` + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: WIZARD_COLOR[Math.floor(Math.random() * WIZARD_COLOR.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_COLOR.length)]
  }
];

const renderWizard = function (wizard) {
  const wizardElement = setupWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupList.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);


