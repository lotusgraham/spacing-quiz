require('./db/connect');
var mongoose = require('mongoose');
var Question = require('./models/Question');
var User = require('./models/user');

var seedTerms = [
    {
        question_pos: 1,
        german: "Apfel",
        english: "Apple",
        definition: "A  round fruit; probably Snow White's least favorite food.",
        image: "./images/apple.jpg"
    },
    {
        question_pos: 2,
        german: "Pferd",
        english: "Horse",
        definition: "A quadripedal animal which may or may not kick you to death.",
        image: "./images/horse.jpg"
    },
    {
        question_pos: 3,
        german: "Geld",
        english: "Gold",
        definition: "A precious mineral. Also a slang term for money.",
        image: "./images/gold.jpg"
    },
    {
        question_pos: 4,
        german: "Banane",
        english: "Banana",
        definition: "A curved yellow fruit favored by apes, monkeys and sometimes people.",
        image: "./images/banana.jpg"
    },
    {
        question_pos: 5,
        german: "Essen",
        english: "To eat",
        definition: "To deliver essential nutrients into one's body.",
        image: "./images/kidEating.jpg"
    },
    {
        question_pos: 6,
        german: "Schlafen",
        english: "To sleep",
        definition: "To konk out, if you will.",
        image: "./images/sleeping.jpg"
    },
    {
        question_pos: 7,
        german: "schleppen",
        english: "to carry",
        definition: "Connotes a sense of begrudging resignation. Ex: 'I schlepped myself to the store on a hot day.'",
        image: "./images/schlepping.jpg"
    },
    {
        question_pos: 8,
        german: "Haus",
        english: "house",
        definition: "A domicile.",
        image: "./images/house.jpg"
    },
    {
        question_pos: 9,
        german: "Kinder",
        english: "children",
        definition: "Larval-stage humans.",
        image: "./images/kids.jpg"
    },
    {
        question_pos: 10,
        german: "Schmetterling",
        english: "butterfly",
        definition: "Adult-stage caterpillar.",
        image: "./images/butterfly.jpg"
    }
]

    Question.collection.drop(); // Resets database for seeding.
    // User.collection.drop();

    Question.create(seedTerms); // seeds each term in the array.

    process.exit(0);
