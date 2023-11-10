const back = document.getElementById("back");
const next = document.getElementById("next");
const backToStart = document.getElementById("back-to-start");

const availability = document.getElementById("availability");
const confidentiality = document.getElementById("confidentiality");
const closed1 = document.getElementById("closed");
const correct = document.getElementById("correct");
const open1 = document.getElementById("open");
const peek = document.getElementById("peek");
const roll = document.getElementById("roll");
const smile = document.getElementById("smile");
const sleep = document.getElementById("sleep");
const wrong = document.getElementById("wrong");
const yawn = document.getElementById("yawn");


const speech = document.getElementById("speech");
const pwd = document.getElementById("password");
const no = document.getElementById("no");
const yes = document.getElementById("yes");
const quiz = document.getElementById("quiz");
const quizRow1 = document.getElementById("quiz-row-1");
const quizRow2 = document.getElementById("quiz-row-2");

const score = document.getElementById("score");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");

const sequence = [
    // 0
    {
        speech: "",
        image: "images/logo.png",
        next: 1,
        back: null
    },
    { // 1
        speech: "Hi! I'm Stoffel the red panda!",
        image: "images/roll.jpeg",
        next: 2,
        back: 0
    },
    { // 2
        speech: "I'm here to teach you about the security triad &#128522;",
        image: "images/open.jpeg",
        next: 3,
        back: 1
    },
    { // 3
        speech: "Before we start, please enter your password below &#128516;",
        image: "images/closed.jpeg",
        next: 4,
        back: 2
    },
    { // 4 asks for password
        speech: "Okay, one more question before we begin... was that your real password? &#129320;",
        image: "images/peek.jpeg",
        next: null,
        back: null,
    },
    { // 5
        speech: "Good! You passed the first lesson! Never share your password with anyone &#128521;",
        image: "images/correct.jpeg",
        next: 7,
        back: 3
    },
    { // 6
        speech: "Shame on you, You failed the first lesson &#128561 Never share your password with anyone!",
        image: "images/yawn.jpeg",
        next: 7,
        back: 3
    },
    { // 7 introduces the triad
        speech: "There are three main principles of security: confidentiality, integrity, and availability.",
        image: "images/open.jpeg",
        next: 8,
        back: 3
    },
    { // 8 confidentiality
        speech: "First off, we have confidentiality. This means that only authorized users should be able to access information &#128373;",
        image: "images/confidentiality.jpeg",
        next: 9,
        back: 7
    },
    { // 9
        speech: "Pop quiz: Who should have access to your email password?",
        image: "images/closed.jpeg",
        correct: 11,
        wrong: 10
    },
    { // 10
        speech: "Wrong! Only you should have access to your email password!",
        image: "images/wrong.jpeg",
        next: 12,
        back: 9
    },
    { // 11
        speech: "Correct! Only you should have access to your email password!",
        image: "images/correct.jpeg",
        next: 12,
        back: 9
    },
    { // 12
        speech: "Confidentiality is important because it prevents unauthorized users from accessing sensitive information &#128683; &#128520;",
        image: "images/confidentiality.jpeg",
        next: 13,
        back: 9
    },
    { // 13
        speech: "Which of the following best describes the relationship between confidentiality and privacy? &#129300",
        image: "images/closed.jpeg",
        correct: 15,
        wrong: [14, 17, 18]
    },
    { // 14
        speech: "Wrong! Confidentiality is concerned with protecting sensitive information from unauthorized access or disclosure, while privacy is a broader concept that refers to an individual's right to control their personal information and how it is used &#128577;",
        image: "images/wrong.jpeg",
        next: 16,
        back: 13
    },
    { // 15
        speech: "Correct! Confidentiality is concerned with protecting sensitive information from unauthorized access or disclosure, while privacy is a broader concept that refers to an individual's right to control their personal information and how it is used &#128175",
        image: "images/correct.jpeg",
        next: 16,
        back: 13
    },
    { // 16
        speech: "Confidentiality is a key aspect of privacy, but privacy also encompasses other elements such as data ownership, data accuracy, and data usage. Therefore, confidentiality can be seen as a subset of privacy.",
        image: "images/smile.jpeg",
        next: 19,
        back: 13
    },
    { // 17
        speech: "Wrong! Confidentiality and privacy are absolutely related! &#128544",
        image: "images/wrong.jpeg",
        next: 16,
        back: 13
    },
    { // 18
        speech: "Wrong! Although confidentiality and privacy are related, they are not the same &#128533",
        image: "images/wrong.jpeg",
        next: 16,
        back: 13
    },
    { // 19
        speech: "Great! Now let's move on to integrity, integrity is the principle that data should neither be tampered with nor accidentally corrupted &#128737;",
        image: "images/sleep.jpeg",
        next: 20,
        back: 16
    },
    { // 20
        speech: "Which of these would compromise a system's integrity?",
        image: "images/open.jpeg",
        correct: 22,
        wrong: [21, 23, 24]
    },
    { // 21
        speech: "Wrong! A user's password being leaked would compromise the system's confidentality, not its integrity! &#128565",
        image: "images/wrong.jpeg",
        next: 25,
        back: 20
    },
    { // 22
        speech: "Correct! Corruption of files would compromise the system's integrity! &#129327; Files must always be protected from tampering and corruption!",
        image: "images/correct.jpeg",
        next: 25,
        back: 20
    },
    { // 23
        speech: "Wrong! Creating backups of sensitive files would actually IMPROVE a system's integrity! &#129300",
        image: "images/wrong.jpeg",
        next: 25,
        back: 20
    },
    { // 24
        speech: "Wrong! Spilling water on your computer when you're logged into the system would not compromise the system's integrity, it wil only damage your own computer! &#129322",
        image: "images/wrong.jpeg",
        next: 25,
        back: 20
    },
    { // 25
        speech: "Integrity is important because it protects data from being modified or destroyed by unauthorized users.",
        image: "images/open.jpeg",
        next: 26,
        back: 20
    },
    { // 26
        speech: "Which of these best describes the concept of integrity?",
        image: "images/closed.jpeg",
        correct: 28,
        wrong: [27, 30, 31]
    },
    { // 27
        speech: "Wrong! Ensuring that data is available to authorized users when they need it describes the concept of availability! &#128565",
        image: "images/wrong.jpeg",
        next: 32,
        back: 26
    },
    { // 28
        speech: "Correct! Data integrity refers to the concept of maintaining the accuracy, completeness, and consistency of data over its entire lifecycle &#127919; <br/> <br/> In cybersecurity, data integrity is crucial to ensure that information has not been modified, deleted, or otherwise tampered with by unauthorized individuals or systems.",
        image: "images/correct.jpeg",
        next: 32,
        back: 26
    },
    { // 29
        speech: "Ensuring data integrity involves using various techniques such as cryptographic hashing, digital signatures, access controls, and backups to detect and prevent unauthorized changes to data.",
        image: "images/peek.jpeg",
        next: 32,
        back: 28
    },
    { // 30
        speech: "Wrong! Ensuring that data is protected from unauthorized access and disclosure describes the concept of confidentiality! &#128565",
        image: "images/wrong.jpeg",
        next: 32,
        back: 26
    },
    { // 31
        speech: "Wrong! Although ensuring that data is stored in a secure and reliable manner might improve a system's integrity, it does not describe the concept of integrity! &#128517",
        image: "images/wrong.jpeg",
        next: 32,
        back: 26
    },
    { // 32
        speech: "Perfect! Finally, we have availability, which is the principle that data should be accessible to authorized users when they need it &#128104;&#128273;&#128274;->&#128275;",
        image: "images/availability.jpeg",
        next: 33,
        back: 26
    },
    { // 33
        speech: "Pop quiz: Given the definition, which of these would BEST improve a system's availability?",
        image: "images/closed.jpeg",
        correct: 35,
        wrong: [34, 36, 37]
    },
    { // 34
        speech: "Wrong! A weak internet connection doesn't affect a system's availability, it just makes it less accessible for you! &#128577",
        image: "images/wrong.jpeg",
        next: 38,
        back: 33
    },
    { // 35
        speech: "Correct! Having the option of accessing the system regardless of what device you're using is a great way of increasing a system's availability! &#128175",
        image: "images/correct.jpeg",
        next: 38,
        back: 33
    },
    { // 36
        speech: "Wrong! Why did you even pick this!? &#129324; This is the worst option! &#128557 It completely destroys the system's availability. &#128128;&#128128;&#128128",
        image: "images/wrong.jpeg",
        next: 38,
        back: 33
    },
    { // 37
        speech: "Sort of? Although having the option to view a website in multiple languages improves its availability, there is a better option! &#128533",
        image: "images/wrong.jpeg",
        next: 38,
        back: 33
    },
    { // 38
        speech: "Availability is important because it makes a system more reliable because users will have the safety of knowing the system will always be there.",
        image: "images/availability.jpeg",
        next: 39,
        back: 33
    },
    { // 39
        speech: "Which of the following is a common threat to a system's availability?",
        image: "images/closed.jpeg",
        correct: 41,
        wrong: [40, 43, 44]
    },
    { // 40
        speech: "Wrong! Data breaches and theft of sensitive information are threats to a system's confidentiality! &#128548",
        image: "images/wrong.jpeg",
        next: 45,
        back: 39
    },
    { // 41
        speech: "Correct! DDoS attacks are a common threat to the availability of computer systems, websites, and networks. &#128584 <br/> <br/> In a DDoS attack, a large number of compromised systems, often called bots or zombies, flood a targeted system or network with a massive amount of traffic or requests, causing it to become overloaded and unavailable to legitimate users.",
        image: "images/correct.jpeg",
        next: 42,
        back: 39
    },
    { // 42
        speech: "DDoS attacks can be launched using various techniques, such as amplification attacks, reflection attacks, and application-layer attacks, and they can be difficult to mitigate once they are underway.",
        image: "images/open.jpeg",
        next: 45,
        back: 41
    },
    { // 43
        speech: "Wrong! Malware and viruses infecting computer systems don't always affect a system's availability but may affect its integrity or even confidentiality! &#128565",
        image: "images/wrong.jpeg",
        next: 45,
        back: 39
    },
    { // 44
        speech: "Wrong! XSS attacks are usually used to steal sensitive information and compromise a system's confidentiality! &#128548",
        image: "images/wrong.jpeg",
        next: 45,
        back: 39
    },
    { // 45
        speech: "Now that you know about the security triad, you can protect yourself from cyber attacks! &#128526 <br/> <br/> Feel free to take the quiz again to test your knowledge!",
        image: "images/yawn.jpeg",
        next: null,
        back: 39,
    },
]

