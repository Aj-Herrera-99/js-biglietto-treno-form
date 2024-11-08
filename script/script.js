"use strict";
/**
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
 */

// DOM elements selection
const ticketForm = document.getElementById("ticket-info");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const km = document.getElementById("km");
const eta = document.getElementById("eta");

const priceText = document.getElementById("final-price");

// other variables
const pricePerKm = .21; 
const alphanum = "abcdefghijklmnopqrstuvwyxz0123456789";

//* eventListeners
ticketForm.addEventListener("submit", handleSubmit)

//* eventHandlers
function handleSubmit(e) {
    e.preventDefault();
    // variabili
    const finalPrice = calcPrice(km.value, eta.value);
    const ticketCode = randomStr(6, alphanum);
    const carriageNumber = getRndInteger(1, 8);
    const seatNumber = getRndInteger(1, 200);
    const trainNumber = getRndInteger(1, 20);
    // genero html biglietto 
    ticketForm.insertAdjacentHTML("afterend", 
        `
        <div class="border border-1 border-dark rounded-3 p-3">
            <div class="d-flex justify-content-between align-items-center">
                <h2>${finalPrice.toFixed(2) + "€"}</h2>
                <div>
                    <h3 class="text-uppercase">codice biglietto</h3>
                    <h2 class="text-uppercase">${ticketCode}</h2>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                    <span>PARTENZA</span>
                    <span>MILANO CENT.</span>
                    <span>00:00</span>
                </div>
                <div class="d-flex flex-column">
                    <span>ARRIVO</span>
                    <span>ROMA TIB.</span>
                    <span>00:00</span>
                </div>
                <div class="d-flex flex-column">
                    <span>DATA PARTENZA</span>
                    <span id="ticket-date">XX</span>
                </div>
                <div class="d-flex flex-column">
                    <span>TRENO</span>
                    <span>${trainNumber}</span>
                </div>
            </div>
            <table class="border border-1 border-danger w-100">
                <tr>
                    <th class="w-25">NOME PASSEGGERO</th>
                    <th>TIPO</th>
                    <th>EXTRA</th>
                    <th>CARROZZA</th>
                    <th>POSTO</th>
                </tr>
                <tr>
                    <td>${fname.value} ${lname.value}</td>
                    <td>${eta.options[eta.selectedIndex].innerHTML}</td>
                    <td></td>
                    <td>${carriageNumber}</td>
                    <td>${seatNumber}</td>

                </tr>
            </table>
        </div>
        `
    )
} 
console.log();

//! functions
/**
 * 
 * @param {number} km 
 * @param {number} discount 
 * @returns {number}
 */
function calcPrice(km, discount){
    const basePrice = km * pricePerKm;
    return (basePrice * (100 - discount)) / 100;
}

/**
 * 
 * @param {number} len //lunghezza codice
 * @param {string} arr //stringa dei caratteri del codice 
 */

function randomStr(len, arr) {
    let ans = '';
    for (let i = len; i > 0; i--) {
        ans +=
            arr[(Math.floor(Math.random() * arr.length))];
    }
    return ans;
}

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}