import './style.css'
import calculateLetter from './scripts/calculateLetter.js'
import validateInput from './scripts/validateInput.js';

document.querySelector('#app').innerHTML = `
<section id="mainSection">
  <div>
    <h1>Kata - DNI</h1>
    <p>Enter the number between 0 and 99999999 (up to 8 ciphers)</p>
  </div>

  <div class="panel">

    <input 
      type="text" 
      id="numberInput" 
      placeholder="0-99999999"
    />

    <button 
      id="calculateBtn"
    >
      Calculate
    </button>

    <button 
      id="cancelBtn"
    >
      Cancel
    </button>

  </div>

  <label
    id="result"
  >
    ?    
  </label>

  <p 
    id="error"
  ><p>

</section>
`


const mainSection = document.querySelector("#mainSection");
const calcBtn = document.querySelector("#calculateBtn");
const numberInput = document.querySelector("#numberInput");
const resultLabel = document.querySelector("#result");
const errorMsg = document.querySelector("#error");
const cancelBtn = document.querySelector("#cancelBtn");

const calculateBtnHandler = () => {
  errorMsg.innerHTML = "";
  const inputData = numberInput.value;

  try {
    validateInput(inputData);
  } catch (error) {
    errorMsg.innerHTML = error.message;
  }

  const result = calculateLetter(inputData);

  resultLabel.innerHTML = result;
}

calcBtn.addEventListener("click", calculateBtnHandler);

const cancelBtnHandler = () => {
  mainSection.innerHTML = `
    <h1>Program cancelled. Good buy!</h1>
  `
}

cancelBtn.addEventListener("click", cancelBtnHandler);

