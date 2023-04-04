let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const feetToMetre = 0.3048 
const litreToGallon =  0.264172
const gallonToLitre =  3.78541
const kiloToPound =  2.204
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
  
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMetre).toFixed(3)} metres ` 
    
    volumeEl.textContent = `${baseValue} litre = ${(baseValue * litreToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLitre).toFixed(3)} litres` 
    
    massEl.textContent = `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilograms` 

})

