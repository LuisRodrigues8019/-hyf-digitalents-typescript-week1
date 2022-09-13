import { encryptText } from "./modules/encrypt.js";

const originalInput = document.getElementById("plaintext");
const shiftInput = document.getElementById("shift");
const encryptedInput = document.getElementById("encryptedtext");

originalInput.addEventListener("input", (e) => {
  let originalMessage = originalInput.value;
  const shift = Number(shiftInput.value);
  if (shift) {
    const encrytMessage = encryptText(originalMessage, shift);
    encryptedInput.innerHTML = encrytMessage;
  }
});


