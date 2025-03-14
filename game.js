function startGame() {
    document.getElementById("gameArea").style.display = "block";
}

function choosePath(choice) {
    let message = document.getElementById("message");

    if (choice === "right") {
        message.innerHTML = "💖 You chose the right path! A treasure chest appears!";
        setTimeout(() => {
            window.location.href = "message.html"; // Redirects to the final page
        }, 2000);
    } else {
        message.innerHTML = "💔 Oops, wrong path! Try again!";
    }
}