const answered = new Set();
let currentScore = 0;
let index = 0;
updateStoffel();
updateUI();

next.addEventListener("click", () => {

    // if (index === 4) { 
    //     index = 6;
    // }
    // else if (index === 9) {
    //     index = 11;
    // }
    // else if (index >= 13 && index % 6 === 1 && index <= 40) {
    //     index += 4;
    // }
    // else if (index >= 13 && index % 6 === 2 && index <= 40) {
    //     index += 3;
    // }
    // else if (index >= 13 && index % 6 === 3 && index <= 40) {
    //     index += 2;
    // }
    // else {
    //     index++;
    // }

    index = sequence[index].next;

    if (index === null) {
        console.log("Branching error. Index is null.")
    }

    updateStoffel();
    updateUI();
});

back.addEventListener("click", () => {

    // if (index === 6) {
    //     index = 2;
    // }
    // else if (index === 10) {
    //     index = 8;
    // }
    // else if (index === 11) {
    //     index = 8;
    // }
    // else if (index >= 13 && index % 6 === 2 && index <= 40) {
    //     index -= 2;
    // }
    // else if (index >= 13 && index % 6 === 3 && index <= 40) {
    //     index -= 3;
    // }
    // else if (index >= 13 && index % 6 === 4 && index <= 40) {
    //     index -= 4;
    // }
    // else if (index >= 13 && index % 6 === 5 && index <= 40) {
    //     index -= 5;
    // }
    // else if (index === 41){
    //     index = 36;
    // }     
    // else {
    //     index--;
    // }

    index = sequence[index].back;

    if (index === null) {
        console.log("Branching error. Index is null.")
    }

    updateStoffel();
    updateUI();
})

