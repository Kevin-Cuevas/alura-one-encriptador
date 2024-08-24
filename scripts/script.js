"use strict";

// * Reglas de encriptacion:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

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
