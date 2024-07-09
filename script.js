const questions = [
  {
    question: "What is the purpose of the 'pass' statement in Python?",
    options: ["A)To terminate the loop", "B)To skip the current iteration", "C)To raise an exception", "D)To define a function"],
    answer: "To skip the current iteration"
  },
  {
    question: "What does the 'lambda' keyword signify in Python?",
    options: ["A keyword for defining functions", "A special type of variable", "A way to access global variables", "An anonymous function"],
    answer: "An anonymous function"
  },
  {
    question: "How do you open a file 'file.txt' in read mode in Python?",
    options: ["file = open('file.txt', 'r')", "file = open('file.txt', 'w')", "file = open('file.txt', 'a')", "file = open('file.txt', 'rb')"],
    answer: "file = open('file.txt', 'r')"
  },
  {
    question: "What is the output of '3 * 2 ** 3' in Python?",
    options: ["48", "12", "24", "18"],
    answer: "24"
  },
  {
    question: "Which module in Python can be used for regular expressions?",
    options: ["re", "os", "math", "sys"],
    answer: "re"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsForm = document.getElementById('options');
const resultElement = document.getElementById('result');

function showQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = `${currentQuestion + 1}. ${current.question}`;
  optionsForm.innerHTML = '';
  current.options.forEach((option, index) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.value = option;
    const label = document.createElement('label');
    label.textContent = option;
    optionsForm.appendChild(input);
    optionsForm.appendChild(label);
    optionsForm.appendChild(document.createElement('br'));
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }
  const current = questions[currentQuestion];
  if (selectedOption.value === current.answer) {
    score++;
     resultElement.innerHTML = '<p class="correct">Correct! ;</p>';
} else {
    resultElement.innerHTML = `<p class="incorrect">Incorrect! ; The correct answer is: ${current.answer}</p>`;
}
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = 'none';
  optionsForm.style.display = 'none';
  document.getElementById('submit-btn').style.display = 'none';
  resultElement.textContent = `Quiz completed! You got ${score} out of ${questions.length} questions correct. `;
}

document.getElementById('submit-btn').addEventListener('click', checkAnswer);

showQuestion();