backToStart.addEventListener("click", () => {
    index = 0;
    updateStoffel();
    updateUI();
})

no.addEventListener("click", () => {
    index = 5;
    updateStoffel();
    updateUI();
})

yes.addEventListener("click", () => {
    index = 6;
    updateStoffel();
    updateUI();
})

/* 
    This function has been updated to reduce lag
        - Omar  
*/
function updateStoffel() {

    availability.style.display = "none";
    confidentiality.style.display = "none";
    closed1.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    smile.style.display = "none";
    yawn.style.display = "none";
    sleep.style.display = "none";
    peek.style.display = "none";
    roll.style.display = "none";
    open1.style.display = "none";
    logo.style.display = "none";

    switch (sequence[index].image) {
        case "images/availability.jpeg":
            availability.style.display = "";
            break;
        case "images/confidentiality.jpeg":
            confidentiality.style.display = "";
            break; 
        case "images/correct.jpeg":

            if (!answered.has(index)) {     // Increments score when correct stoffel is shown
                currentScore++;             // So long as it hasnt been shown before
                answered.add(index);
            }
            correct.style.display = "";
            break;
        case "images/wrong.jpeg":            
            wrong.style.display = "";
            break;
        case "images/smile.jpeg":
            smile.style.display = "";
            break;
        case "images/yawn.jpeg":
            yawn.style.display = "";
            break;
        case "images/sleep.jpeg":
            sleep.style.display = "";
            break;
        case "images/peek.jpeg":
            peek.style.display = "";
            break;
        case "images/roll.jpeg":
            roll.style.display = "";
            break;
        case "images/open.jpeg":
            open1.style.display = "";
            break;
        case "images/closed.jpeg":
            closed1.style.display = "";
            break;
        case "images/logo.png":
            logo.style.display = "";
            break;
        default:
            console.log("error")
            smile.style.display = "";
            break;
    }

    speech.innerHTML = sequence[index].speech;
    score.innerHTML = "Score: " + currentScore + " / 7 Questions";
}

