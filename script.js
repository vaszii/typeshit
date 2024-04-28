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
        ageAlert.style.padding = "200px 300px";
        ageAlert.style.border = "5px solid black";
        ageAlert.style.fontSize = "25px";
        ageAlert.style.textAlign = "center";
        ageAlert.style.fontWeight = "bold";
        document.body.appendChild(ageAlert);
    } else {
        placeBet(1);
        placeBet(2);
        document.getElementById("start-btn").style.display = "block";
    }
}

function startGame() {
    let result1 = Math.floor(Math.random() * 6) + 1; // VBJ eredménye
    let result2 = Math.floor(Math.random() * 6) + 1; // Berze eredménye
    let odds1 = parseFloat(document.querySelector("#odds1").innerText); // Az odds kiolvasása
    let odds2 = parseFloat(document.querySelector("#odds2").innerText); // Az odds kiolvasása

    let totalBet1 = parseFloat(document.querySelectorAll(".bet-box input")[0].value);
    let totalBet2 = parseFloat(document.querySelectorAll(".bet-box input")[1].value);

    let winnings1 = 0;
    let winnings2 = 0;

    if (result1 > result2) {
        winnings1 = totalBet1 * odds1;
    } else if (result2 > result1) {
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
    resultsContainer.style.fontWeight = "bold";
    resultsContainer.style.fontSize = "20px";
    resultsContainer.innerHTML += "<p>Eredmény: " + result1 + " - " + result2 + "</p>";
    resultsContainer.innerHTML += resultMsg;

    // Egyenleg frissítése
    let balance = document.getElementById("balance");
    let currentBalance = parseFloat(balance.innerText);
    currentBalance -= totalBet1 + totalBet2; // A fogadott összegek levonása
    currentBalance += winnings1 + winnings2; // A nyeremények hozzáadása
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
