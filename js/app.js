// ------------------------ Screen Management ------------------------
const screens = document.querySelectorAll('.screen');

function showScreen(screenId) {
    screens.forEach(function(screen) {
        screen.classList.remove('active');
    });

    document.getElementById(screenId).classList.add('active');
}

// ------------------------ Buttons ------------------------
document.getElementById('start-btn').addEventListener('click', function() {
    showScreen('quiz-screen');
});

document.getElementById('finish-btn').addEventListener('click', function() {
    showScreen('result-screen');
});

document.getElementById('home-btn').addEventListener('click', function() {
    showScreen('home-screen');
});

// ------------------------ Test Score ------------------------
let score = 3;
document.getElementById('final-score').textContent = score;

