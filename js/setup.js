'use strict';
// functions to get a random number and a random item
const getRndInteger = function (min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

const getRndItem = function (items) {
  const maxIndex = items.length - 1;
  const rndIndex = getRndInteger(0, maxIndex);
  return items[rndIndex];
};


const setup = document.querySelector(`.setup`);
const setupOpenButton = document.querySelector(`.setup-open`);
const setupCloseButton = document.querySelector(`.setup-close`);
const setupForm = document.querySelector(`.setup-wizard-form`);
const setupSubmit = document.querySelector(`.setup-submit`);
const MIN = 2;
const MAX = 25;
const userNameInput = document.querySelector(`.setup-user-name`);
// coat
const setupCoat = document.querySelector(`.setup-wizard .wizard-coat`);
const coatColors = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const coatColorInput = document.getElementsByName(`coat-color`);

// eyes
const setupEyes = document.querySelector(`.setup-wizard .wizard-eyes`);
const eyesColor = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];
const eyesColorInput = document.getElementsByName(`eyes-color`);

// fireball
const setupFireball = document.querySelector(`.setup-fireball-wrap`);
const fireballColor = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`
];
const fireballColorInput = document.getElementsByName(`fireball-color`);

// pressing ESC
const onEscDialog = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    setup.classList.add(`hidden`);
  }
};

// click/Enter the SUBMIT btn
const submitForm = function () {
  if (userNameInput.value) {
    setupForm.submit();
  } else {
    userNameInput.setCustomValidity(`Call yourself something`);
  }
};

// open the Dialog
const openSetupDialog = function () {
  setup.classList.remove(`hidden`);
  setupSubmit.addEventListener(`click`, submitForm);
  document.addEventListener(`keydown`, onEscDialog);
};

// close the Dialog
const hideSetupDialog = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onEscDialog);
};

// events
setupOpenButton.addEventListener(`click`, function () {
  openSetupDialog();
});

setupCloseButton.addEventListener(`click`, function () {
  hideSetupDialog();
});

setupOpenButton.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openSetupDialog();
  }
});

setupCloseButton.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    hideSetupDialog();
  }
});

// name length
userNameInput.addEventListener(`input`, function () {
  const inputValueLength = userNameInput.value.length;
  if (inputValueLength < MIN) {
    userNameInput.setCustomValidity(`The name is too short. Should be 2 symbols min. Add` + ` ` + (MIN - inputValueLength) + ` ` + `symbols.`);
  } else if (inputValueLength > MAX) {
    userNameInput.setCustomValidity(`The name is too long. Should be 25 symbols max. Delete` + (inputValueLength - MAX) + `symbols.`);
  } else {
    userNameInput.setCustomValidity(``);
  }
  userNameInput.reportValidity();
});

// change Coat
setupCoat.addEventListener(`click`, function () {
  setupCoat.style.fill = getRndItem(coatColors);
  coatColorInput.value = setupCoat.style.fill;
});

// change Eyes
setupEyes.addEventListener(`click`, function () {
  setupEyes.style.fill = getRndItem(eyesColor);
  eyesColorInput.value = setupEyes.style.fill;
});

// change Fireball
setupFireball.addEventListener(`click`, function () {
  setupFireball.style.backgroundColor = getRndItem(fireballColor);
  fireballColorInput.value = setupFireball.style.backgroundColor;
});

