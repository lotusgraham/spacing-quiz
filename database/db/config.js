module.exports = {
    "production": {
        "url": process.env.MONGODB_URI
    },
    "test": {
        "url": "mongodb://localhost/spacing-quiz-test"
    },
    "development": {
        "url": "mongodb://localhost/spacing-quiz-dev"
    }
}
