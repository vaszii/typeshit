window.onload = function() {
    let age = prompt("Kérlek add meg az életkorodat:");
    if (age < 18) {
        let ageAlert = document.createElement("div");
        ageAlert.innerText = "Sajnáljuk, de nem játszhatsz még az oldalon.";
        ageAlert.style.position = "fixed";
        ageAlert.style.top = "50%";
        ageAlert.style.left = "50%";
        ageAlert.style.transform = "translate(-50%, -50%)";
        ageAlert.style.backgroundColor = "white";
        ageAlert.style.padding = "20px";
        ageAlert.style.border = "2px solid black";
        document.body.appendChild(ageAlert);
    } else {
        placeBet(1);
        placeBet(2);
        document.getElementById("start-btn").style.display = "block";
    }
}

function startGame() {
    let result = Math.floor(Math.random() * 6); // Random eredmény generálása 0 és 5 között
    let odds1 = parseFloat(document.querySelector("#odds1").innerText); // Az odds kiolvasása
    let odds2 = parseFloat(document.querySelector("#odds2").innerText); // Az odds kiolvasása

    let totalBet1 = parseFloat(document.querySelectorAll(".school")[0].querySelector(".bet-input").value);
    let totalBet2 = parseFloat(document.querySelectorAll(".school")[1].querySelector(".bet-input").value);

    // Ellenőrzés, hogy a tét mezők érvényes számokat tartalmaznak-e
    if (isNaN(totalBet1) || isNaN(totalBet2)) {
        alert("Kérlek, add meg a fogadási tétek érvényes számokként!");
        return;
    }

    let winnings1 = 0;
    let winnings2 = 0;

    if (result < 3) {
        winnings1 = totalBet1 * odds1;
        winnings2 = totalBet2 * odds2;
    }

    let resultMsg = "<p>";
    if (winnings1 > winnings2) {
        resultMsg += "Nyertél! Nyeremény: " + winnings1.toFixed(2) + " Ft";
    } else if (winnings2 > winnings1) {
        resultMsg += "Nyertél! Nyeremény: " + winnings2.toFixed(2) + " Ft";
    } else {
        resultMsg += "Vesztettél!";
    }
    resultMsg += "</p>";

    // Eredmények megjelenítése
    let resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML += "<p>Eredmény: " + result + " - " + (5 - result) + "</p>";
    resultsContainer.innerHTML += resultMsg;

    // Egyenleg frissítése
    let balance = document.getElementById("balance");
    let currentBalance = parseFloat(balance.innerText);
    currentBalance += winnings1 + winnings2 - (totalBet1 + totalBet2);
    balance.innerText = currentBalance.toFixed(2);

    document.getElementById("reset-btn").style.display = "block";
}

function placeBet(school) {
    let odds = Math.random() * 9 + 1; // Véletlenszerű odds generálása 1 és 10 között
    document.querySelector("#odds" + school).innerText = odds.toFixed(2);
}

function resetPage() {
    window.location.reload();
}
