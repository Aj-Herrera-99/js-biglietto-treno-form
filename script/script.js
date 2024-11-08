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

//* DOM elements selection
const ticketForm = document.getElementById("ticket-info");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const km = document.getElementById("km");
const eta = document.getElementById("eta");

const priceText = document.getElementById("final-price");

//* other variables
const pricePerKm = .21; 

//* eventListeners
ticketForm.addEventListener("submit", handleSubmit)

//* eventHandlers
function handleSubmit(e) {
    e.preventDefault();
    // variabile per il risultato
    const finalPrice = calcPrice(km.value, eta.value);
    // inserisco come innerText di un elemento il valore di finalPrice
    priceText.innerText = finalPrice.toFixed(2) + "€";
} 

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