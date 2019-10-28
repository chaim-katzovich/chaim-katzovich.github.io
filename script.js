const forename_prefix = ['Mo', 'He', 'Ja', 'Schmu', 'Schlo', 'Meno', 'Eli', 'Shi', 'Yeru', 'Reu'];
const forename_suffix = ['donai', 'shel', 'mon', 'mo', 'diah', 'chay', 'prahim', 'muel', 'liel', 'bediah'];
const surname_prefix = ['Gold', 'Wasser', 'Edel', 'Bergen', 'Braun', 'Katzen', 'Baren', 'Apple', 'Blumen', 'Kronen'];
const surname_suffix = ['berg', 'stein', 'meyer', 'owsky', 'heimer', 'baum', 'feld', 'bach', 'heimer', 'mann'];

function rndint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_jewish_name() {
  jewish_name.textContent = forename_prefix[rndint(0,9)] + forename_suffix[rndint(0,9)] + ' ' + surname_prefix[rndint(0,9)] + surname_suffix[rndint(0,9)];
}

const jewish_name = document.querySelector('.jewish_name');
const jew_button = document.querySelector('.jew_button');

jew_button.addEventListener('click', generate_jewish_name);
