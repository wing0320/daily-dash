// Sample challenge data
const challenges = [
    "Complete a 30-minute workout",
    "Write down 3 things you're grateful for",
    "Learn a new skill for 15 minutes",
    "Read 20 pages of a book",
    "Meditate for 10 minutes",
    "Cook a healthy meal",
    "Walk 10,000 steps"
];

// Load challenge from localStorage or generate a new one if it's a new day
function loadChallenge() {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('challengeDate');
    const storedChallenge = localStorage.getItem('challengeText');
    
    if (storedDate === today) {
        // If it's the same day, show the stored challenge
        document.getElementById('challenge-text').textContent = storedChallenge;
    } else {
        // If it's a new day, generate a new challenge
        const newChallenge = getRandomChallenge();
        document.getElementById('challenge-text').textContent = newChallenge;
        localStorage.setItem('challengeText', newChallenge);
        localStorage.setItem('challengeDate', today);
    }
}

// Get a random challenge from the list
function getRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    return challenges[randomIndex];
}

// Call loadChallenge on page load
window.onload = loadChallenge;