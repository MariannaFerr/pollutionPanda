const back = document.getElementById("back");
const next = document.getElementById("next");
const backToStart = document.getElementById("back-to-start");

const availabisility = document.getElementById("availability");
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
const intro = document.getElementById("intro");
const intro2 = document.getElementById("intro2");
const intro3 = document.getElementById("intro3");
const bamboo = document.getElementById("bamboo");
const newSit = document.getElementById("newSit");
const walk = document.getElementById("walk");
const sleepy = document.getElementById("sleepy");
const climb = document.getElementById("climb");
const sitSleep = document.getElementById("sitSleep");
const data = document.getElementById("data");
const stats1 = document.getElementById("stats1");
const stats2 = document.getElementById("stats2");
const map = document.getElementById("map");


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
        speech: "92% of Asia and the Pacific's population are exposed to something that risks their health daily. But humans aren't the only ones who suffer from it.",
        image: "images/intro.jpg", 
        next: 2,
        back: 0
    },
    { // 2
        speech: "Animals that once flourished in numbers are reaching endangerment status, and one of the contributors is within in our control:",
        image: "images/intro2.JPG",
        next: 3,
        back: 1
    },
    { // 3
        speech: "Air Pollution.",
        image: "images/intro3.JPG",
        next: 4,
        back: 2
    },
    { // 4 asks for password
        speech: "Okay, before we begin... Red pandas are most closely related to: ",
        image: "images/peek.jpeg",
        correct: 5,
        wrong: [6, 6, 6]
    },
    { // 5
        speech: "Good! Did you know that skunks and weasels are also my distant relatives? &#128521;",
        image: "images/correct.jpeg",
        next: 7,
        back: 4
    },
    { // 6
        speech: "That's what you'd think, but it's wrong! Red pandas are most closly related to raccoons! &#128561",
        image: "images/wrong.jpeg",
        next: 7,
        back: 4
    },
    { // 7 intro
        speech: "Numbers are dwindling, and sadly, the red panda species has been listed as Endangered on the IUCN Red List since 2008.",
        image: "images/sleepy.JPG",
        next: 8,
        back: 4
    },
    { // 8 confidentiality
        speech: "As a result, red pandas are mostly found in very low numbers. They inhabit the Eastern Himalayas region, in nearby mountainous regions like China, Nepal, and Butan. ⛰️",
        image: "images/walk.JPG",
        next: 9,
        back: 7
    },
    { // 9
        speech: "What is the top contributor to the Red Panda's endangerment status?",
        image: "images/newSit.JPG",
        correct: 11,
        wrong: 10
    },
    { // 10
        speech: "Not quite... Though that is somewhat a factor, it's not the top contributor to the Red Panda's endangerment status &#128533;",
        image: "images/wrong.jpeg",
        next: 12,
        back: 9
    },
    { // 11
        speech: "Correct! Aside from habitat loss and poaching, climate change is one of the top 3 biggest contributors to the Red Panda’s endangerment status.",
        image: "images/correct.jpeg",
        next: 12,
        back: 9
    },
    { // 12
        speech: "Red pandas require a narrow and specific temperature range which, in recent years, has been affected by climate change.",
        image: "images/smile.jpeg",
        next: 13,
        back: 9
    },
    { // 13
        speech: "What is the optimal tempurature for red pandas? &#129300",
        image: "images/roll.jpeg",
        correct: 15,
        wrong: [14, 14, 14]
    },
    { // 14
        speech: "Wrong! That's too hot! Red pandas prefer cooler tempuratures... &#128544",
        image: "images/wrong.jpeg",
        next: 16,
        back: 13
    },
    { // 15
        speech: "Correct! This is a somewhat low temperature, so how do red pandas survive? &#128533;",
        image: "images/correct.jpeg",
        next: 16,
        back: 13
    },
    { // 16
        speech: "Red pandas participate in something known as 'vertical migration'.",
        image: "images/climb.JPG",
        next: 17,
        back: 13
    },
    { // 17
        speech: "They migrate to higher elevations in the summer, and lower elevations in the winter to maintain their optimal temperature range.",
        image: "images/walk.jpeg",
        next: 18,
        back: 16
    },
    { // 18
        speech: "Unfortunately, climate change in recent years is causing the temperature to rise, which is disrupting the red pandas' migration patterns.",
        image: "images/yawn.jpeg",
        next: 19,
        back: 17
    },
    { // 19
        speech: "As Eastern Asia heats up due to air pollution, they are forced to move to higher elevations more frequently, isolating their population from one another and making it harder for them to reproduce.",
        image: "images/climb.JPG",
        next: 20,
        back: 18
    },
    { // 20
        speech: "Which of the following is the primary food source for red pandas?",
        image: "images/sitSleep.JPG",
        correct: 22,
        wrong: [21, 21, 21]
    },
    { // 21
        speech: "Almost! Although this is a food source for red pandas, it is not their primary food source. &#128533;",
        image: "images/wrong.jpeg",
        next: 23,
        back: 20
    },
    { // 22
        speech: "Correct! Bamboo shoots and leaves make up 95% of a red panda's diet! 🎋",
        image: "images/correct.jpeg",
        next: 23,
        back: 20
    },
    { // 23
        speech: "Air pollution in Eastern Asia can also affect the quality of the weather, which will greatly impact the vegetation that grows there.",
        image: "images/roll.jpeg",
        next: 24,
        back: 20
    },
    { // 24
        speech: "Bamboo, the red panda's primary food source, grows at lower elevations and is often harder for red pandas to access when they migrate upwards during warmer months. ",
        image: "images/bamboo.JPG",
        next: 25,
        back: 23
    },
    { // 25
        speech: "A lack of bamboo in their diet can reduce their water, protein, and fiber intake, which can lead to malnutrition and starvation. &#128577;",
        image: "images/bamboo.JPG",
        next: 26,
        back: 24
    },
    { // 26
        speech: "Which of the following is another consequence from the weather caused by air pollution in a red panda's habitat?",
        image: "images/sleepy.JPG",
        correct: 28,
        wrong: [27, 30, 31]
    },
    { // 27
        speech: "Wrong! Red pandas will rarely experience a flood since they primarily reside in the mountains. &#128533",
        image: "images/wrong.jpeg",
        next: 32,
        back: 26
    },
    { // 28
        speech: "Correct! Acid rain is a form of precipitation that is unusually acidic (low pH). This weather pattern becomes more common in areas of high air pollution. ",
        image: "images/correct.jpeg",
        next: 29,
        back: 26
    },
    { // 29
        speech: "As we've discussed, red pandas are mostly found in India and China.",
        image: "images/data.png",
        next: 32,
        back: 28
    },
    { // 30
        speech: " Wrong! This isn't the best answer... Humidity does increase temperature, but there is a more dangerous weather pattern that is caused by air pollution. &#128533",
        image: "images/wrong.jpeg",
        next: 29,
        back: 26
    },
    { // 31
        speech: "Wrong! Rock slides are not a common weather pattern in Eastern Asia. &#128533",
        image: "images/wrong.jpeg",
        next: 32,
        back: 26
    },
    { // 32
        speech: "Due to high levels of air pollution in these regions, they are more susceptible to acid rain. This places both people and animals at risk for this natural disaster.",
        image: "images/data.png",
        next: 33,
        back: 29
    },
    { // 33
        speech: "How can we protect red pandas, as well as other wildlife, from the consequences of air pollution?",
        image: "images/newSit.JPG",
        correct: 35,
        wrong: [34, 36, 37]
    },
    { // 34
        speech: "Wrong! This is completely impractical and not realistic.",
        image: "images/wrong.jpeg",
        next: 38,
        back: 33
    },
    { // 35
        speech: "Correct! Each and every one of us has the ability to reduce air pollution by the choices we make daily.  ",
        image: "images/correct.jpeg",
        next: 38,
        back: 33
    },
    { // 36
        speech: "Wrong! There's always something we can do! &#128548",
        image: "images/wrong.jpeg",
        next: 38,
        back: 33
    },
    { // 37
        speech: "Wrong! Not going to the zoo won't help red pandas! Some experts even colclude that zoos help keep the dwindling population of red pandas stable. &#128548",
        image: "images/wrong.jpeg",
        next: 38,
        back: 33
    },
    { // 38
        speech: "Take a look at the following data from 'IQAir World Quality Index 2020'. <br/> <br/> Some information has been hidden...",
        image: "images/map.jpeg",
        next: 39,
        back: 33
    },
    { // 39
        speech: "Based on the data, What is average air polution in India?",
        image: "images/stats1.png",
        correct: 41,
        wrong: [40, 43, 44]
    },
    { // 40
        speech: "Wrong! That's way too high! &#128548  Hopefully we will never reach that point.",
        image: "images/wrong.jpeg",
        next: 45,
        back: 39
    },
    { // 41
        speech: "That's right! It's 51.9 µg/m^3, which is well above the 'unhealthy' zone, which starts at 35.5 µg/m^3...",
        image: "images/correct.jpeg",
        next: 42,
        back: 39
    },
    { // 42
        speech: "As we can see, the air pollution in Eastern Asia is very high, and it's only getting worse. 😔",
        image: "images/stats2.png",
        next: 45,
        back: 41
    },
    { // 43
        speech: "Wrong! It may suprise you, but the pollution levels are much higher than this. &#128577;",
        image: "images/wrong.jpeg",
        next: 45,
        back: 39
    },
    { // 44
        speech: "Wrong! Although we wish this was true, the pollution levels are much higher than this. &#128577;",
        image: "images/wrong.jpeg",
        next: 45,
        back: 39
    },
    { // 45
        speech: "This is a serious issue that needs to be addressed. With your help, we can make a difference and save the red pandas!",
        image: "images/yawn.jpeg",
        next: 46,
        back: 39,
    },
    { // 46
        speech: "If you didn't know how air pollution affects red pandas before, then now you do! &#128526 <br/> <br/> Feel free to take the quiz again to see what you've learned!",
        image: "images/intro3.JPG",
        next: null,
        back: 45,
    },
]

