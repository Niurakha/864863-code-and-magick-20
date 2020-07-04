'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
var WIZARD_LASTNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];
var WIZARD_COATS = [
  'rgb(101, 137, 164)',
  ' rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var NUMBER_OF_WIZARDS = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createWizard = function () {
  var wizardName = [getRandom(WIZARD_NAMES), getRandom(WIZARD_LASTNAMES)].join(' ');
  var wizardCoats = getRandom(WIZARD_COATS);
  var wizardEyes = getRandom(WIZARD_EYES);
  return {name: wizardName, coatColor: wizardCoats, eyesColor: wizardEyes};
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var numberOfWizards = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards.push(createWizard());
  }
  return wizards;
};

var createDom = function (wizards) {
  wizards = numberOfWizards(NUMBER_OF_WIZARDS);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
createDom();

document.querySelector('.setup-similar').classList.remove('hidden');
