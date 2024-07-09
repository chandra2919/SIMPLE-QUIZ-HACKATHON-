document.addEventListener("DOMContentLoaded", function() {
  const pythonQuestions = [
      {
          question: "What is the keyword used to define a function in Python?",
          options: ["A) def", "B) function", "C) init", "D) none"],
          answer: "A) def"
      },
      {
          question: "Which statement is used to print something in Python?",
          options: ["A) display", "B) print", "C) show", "D) output"],
          answer: "B) print"
      },
      {
          question: "How do you start a single-line comment in Python?",
          options: ["A) //", "B) /*", "C) #", "D) --"],
          answer: "C) #"
      },
      {
          question: "Which data type is immutable in Python?",
          options: ["A) list", "B) tuple", "C) dictionary", "D) set"],
          answer: "B) tuple"
      },
      {
          question: "What does the 'input' function do in Python?",
          options: ["A) Displays output", "B) Takes user input", "C) Generates random numbers", "D) Imports libraries"],
          answer: "B) Takes user input"
      }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionElement = document.getElementById('question');
  const optionsForm = document.getElementById('options');
  const resultElement = document.getElementById('result');

  function showQuestion() {
      const current = pythonQuestions[currentQuestion];
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
      const current = pythonQuestions[currentQuestion];
      if (selectedOption.value === current.answer) {
          score++;
          resultElement.innerHTML = '<p class="correct">Correct! &#x2713;</p>';
      } else {
          resultElement.innerHTML = `<p class="incorrect">Incorrect! &#x2717; The correct answer is: ${current.answer}</p>`;
      }
      currentQuestion++;
      if (currentQuestion < pythonQuestions.length) {
          showQuestion();
      } else {
          showResult();
      }
  }

  function showResult() {
      questionElement.style.display = 'none';
      optionsForm.style.display = 'none';
      document.getElementById('submit-btn').style.display = 'none';
      resultElement.textContent = `Quiz completed! You got ${score} out of ${pythonQuestions.length} questions correct.\u2713`;
  }

  document.getElementById('submit-btn').addEventListener('click', checkAnswer);

  showQuestion();
});
