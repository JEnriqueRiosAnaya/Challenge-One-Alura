// Función para encriptar el texto
function encryptText(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    switch (letter) {
      case "e":
        encryptedText += "enter";
        break;
      case "i":
        encryptedText += "imes";
        break;
      case "a":
        encryptedText += "ai";
        break;
      case "o":
        encryptedText += "ober";
        break;
      case "u":
        encryptedText += "ufat";
        break;
      default:
        encryptedText += letter;
    }
  }
  return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text) {
  let decryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (letter == "e" && text.slice(i, i + 5) == "enter") {
      decryptedText += "e";
      i += 4;
    } else if (letter == "i" && text.slice(i, i + 4) == "imes") {
      decryptedText += "i";
      i += 3;
    } else if (letter == "a" && text.slice(i, i + 2) == "ai") {
      decryptedText += "a";
      i += 1;
    } else if (letter == "o" && text.slice(i, i + 4) == "ober") {
      decryptedText += "o";
      i += 3;
    } else if (letter == "u" && text.slice(i, i + 4) == "ufat") {
      decryptedText += "u";
      i += 3;
    } else {
      decryptedText += letter;
    }
  }
  return decryptedText;
}

// Obtener los elementos HTML
const inputTextArea = document.getElementById("input-text");
const outputTextArea = document.getElementById("output-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");

// Función para validar el texto ingresado en el inputTextArea
inputTextArea.addEventListener("input", function () {
  let inputValue = inputTextArea.value;
  inputValue = inputValue.toLowerCase().replace(/[^a-z\s]/g, ""); // Convertir a minúsculas y quitar caracteres no permitidos
  inputTextArea.value = inputValue;
});

// Función para encriptar el texto cuando se presiona el botón "Encriptar"
encryptBtn.addEventListener("click", function () {
  let inputText = inputTextArea.value.toLowerCase();
  let encryptedText = encryptText(inputText);
  outputTextArea.value = encryptedText;
});

// Función para desencriptar el texto cuando se presiona el botón "Desencriptar"
decryptBtn.addEventListener("click", function () {
  let inputText = inputTextArea.value.toLowerCase();
  let decryptedText = decryptText(inputText);
  outputTextArea.value = decryptedText;
});

// Función para copiar el texto en el portapapeles cuando se presiona el botón "Copiar"
copyBtn.addEventListener("click", function () {
  outputTextArea.select();
  document.execCommand("copy");

  // Mostrar alerta de SweetAlert2
  Swal.fire({
    title: "Texto copiado",
    text: "El texto se ha copiado al portapapeles.",
    icon: "success",
    timer: 1500, // Tiempo en milisegundos para cerrar automáticamente la alerta
    showConfirmButton: false // Ocultar el botón de confirmación
  });
});

//Limpiar los textareas
const btnLimpiar = document.getElementById("limpiar");
  btnLimpiar.addEventListener("click", function() {
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").value = "";
  });

