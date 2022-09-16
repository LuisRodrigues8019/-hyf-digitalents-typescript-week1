const createQuestion = ({
  question,
  correctAnswer,
  incorrectAnswers,
  category,
}) => {
  // Concat the answers and shuffle them

  const allAnswers = [correctAnswer, ...incorrectAnswers]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const $question = document.createElement("section");

  // Here you will need to modify the code
  // Add an element with id "questionCategory" to the HTML and set the value to based on the category property
  $question.innerHTML = `
        <h1 class="title">Quizz App</h1>
        <div class="container">
        <div class="box1">
        <div class="box2">
        <h1>${question}</h1>
        </div>
        <div class="box3">
        <h2 id="questionCategory">Category: ${category}</h2>
        </div>
        <div class="box4">
        <form class="question-options" action="" id="form">
            <input type="radio" name="answer" id="answer1" value="${allAnswers[0]}">
            <label for="answer1">${allAnswers[0]}</label><br>
            <input type="radio" name="answer" id="answer2" value="${allAnswers[1]}">
            <label for="answer2">${allAnswers[1]}</label><br>
            <input type="radio" name="answer" id="answer3" value="${allAnswers[2]}">
            <label for="answer3">${allAnswers[2]}</label><br>
            <input type="radio" name="answer" id="answer4" value="${allAnswers[3]}">
            <label for="answer4">${allAnswers[3]}</label><br>
            <input id="submitAnswer" type="submit" value="Submit" class="btn" />
        </form>
        </div>
        </div>
        </div>
    `;

  // Handle the submission of the form and validate the answer
  const $form = $question.querySelector(".question-options");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = $form.querySelector('input[name="answer"]:checked').value;

    let $response = $question.querySelector(".question-response");
    let $nextQuestion = $question.querySelector(".next-question");
    console.log({ $response });
    if (!$response) {
      $response = document.createElement("p");
      $nextQuestion = document.createElement("button");
      console.log({ $response });
    }
    $nextQuestion.classList.add("next-question");
    $nextQuestion.innerHTML = "next question";
    $response.classList.add("question-response");
    $response.innerHTML = "Sorry wrong answer";
    if (answer === correctAnswer) {
      $response.innerHTML = "Correct !!";
    }

    $question.appendChild($response);
    $question.appendChild($nextQuestion);
     $nextQuestion.addEventListener("click", () => {
      window.location.reload();
    });
  });
  return $question;
};

export { createQuestion };
