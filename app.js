function showText(tag, text) {
    let space = document.querySelector(tag);
    space.innerHTML = text;
}

showText('h1', 'Welcome to our Game!');
showText('h2', 'Try to discover the Secret Number');

let maxNumber = 20;
let secretNumber = parseInt(Math.random() * maxNumber+1);
console.log(secretNumber);
let guess;
let tries = 1;



// enquanto / while guessed number is different to the s.n.
while(guess !=secretNumber) {
    guess = prompt(`Choose a number between 1 and ${maxNumber}.`);
    console.log(`Guessed number: ${guess}`);
    console.log(`Compared results: ${guess == secretNumber}`);
    // if the guess is the equal to the secret number
    if (guess == secretNumber) {
        break;
    } else {
        if(guess > secretNumber) {
            console.log(`User guessed a bigger number, try again`);
            alert(`The Secret Number is smaller than ${guess}`);
        } else {
            console.log(`User guessed a smaller number, try again`);
            alert(`The Secret number is bigger than ${guess}`);
        }
        //tries = tries + 1;
        tries++
    }
}

let wordTry = tries > 1 ? 'tries': 'try';
alert(`Congrats! You discovered the Secret Number (${secretNumber}) in ${tries} ${wordTry}.`);
//if (tries > 1) {
//    alert(`Congrats! You discovered the Secret Number (${secretNumber}) in ${tries} tries.`);
//        console.log('The player was sucessful, rewards added');
//} else {
//alert(`Congrats! You discovered the Secret Number (${secretNumber}) in ${tries} try.`);
//        console.log('The player was sucessful, rewards added');
//}