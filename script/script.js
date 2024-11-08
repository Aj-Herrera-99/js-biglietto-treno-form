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

//* eventListeners
ticketForm.addEventListener("submit", handleSubmit)

//* eventHandlers
function handleSubmit(e) {
    e.preventDefault();
    // variabile per il risultato
    const finalPrice = calcPrice(km.value, eta.value);
    // inserisco come innerText di un elemento il valore di finalPrice
    ticketForm.insertAdjacentHTML("afterend", 
        `
        <div class="border border-1 border-dark rounded-3 p-3">
            <div class="d-flex justify-content-between align-items-center">
                <h2>${finalPrice.toFixed(2) + "€"}</h2>
                <div>
                    <h3 class="text-uppercase">codice biglietto</h3>
                    <h2 id="ticket-code" class="text-uppercase">alphanumeric</h2>
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
                    <span id="ticket-date"></span>
                </div>
                <div class="d-flex flex-column">
                    <span>TRENO</span>
                    <span id="train-number"></span>
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
                    <td id="carriage-number"></td>
                    <td id="seat-number"></td>

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