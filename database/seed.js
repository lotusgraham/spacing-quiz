require('./db/connect');
var mongoose = require('mongoose');
var Question = require('./models/Question');

var seedTerms = [
    {
        question_pos: 1,
        german: "Apfel",
        english: "apple",
        definition: "A  round fruit; probably Snow White's least favorite food.",
        image: "https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg"
    },
    {
        question_pos: 2,
        german: "Pferd",
        english: "horse",
        definition: "A quadripedal animal which may or may not kick you to death.",
        image: "http://buzzsharer.com/wp-content/uploads/2015/06/beautiful-running-horse.jpg"
    },
    {
        question_pos: 3,
        german: "Geld",
        english: "gold",
        definition: "A precious mineral. Also a slang term for money.",
        image: "http://gold4power.com/wp-content/uploads/2016/02/gold.jpg"
    },
    {
        question_pos: 4,
        german: "Banane",
        english: "banana",
        definition: "A curved yellow fruit favored by apes, monkeys and sometimes people.",
        image: "http://www.theartofdoingstuff.com/wp-content/uploads/2013/03/Banana.jpg"
    },
    {
        question_pos: 5,
        german: "Essen",
        english: "to eat",
        definition: "To deliver essential nutrients into one's body.",
        image: "http://www.healthline.com/hlcmsresource/images/News/childrens-health/022315_peanut_BODY.jpg"
    },
    {
        question_pos: 6,
        german: "Schlafen",
        english: "to sleep",
        definition: "To konk out, if you will.",
        image: "http://healthexpedia.com/wp-content/uploads/2016/03/bbbdb_5-Ways-to-Sleep-Better-Every-Night-700x600.jpg"
    },
    {
        question_pos: 7,
        german: "schleppen",
        english: "to carry",
        definition: "Connotes a sense of begrudging resignation. Ex: 'I schlepped myself to the store on a hot day.'",
        image: "http://previews.123rf.com/images/deklofenak/deklofenak1010/deklofenak101000498/7944733-A-young-looking-man-trying-to-carry-all-the-boxes-Stock-Photo-moving.jpg"
    },
    {
        question_pos: 8,
        german: "Haus",
        english: "house",
        definition: "A domicile.",
        image: "http://wendypatton.com/wp-content/uploads/2014/07/house-siding.jpg"
    },
    {
        question_pos: 9,
        german: "Kinder",
        english: "children",
        definition: "Larval-stage humans.",
        image: "http://mvymca.org/sites/default/files/pictures/Kids.jpg"
    },
    {
        question_pos: 10,
        german: "Schmetterling",
        english: "butterfly",
        definition: "Adult-stage caterpillar.",
        image: "https://s-media-cache-ak0.pinimg.com/736x/7a/70/9e/7a709eadb6e2f75151bb707c0b294bab.jpg"
    }
]

Question.collection.drop(); // Resets database for seeding.

Question.create(seedTerms); // seeds each term in the array.
