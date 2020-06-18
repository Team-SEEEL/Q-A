var faker = require('faker/locale/en_US.js');
const db = require('./index.js')
const QandA = require('./QandA.js');



let sampleQuestionData = [];

let sampleAnswerData = [];

for (var i = 0; i < 100; i++) {
  var randomAnswer = faker.company.catchPhrase();
  var randomVote = faker.random.number();
  var randomName = faker.name.findName();
  var isSeller = faker.random.boolean();
  function Answer(answer, vote, name, seller) {
    this.answer = randomAnswer;
    this.vote = randomVote;
    this.name = randomName;
    this.seller = isSeller;
  }

  const answers = new Answer(randomAnswer, randomVote, randomName, isSeller);

  sampleAnswerData.push(answers);

  var randomQuestion = faker.hacker.phrase();
  function Question(body) {
    this.body = randomQuestion;
  }

  const questions = new Question(randomQuestion);
  sampleQuestionData.push(questions);
}

const insertQuestions = () => {
  Questions.create(sampleQuestionData)
  .then(() => db.disconnect());
};

const insertAnswers = () => {
  Answers.create(sampleAnswerData)
  .then(() => db.disconnect());
}

insertAnswers();
insertQuestions();