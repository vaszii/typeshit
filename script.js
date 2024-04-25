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
    let odds1 = Math.random() * 9 + 1; // Az odds generálása 1 és 10 között
    let odds2 = Math.random() * 9 + 1; // Az odds generálása 1 és 10 között

    let totalBet1 = parseFloat(document.querySelectorAll(".school")[0].querySelector(".bet-input").value);
    let totalBet2 = parseFloat(document.querySelectorAll(".school")[1].querySelector(".bet-input").value);

    let winnings1 = 0;
    let winnings2 = 0;

    if (result < 3) {
        winnings1 = totalBet1 * odds1;
        winnings2 = totalBet2 * odds2;
    }

    let resultMsg = "<p>";
    if (winnings1 > winnings2) {
        resultMsg += "Nyertél! Nyeremény: " + winnings1.toFixed(2);
    } else if (winnings2 > winnings1) {
        resultMsg += "Nyertél! Nyeremény: " + winnings2.toFixed(2);
    } else {
        resultMsg += "Vesztettél!";
    }
    resultMsg += "</p>";

    document.body.innerHTML += resultMsg;
    document.getElementById("reset-btn").style.display = "block";
}

function placeBet(school) {
    let odds = Math.random() * 9 + 1; // Véletlenszerű odds generálása 1 és 10 között
    document.querySelector("#odds" + school).innerText = odds.toFixed(2);
}

function resetPage() {
    window.location.reload();
}
