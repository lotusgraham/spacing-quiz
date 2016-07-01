<<<<<<< HEAD:database/db/config.js
exports.config = {
=======
module.exports = {
>>>>>>> mvp-working:database/db/config.js
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