const answered = new Set();
let currentScore = 0;
let index = 0;
updatePanda();
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

    updatePanda();
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

    updatePanda();
    updateUI();
})

backToStart.addEventListener("click", () => {
    // index = 0;
    // updatePanda();
    // updateUI();
    
    // reset score by refreshing page
    location.reload();
    
})

no.addEventListener("click", () => {
    index = 5;
    updatePanda();
    updateUI();
})

yes.addEventListener("click", () => {
    index = 6;
    updatePanda();
    updateUI();
})

/* 
    This function has been updated to reduce lag
        - Omar  
*/
function updatePanda() {
    map.style.display = "none";
    stats1.style.display = "none";
    stats2.style.display = "none";
    data.style.display = "none";
    sitSleep.style.display = "none";
    climb.style.display = "none";
    sleepy.style.display = "none";
    walk.style.display = "none";
    bamboo.style.display = "none";
    newSit.style.display = "none";
    intro.style.display = "none";
    intro2.style.display = "none";
    intro3.style.display = "none";
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
        case "images/intro.jpg":
            intro.style.display = "";
            intro.style.width = "500px"; 
            intro.style.height = "600px"; 
            break;
        case "images/intro2.JPG":
            intro2.style.display = "";
            intro2.style.width = "500px"; 
            intro2.style.height = "600px"; 
            break;
        case "images/intro3.JPG":
            intro3.style.display = "";
            intro3.style.width = "500px"; 
            intro3.style.height = "600px"; 
            break;
        case "images/map.jpeg":
            map.style.display = "";
            break;
        case "images/stats1.png":
            stats1.style.display = "";
            stats1.style.width = "650px"; 
            stats1.style.height = "800px"; 
            break;
        case "images/stats2.png":
            stats2.style.display = "";
            stats2.style.width = "650px"; 
            stats2.style.height = "800px"; 
            break;
        case "images/data.png":
            data.style.display = "";
            data.style.width = "800px"; 
            data.style.height = "600px";

            break;
        case "images/sitSleep.JPG":
            sitSleep.style.display = "";
            break;
        case "images/climb.JPG":
            climb.style.display = "";
            break;
        case "images/newSit.JPG":
            newSit.style.display = "";
            break;
        case "images/bamboo.JPG":
            bamboo.style.display = "";
            bamboo.style.width = "400px"; 
            bamboo.style.height = "500px"; 
            break;
        case "images/walk.JPG":
            walk.style.display = "";
            walk.style.width = "430px";
            walk.style.height = "490px"; 
            break; 
        case "images/sleepy.JPG":
            sleepy.style.display = "";
            break;
        case "images/correct.jpeg":

            if (!answered.has(index)) {     // Increments score when 'correct' panda is shown
                currentScore++;             // So long as it hasn't been shown before
                answered.add(index);
            }
            correct.style.display = "";
            correct.style.width = "450px";
            correct.style.height = "470px"; 
            break;
        case "images/wrong.jpeg":            
            wrong.style.display = "";
            wrong.style.width = "400px";
            wrong.style.height = "490px"; 
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
            logo.style.width = "600px"; 
            logo.style.height = "500px"; 
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
    } else if (index == 4) {
        activateQuiz(
            "Pandas",
            "Raccoons", 
            "Bears",
            "Foxes"
        )
    } else if (index == 9) {
        activateQuiz(
            "Being Clumsy",
            "Climate Change", 
            "They Sleep All Day",
            "Human Interference"
        )
    } else if (index == 13) {
        activateQuiz(
            "30-34 degrees Celsius",
            "17-25 degrees Celsius",
            "34-40 degrees Celsius",
            "27-31 degrees Celsius"
        )
    } else if (index == 20) {
        activateQuiz(
            "Berries",
            "Bamboo",
            "Insects and Grubs",
            "Roots"
        )
    } else if (index == 26) {
        activateQuiz(
            "Floods",
            "Acid Rain",
            "Humidity",
            "Rock Slides"
        )
    } else if (index == 33) {
        activateQuiz(
            "Start petitions to ban air pollution. ",
            "Raise awareness and reduce your own carbon footprint. ",
            "There's nothing we can do. &#128577; ",
            "Stop going to the zoo. "
        )
    } else if (index == 39) {
        activateQuiz(
            "55.5 µg/m^3",
            "51.9 µg/m^3",
            "37.2 µg/m^3",
            "18.3 µg/m^3"
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

    updatePanda();
    updateUI();
})

a2.addEventListener("click", () => {

    index = sequence[index].correct

    updatePanda();
    updateUI();
})

a3.addEventListener("click", () => {

    if (index === 9) {
        index = sequence[index].wrong
    } else {
        index = sequence[index].wrong[1]
    }

    updatePanda();
    updateUI();
})

a4.addEventListener("click", () => {
    if (index === 9) {
        index = sequence[index].wrong
    } else {
        index = sequence[index].wrong[2]
    }

    updatePanda();
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
