
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        
        if (!nameInput) {
            console.error("Name input not found!");
            return;
        }

        const name = nameInput.value.trim();

        formStatus.textContent =
            "Thank you, " + name + "! Your form was submitted successfully.";

        contactForm.reset();
    });
}

/* Dark and Light Mode Toggle */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌙 Dark Mode";
        } else {
            themeToggle.textContent = "☀️ Light Mode";
        }
    });
}

const typingElement = document.getElementById("typing");

if (typingElement) {
    const words = [
        "Web Developer",
        "C++ Programmer",
        "DSA Learner",
        "Future Software Engineer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        let delay = deleting ? 60 : 110;

        if (!deleting && charIndex === currentWord.length) {
            deleting = true;
            delay = 1200;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 400;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
}

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
