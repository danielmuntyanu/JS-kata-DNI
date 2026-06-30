(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return e=Number(e),[`T`,`R`,`W`,`A`,`G`,`M`,`Y`,`F`,`P`,`D`,`X`,`B`,`N`,`J`,`Z`,`S`,`Q`,`V`,`H`,`L`,`C`,`K`,`E`][e%23]}function t(e){if(!e&&e!==0||![`string`,`number`].includes(typeof e)||(e=Number(e),isNaN(e)||!isFinite(e)||!Number.isInteger(e)))throw Error(`el dato introducido es incorrecto`);if(e<0||e>99999999)throw Error(`El dato introducido es incorrecto`)}document.querySelector(`#app`).innerHTML=`
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
`;var n=document.querySelector(`#mainSection`),r=document.querySelector(`#calculateBtn`),i=document.querySelector(`#numberInput`),a=document.querySelector(`#result`),o=document.querySelector(`#error`),s=document.querySelector(`#cancelBtn`);r.addEventListener(`click`,()=>{o.innerHTML=``;let n=i.value;try{t(n)}catch(e){o.innerHTML=e.message}a.innerHTML=e(n)}),s.addEventListener(`click`,()=>{n.innerHTML=`
    <h1>Program cancelled. Good buy!</h1>
  `});