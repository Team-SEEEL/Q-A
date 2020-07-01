/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
const faker = require('faker/locale/en_US.js');
const { db } = require('./index.js');
const QandA = require('./QandA.js');

db.dropDatabase((err, data) => {
  if (err) {
    console.log('did not delete');
  } else {
    console.log(data);
  }
});

const sampleQuestionData = [];
const sampleAnswerData = [];
const sampleProductData = [];

for (let j = 0; j < 20000; j += 1) {
  const randomAnswer = faker.company.catchPhrase();
  const randomVote = faker.random.number(200);
  const randomName = faker.name.findName();
  const isSeller = faker.random.boolean();
  function Answer(answer, votes, name, seller) {
    this.answer = randomAnswer;
    this.votes = randomVote;
    this.name = randomName;
    this.seller = isSeller;
  }

  const answers = new Answer(randomAnswer, randomVote, randomName, isSeller);

  sampleAnswerData.push(answers);
}

for (let i = 0; i < 10000; i += 1) {
  const numOfAnswers = Math.floor((Math.random() * 3));
  const answered = [];
  for (let k = 0; k < numOfAnswers; k += 1) {
    answered.push(sampleAnswerData.pop());
  }
  const randomQuestion = faker.hacker.phrase();
  function Question(body, arr) {
    this.body = randomQuestion + '?';
    this.answers = arr;
  }

  const questions = new Question(randomQuestion, answered);
  sampleQuestionData.push(questions);
}

for (let k = 0; k < 100; k += 1) {
  const questionArr = [];
  for (let x = 0; x < 100; x += 1) {
    questionArr.push(sampleQuestionData.pop());
  }
  function Product(index, arr) {
    this.index = k;
    this.questions = arr;
  }

  const products = new Product(k, questionArr);
  sampleProductData.push(products);
}

const insertQuestions = () => {
  QandA.Products.create(sampleProductData);
};

insertQuestions();
