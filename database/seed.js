var faker = require('faker/locale/en_US.js');
const {db} = require('./index.js')
const QandA = require('./QandA.js');

db.dropDatabase( (err, data) => {
  if (err) { console.log( 'did not delete' ) }
  else {
    console.log(data);
  }
} )


let sampleQuestionData = [];
let sampleAnswerData = [];

let numOfAnswers = Math.floor((Math.random() * 20 + 1) / 10)

for (var j = 0; j < 200; j++) {
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
}

let copiedAns = sampleAnswerData.slice();

for (var i = 0; i < 100; i++) {
  let answered = [];
  for (var k = 0; k < numOfAnswers; k++) {
    answered.push(copiedAns.pop());
  }


  var randomQuestion = faker.hacker.phrase();
  function Question(body) {
    this.body = randomQuestion;
    this.answers = answered;
  }

  const questions = new Question(randomQuestion);
  sampleQuestionData.push(questions);
}

const insertQuestions = () => {
  QandA.Questions.create(sampleQuestionData)
};

const insertAnswers = () => {
  QandA.Answers.create(sampleAnswerData)
  .then(() => {db.close()})
}

insertQuestions();
insertAnswers();





