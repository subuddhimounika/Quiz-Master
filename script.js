let selectedCategory = '';
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let totalQuestions;
let progressBarFilled = document.getElementById('progress-bar');
let selectedAnswer = null;

function toggleTheme() {
document.body.classList.toggle('dark-theme');
document.querySelector('.quiz-container').classList.toggle('dark-theme');
document.querySelector('.navbar').classList.toggle('dark-theme');
document.querySelectorAll('.category-selection button, .difficulty-selection button, .options button').forEach(button => {
  button.classList.toggle('dark-theme');
});
document.querySelector('.progress-bar').classList.toggle('dark-theme');
document.querySelector('.progress-bar-filled').classList.toggle('dark-theme');
document.querySelector('.score').classList.toggle('dark-theme');
document.querySelector('footer').classList.toggle('dark-theme');

// Change the theme toggle icon
const themeIcon = document.querySelector('.theme-toggle');
themeIcon.innerHTML = document.body.classList.contains('dark-theme') ? '🌙' : '🌞';
}

// Rest of your existing JavaScript code here...

function selectCategory(category) {
    console.log('Category Selected:', category);
    selectedCategory = category;
    document.querySelector('.category-selection').style.display = 'none';
    document.getElementById('difficulty-selection').style.display = 'block';

    // Get the container where you want to display the content
    const contentContainer = document.getElementById('categoryContent');

    // Display different content based on the category selected
    switch (category) {
        case 'htmlQuizData':
            contentContainer.innerHTML = '<p>HTML Quiz</p>';
            break;
        case 'cssQuizData':
            contentContainer.innerHTML = '<p>CSS Quiz</p>';
            break;
        case 'jsQuizData':
            contentContainer.innerHTML = '<p>JavaScript Quiz</p>';
            break;
        case 'pythonQuizData':
            contentContainer.innerHTML = '<p>Python Quiz</p>';
            break;
        case 'javaQuizData':
            contentContainer.innerHTML = '<p>Java Quiz</p>';
            break;
        default:
            contentContainer.innerHTML = '<p>Select a category to view content.</p>';
            break;
    }

    document.getElementById('level').style.display = 'none';
    const numberOfQuestions = quizData[category].easy.length;
    document.getElementById('questions-count').innerText = `Total Questions: ${numberOfQuestions}`;
    document.getElementById('category-info').style.display = 'block';
}

function startQuiz(difficulty) {
    document.getElementById('level').innerText=`Level: ${difficulty}`;
    document.getElementById('level').style.display = 'block';
    currentQuiz = quizData[selectedCategory][difficulty];
    totalQuestions = currentQuiz.length;
    currentQuestionIndex = 0;
    score = 0;
    // Shuffle questions
    shuffleQuestions();
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('score').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'inline-block';
    startTimer(20);
    showQuestion();
}

function startTimer(seconds) {
    const timerElement = document.getElementById('timer');
    let timeLeft = seconds;
    timerElement.innerText = `Time left: ${timeLeft} seconds`;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showCorrectAnswer();
            setTimeout(nextQuestion, 1000);
        }
    }, 1000);
}

function showQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];
    document.getElementById('question').innerText = 
    `${currentQuestionIndex + 1}. ${questionData.question}`; // Added question number
    
   // questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    const shuffledOptions = questionData.options.sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(button, questionData.correctAnswer);
        optionsContainer.appendChild(button);
    });

    document.getElementById('confirm-btn').style.display = 'none';
    document.getElementById('clear-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(selectedButton, correctAnswer) {
    selectedAnswer = selectedButton.innerText;
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => button.classList.remove('selected'));
    selectedButton.classList.add('selected');
    document.getElementById('confirm-btn').style.display = 'inline-block';
    document.getElementById('clear-btn').style.display = 'inline-block';
}

function confirmAnswer() {
    const questionData = currentQuiz[currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;

    const buttons = document.querySelectorAll('#options button');
    let isCorrect = false;

    buttons.forEach((button) => {
        if (button.innerText === correctAnswer) {
            button.classList.add('correct');
            if (selectedAnswer === correctAnswer) {
                button.innerHTML += " <span class='tick'>✔</span>";
                isCorrect = true;
            } else {
                button.innerHTML += " <span class='tick'>✔</span>";
            }
        }

        if (button.innerText === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.classList.add('wrong');
            button.innerHTML += " <span class='cross'>❌</span>";
        }

        button.disabled = true;
    });

    if (isCorrect) {
        score++;
    }

    document.getElementById('confirm-btn').style.display = 'none';
    document.getElementById('clear-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
}

function showCorrectAnswer() {
    const questionData = currentQuiz[currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;
    
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach((button) => {
        if (button.innerText === correctAnswer) {
            button.classList.add('correct');
            button.innerHTML += " <span class='tick'>✔</span>";
        }
        button.disabled = true;
    });

    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        startTimer(20);
        showQuestion();
        updateProgressBar();
    } else {
        submitQuiz();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBarFilled.style.width = `${progress}%`;
}

function submitQuiz() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('final-score').innerText = score;
    document.getElementById('total-questions').innerText = totalQuestions;
}

function clearAnswer() {
    // Reset the selected answer to null
    selectedAnswer = null;

    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => button.classList.remove('selected'));

    // Hide the 'confirm' button again
    document.getElementById('confirm-btn').style.display = 'inline-block';
    document.getElementById('clear-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    progressBarFilled.style.width = '0%';
    shuffleQuestions();
    startTimer(20);
    showQuestion();
    updateProgressBar();
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('score').style.display = 'none';
}

function shuffleQuestions() {
    currentQuiz = currentQuiz.sort(() => Math.random() - 0.5);
}
function exitQuiz() {
    const userConfirmation = confirm('Are you sure you want to exit the quiz? Your progress will be lost.');
    if (userConfirmation) {
        location.reload(); // Exit and reload the page
    }
}