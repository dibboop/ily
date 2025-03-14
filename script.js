document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("hackText");
    let button = document.getElementById("revealButton");

    let hackMessages = [
        "Initializing system breach...",
        "Bypassing firewall...",
        "Accessing personal files...",
        "Decrypting sensitive data...",
        "Searching for the most valuable information...",
        "ERROR! SYSTEM OVERRIDE DETECTED!",
        "Redirecting..."
    ];

    let index = 0;

    function typeMessage() {
        if (index < hackMessages.length) {
            text.innerHTML = hackMessages[index];
            index++;
            setTimeout(typeMessage, 2000); // Show next message every 2 seconds
        } else {
            // After all messages, reveal the cute mode!
            setTimeout(revealCuteMode, 2000);
        }
    }

    function revealCuteMode() {
        document.body.classList.add("cute-mode");
        text.innerHTML = "Hehe, just kidding! You've been hacked... by love 💖";
        button.style.display = "inline-block"; // Show the button
    }

    typeMessage(); // Start the typing effect
});
