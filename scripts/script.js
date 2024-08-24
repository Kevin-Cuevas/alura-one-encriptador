"use strict";

// * Reglas de encriptacion:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// * DOM Elements
const appInput = document.querySelector(`.main-app-input`);
const appText = document.querySelector(`.main-aside-text`);

const btnEncrypt = document.querySelector(`.main-app-btn-encrypt`);
const btnDecrypt = document.querySelector(`.main-app-btn-decrypt`);
const btnCopy = document.querySelector(`.main-aside-btn`);

const asideHero = document.querySelector(`.main-aside-hero`);
const asideStrong = document.querySelector(`.main-aside-strong`);

// * Functions
const encrypt = function (text) {
  let result = "";

  for (const word of text) {
    switch (word) {
      case "a":
        result += "ai";
        break;
      case "e":
        result += "enter";
        break;
      case "i":
        result += "imes";
        break;
      case "o":
        result += "ober";
        break;
      case "u":
        result += "ufat";
        break;
      default:
        result += word;
        break;
    }
  }

  console.log(result);
  return result;
};

const decrypt = function (text) {
  const result = text
    .replaceAll(`ai`, `a`)
    .replaceAll(`enter`, `e`)
    .replaceAll(`imes`, `i`)
    .replaceAll(`ober`, `o`)
    .replaceAll(`ufat`, `u`);

  console.log(result);
  return result;
};

// * Encrypt button
btnEncrypt.addEventListener(`click`, function () {
  const userText = appInput.value;

  if (userText) {
    // & Hide the hero and strong
    asideHero.classList.add(`hide`);
    asideStrong.classList.add(`hide`);

    // & Show copy btn
    btnCopy.classList.remove(`hide`);

    // & Display the encrypted text
    appText.textContent = encrypt(userText);
  }
});

// * Decrypt button
btnDecrypt.addEventListener(`click`, function () {
  const userText = appInput.value;

  if (userText) {
    // & Hide the hero and strong
    asideHero.classList.add(`hide`);
    asideStrong.classList.add(`hide`);

    // & Show copy btn
    btnCopy.classList.remove(`hide`);

    // & Display the encrypted text
    appText.textContent = decrypt(userText);
  }
});

async function copyTextToClipboard() {
  try {
    await navigator.clipboard.writeText(appText.textContent);
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}

// Ejemplo de uso:
copyTextToClipboard("Hola, Mundo!");

btnCopy.addEventListener(`click`, copyTextToClipboard);
