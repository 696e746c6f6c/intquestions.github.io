// Hi this is a simple questions game
// Just wanted to mention, this is a pretty nice game that I've created. Although it was part of my IT highschool project. So, anyway I decided to post it on my GitHuB.
// Also please stop trying to pop an XSS. You won't pop it because .innerText is being used, so it's pretty impossible.
// Thank you for your understanding

let round = {
    1: "First round",
    2: "Second round",
    3: "Third round",
    4: "Fourth round",
    5: "Fifth round"
};

let flashcards = {
    1: ["Does int have a HackerOne profile?", "Yes"],
    2: ["What is int's favorite sink and source for XSS?", ".innerHTML and location.search source"],
    3: ["How old is int?", "17"],
    4: ["What is int's favorite programming language and framework?", "JavaScript and NodeJS"],
    5: ["Does int have bitchez?", "No bitchez"],
};

let final = "Let's make it to the finals!";

let disqualified = "Either make it to the finals or get disqualified!";

let score = 0;
let current = 1;

function askmeaQuestion(roundLol, flashcards) {
    let question = score;
    let list = document.getElementById("qa-list");
    let item = document.getElementById("qa-item");
    let resultDiv = document.getElementById("result");
    let answer = document.getElementById("answer").value;
    let flashAnswer = answer;
    item.innerText = flashcards[roundLol][0];
    list.appendChild(item);

    if (answer && answer.toLowerCase() === flashcards[roundLol][1].toLowerCase()) {
        resultDiv.innerText = "Correct!"
        score++;
        if (score == 10) {
            resultDiv.innerText = "You've completed this game successfully";
            document.getElementById("score").innerText = score;
        }
        let scoreElement = document.getElementById("score");
        scoreElement.innerText = `Your final score is ${score}.`;
        resultDiv.style.opacity = 0;
        setTimeout(() => {
            resultDiv.style.opacity = 1;
        }, 500);
        return true;
    } else {
        if (roundLol === 5) {
            resultDiv.innerText = "You've completed this game successfully";
        } else {
            resultDiv.innerText = "That's not correct!";
        }
        resultDiv.style.opacity = 0;
        setTimeout(() => {
            resultDiv.style.opacity = 1;
        }, 500);
        return false;
    }
}

function myGame() {
    if (current <= 12) {
        askmeaQuestion(current, flashcards);
        current++;
    } else {
        myScore(score);
    }
}

function myScore(score) {
    if (final === "Let's make it to the finals!") {
        console.log("I hope you like this challenge!")
    } else {
        console.log("If you don't like it, ignore it")
    }
    console.log(`This is your final score ${score}`);
}

function myfunc() {
    let enjoy = "If you got all correct answers, that's actually good to know";
    console.log("Thank you for playing this game!");

    if (final) {
        console.log("I hope you like this challenge!")
    } else {
        console.log("If you don't like it, ignore it")
    }
    myScore(score);
}

function disqualification(disqualified) {
    if (disqualified) {
        console.log("Either get qualified or disqualified!")
    } else {
        console.log("Get disqualified!")
    }
}

function submitHandler(event) {
    event.preventDefault();
    let result = askmeaQuestion(current - 1, flashcards);
    if (result) {
        score++;
    }
    disqualification(disqualified);
}

function startHandler() {
    myGame();
}

document.getElementById("submit").addEventListener("click", submitHandler);
document.getElementById("lol").addEventListener("click", startHandler);

// Thanks for playing this little game
// End
