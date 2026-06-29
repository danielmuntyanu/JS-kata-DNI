import './style.css'
import calculateLetter from './scripts/calculateLetter.js'
import validateInput from './scripts/validateInput.js';

document.querySelector('#app').innerHTML = `
<section>
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



const calcBtn = document.querySelector("#calculateBtn");
const numberInput = document.querySelector("#numberInput");
const resultLabel = document.querySelector("#result");
const errorMsg = document.querySelector("#error");

const buttonHandler = () => {
  errorMsg.innerHTML = "";
  const inputData = numberInput.textContent;

  try {
    validateInput(inputData);
  } catch (error) {
    errorMsg.innerHTML = error.message;
  }

  const result = calculateLetter(inputData);

  resultLabel.innerHTML = result;
}

calcBtn.addEventListener("click", buttonHandler);
