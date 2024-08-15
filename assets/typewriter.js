const phrases = ["Welcome!", "I am KJ.", "I am a Comp Sci major at ASU."];
let currentPhrase = 0;
let letterCount = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const element = document.getElementById('typewriter');
    const fullText = phrases[currentPhrase];

    if (isDeleting) {
        currentText = fullText.substring(0, letterCount - 1);
        letterCount--;
    } else {
        currentText = fullText.substring(0, letterCount + 1);
        letterCount++;
    }

    element.innerHTML = currentText;

    let typingSpeed = 200;
    if (isDeleting) {
        typingSpeed /= 2; // Faster deleting speed
    }

    if (!isDeleting && currentText === fullText) {
        typingSpeed = 2500; // End of phrase pause
        isDeleting = true;
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typingSpeed = 500; // New phrase pause
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', function() {
    type(); // Start the typewriter effect
});
