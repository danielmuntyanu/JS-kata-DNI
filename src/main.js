import './style.css'
import calculateLetter from './scripts/calculateLetter.js'


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

</section>
`