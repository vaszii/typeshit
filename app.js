//Az DOMContentLoaded egy esemény, amely akkor történik meg, amikor az adott HTML dokumentum betöltődött, és az összes CSS és JavaScript fájl be lett töltve, de a képek és más erőforrások lehet, hogy még nem.
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("ageModal");
  
    const hideModal = () => {
      modal.style.display = "none";
    };
  
    const yesBtn = document.getElementById("yesBtn");
    yesBtn.addEventListener("click", hideModal);
  
    const noBtn = document.getElementById("noBtn");
    noBtn.addEventListener("click", () => {
      window.close();
    });
  
    modal.style.display = "block";
});

//random szám generálása 1toll10ig
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    generateBtn.addEventListener('click', () => {
        const randomNum1 = Math.floor(Math.random() * 11);
        const randomNum2 = Math.floor(Math.random() * 11);
        box1.textContent = randomNum1;
        box2.textContent = randomNum2;
    });
});