function updateUI() {

    quiz.style.display = 'none';

    pwd.style.display = 'none';
    no.style.display = 'none';
    yes.style.display = 'none';

    back.style.display = '';
    next.style.display = '';
    next.innerHTML = 'Next ->';

    if (index == 0) {
        back.style.display = 'none';
        next.innerHTML = 'Click here to start!';
    } else if (index == sequence.length - 1) {
        next.style.display = 'none';
    } else if (index == 3) {
        pwd.style.display = '';
    } else if (index == 4) {
        back.style.display = 'none';
        next.style.display = 'none';

        no.style.display = '';
        yes.style.display = '';
    } else if (index == 9) {
        activateQuiz(
            "Me and my boss",
            "Only me! &#128274;", 
            "Anyone who asks &#128275;",
            "Only you, Stoffel <br/> the red panda!"
        )
    } else if (index == 13) {
        activateQuiz(
            "Privacy is a subset of confidentiality",
            "Confidentiality is a subset of privacy",
            "Confidentiality and privacy are completely unrelated",
            "Confidentiality and privacy are the same"
        )
    } else if (index == 20) {
        activateQuiz(
            "A casual user's system is leaked",
            "Malware that corrupts the files in the system &#x1f9a0;",
            "Creating backups of sensitive files &#128193;",
            "Spilling water on your computer while you're logged in to the system &#128167; &#128187;"
        )
    } else if (index == 26) {
        activateQuiz(
            "Ensuring that data is available to authorized users when they need it",
            "Ensuring that data is accurate and has not been tampered with &#127919;",
            "Ensuring that data is protected from unauthorized access and disclosure &#128274;",
            "Ensuring that data is stored in a secure and reliable manner &#128272;"
        )
    } else if (index == 33) {
        activateQuiz(
            "A weak internet connection &#128246;",
            "Allowing access to the system from both mobile phones and computers &#128241; &#128187;",
            "Creating ransomware for the system &#x1f9a0;",
            "Having the option of viewing the website in multiple languages &#127758;"
        )
    } else if (index == 39) {
        activateQuiz(
            "Data breaches and theft of sensitive information &#9888;",
            "Distributed denial-of-service (DDoS) attacks &#9940;",
            "Malware and viruses infecting computer systems &#x1f9a0;",
            "Cross-site scripting (XSS) attacks &#128137;"
        )
    }
}


function activateQuiz(answer1, answer2, answer3, answer4) {
    quiz.style.display = '';
    back.style.display = 'none';
    next.style.display = 'none';

    //randomize answers

    //select randomly between either 0 or 1
    let random = Math.round(Math.random());
    console.log(random)
    if (random === 0) {
        quiz.className = "quiz-column"
    } else {
        quiz.className = "quiz-column-reverse"
    }

    random = Math.round(Math.random());
    console.log(random)
    if (random === 0) {
        quizRow1.className = "quiz-row"
    } else {
        quizRow1.className = "quiz-row-reverse"
    }

    random = Math.round(Math.random());
    console.log(random)
    if (random === 0) {
        quizRow2.className = "quiz-row"
    } else {
        quizRow2.className = "quiz-row-reverse"
    }

    a1.innerHTML = answer1;
    a2.innerHTML = answer2;
    a3.innerHTML = answer3;
    a4.innerHTML = answer4;
}

a1.addEventListener("click", () => {
    
    if (index === 9) {
        index = sequence[index].wrong
    } else {
        index = sequence[index].wrong[0]
    }

    updateStoffel();
    updateUI();
})

a2.addEventListener("click", () => {

    index = sequence[index].correct

    updateStoffel();
    updateUI();
})

a3.addEventListener("click", () => {

    if (index === 9) {
        index = sequence[index].wrong
    } else {
        index = sequence[index].wrong[1]
    }

    updateStoffel();
    updateUI();
})

a4.addEventListener("click", () => {
    if (index === 9) {
        index = sequence[index].wrong
    } else {
        index = sequence[index].wrong[2]
    }

    updateStoffel();
    updateUI();
})



/*------------- Credits stuff -------------*/

// open modal by id
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});
