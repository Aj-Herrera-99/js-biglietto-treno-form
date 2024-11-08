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
const priceKmText = document.getElementById("price-km-text");
// other variables
const pricePerKm = 0.21;
const alphanum = "abcdefghijklmnopqrstuvwyxz0123456789";
let isTicketGenerated = false;

priceKmText.innerHTML += pricePerKm + "€"
//* eventListeners
ticketForm.addEventListener("submit", handleSubmit);
ticketForm.addEventListener("reset", handleReset);

//* eventHandlers
function handleSubmit(e) {
    e.preventDefault();
    // variabili
    const finalPrice = calcPrice(km.value, eta.value);
    const ticketCode = randomStr(6, alphanum);
    const carriageNumber = getRndInteger(1, 8);
    const seatNumber = getRndInteger(1, 200);
    const trainNumber = getRndInteger(1000, 9999);
    // controllo se ci sono biglietti gia generati
    if (isTicketGenerated) {
        const ticket = document.getElementById("ticket");
        console.log(ticket);
        ticket.remove();
    }
    // genero html biglietto
    isTicketGenerated = true;
    ticketForm.insertAdjacentHTML(
        "afterend",
        `
        <div id="ticket" class="border border-5 border-danger bg-danger-subtle rounded-3 p-3">
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="h1">${finalPrice.toFixed(2) + "€"}</h2>
                <div>
                    <h3 class="text-uppercase text-muted">codice biglietto</h3>
                    <h2 class="text-uppercase">${ticketCode}</h2>
                </div>
            </div>
            <div class="d-flex justify-content-between my-2">
                <div class="d-flex flex-column">
                    <span>PARTENZA</span>
                    <span class="fw-bold">MILANO CENT.</span>
                    <span class="fw-bold">00:00</span>
                </div>
                <div class="d-flex flex-column">
                    <span>ARRIVO</span>
                    <span class="fw-bold">ROMA TIB.</span>
                    <span class="fw-bold">00:00</span>
                </div>
                <div class="d-flex flex-column">
                    <span>DATA PARTENZA</span>
                    <span class="fw-bold">XX</span>
                </div>
                <div class="d-flex flex-column">
                    <span>TRENO</span>
                    <span class="fw-bold">${trainNumber}</span>
                </div>
            </div>
            <table class="w-100 p-3">
                <tr class="text-bg-danger rounded-3">
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
    );
    // cancello input form
    fname.value = "";
    lname.value = "";
    km.value = "";
    eta.value = "";
}

function handleReset() {
    if(isTicketGenerated){
        const ticket = document.getElementById("ticket");
        ticket.remove();
        isTicketGenerated = false;
    }
}
//! functions
/**
 *
 * @param {number} km
 * @param {number} discount
 * @returns {number}
 */
function calcPrice(km, discount) {
    const basePrice = km * pricePerKm;
    return (basePrice * (100 - discount)) / 100;
}

/**
 *
 * @param {number} len //lunghezza codice
 * @param {string} arr //stringa dei caratteri del codice
 */

function randomStr(len, arr) {
    let ans = "";
    for (let i = len; i > 0; i--) {
        ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}
