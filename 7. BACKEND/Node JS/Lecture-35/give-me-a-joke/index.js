//  https://www.npmjs.com/package/give-me-a-joke

// const keyword isliye rakhte hai kyounki required packege change nahi hoga -> good practice
const giveMeAJoke = require('give-me-a-joke');

// as it is copy kara hai -> reading documentation is compulsory
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});
