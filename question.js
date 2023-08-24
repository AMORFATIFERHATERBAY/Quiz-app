function Question(questionText, answerOptions, correctAnswer) {
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;
}

Question.prototype.controlAnswer = function (answer) {
  return this.correctAnswer === answer;
};

let questions = [
  new Question(
    "1-Which is a javascript package management application?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "nuget" },
    "a"
  ),
  new Question(
    "2-Which is a .net package management application?",
    { a: "Node.js", b: "nuget", c: "Npm", d: "Typescript" },
    "b"
  ),
  new Question(
    "3-Which is not considered a frontend?",
    { a: "Css", b: "Html", c: "Javascript", d: "Sql" },
    "d"
  ),
  new Question(
    "4-Which is a .net package management application?",
    { a: "Node.js", b: "nuget", c: "Npm", d: "Typescript" },
    "b"
  ),
  new Question(
    "5-Between which tags are the javascript codes written?",
    {
      a: "&ltjavascript&gt...&lt/javascript&gt",
      b: "&lttype&gt...&lt/type&gt",
      c: "&ltjs&gt...&lt/js&gt",
      d: "&ltscript&gt...&lt/script&gt",
    },
    "d"
  ),
];
