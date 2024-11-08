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
// variables initialization and DOM elements selection
const ticketForm = document.getElementById("ticket-info");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const km = document.getElementById("km");
const eta = document.getElementById("eta");

const submit = document.getElementById("submit");
const reset = document.getElementById("reset");