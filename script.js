window.onload = function() {
    var age = prompt("Kérlek add meg az életkorodat:");
    if (age < 18) {
        document.body.innerHTML = "<p>Sajnáljuk, de nem játszhatsz még az oldalon.</p>";
    }
}

function startGame() {
    var result = Math.floor(Math.random() * 6); // Random eredmény generálása 0 és 5 között
    var bet1 = parseFloat(document.querySelector("#odds1").innerText);
    var bet2 = parseFloat(document.querySelector("#odds2").innerText);

    var totalBet = 0;

    if (!isNaN(bet1)) {
        totalBet += parseFloat(document.querySelectorAll(".school")[0].querySelector(".bet-input").value);
    }

    if (!isNaN(bet2)) {
        totalBet += parseFloat(document.querySelectorAll(".school")[1].querySelector(".bet-input").value);
    }

    if (result < 3) {
        var winnings = bet1 * totalBet;
        document.body.innerHTML += "<p>Nyertél! Nyeremény: " + winnings + "</p>";
    } else {
        document.body.innerHTML += "<p>Vesztettél!</p>";
    }
}

function placeBet(school) {
    var odds = Math.random() * 10; // Véletlenszerű odds generálása
    document.querySelector("#odds" + school).innerText = odds.toFixed(2);
}
