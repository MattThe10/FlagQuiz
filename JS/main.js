
//selecting elements
const starterButton = document.querySelector('.startButton');
const startPar1 = document.querySelector('.starter1');
const startPar2 = document.querySelector('.starter2');
const startPar3 = document.querySelector('.starter3');
const wrapper = document.getElementById('wrapper');

//declaring all the elements
let optionOne;
let optionTwo;
let optionThree;
let optionFour;
let img;
let question;
let optionsWrapper;
let questionWrapper;
let flagWrapper;
let nextButtonWrapper;
let nextButton;
let points = 0;
let result;


starterButton.addEventListener('click', startGame);

function preGame() {
    questionWrapper.parentNode.removeChild(questionWrapper);
    nextButtonWrapper.parentNode.removeChild(nextButtonWrapper);
    points = 0;

    document.getElementById('wrapper').appendChild(startPar1);
    document.getElementById('wrapper').appendChild(startPar2);
    document.getElementById('wrapper').appendChild(startPar3);
    document.getElementById('wrapper').appendChild(starterButton);

     wrapper.style.height = '200px';
     wrapper.style.width = '800px';
     wrapper.style.margin = '18% auto';
     wrapper.style.display = 'flex';
     wrapper.style.flexDirection = 'column';
     wrapper.style.alignItems = 'center';
     wrapper.style.justifyContent = 'center';
     wrapper.style.lineHeight = '30px';
}

function startGame() {
    //removing start
    starterButton.parentNode.removeChild(starterButton);
    startPar1.parentNode.removeChild(startPar1);
    startPar2.parentNode.removeChild(startPar2);
    startPar3.parentNode.removeChild(startPar3);
    
    //wrapper config
    document.getElementById('wrapper').style.height = '600px';
    document.getElementById('wrapper').style.margin = '50px auto';
    document.getElementById('wrapper').style.justifyContent = 'space-evenly';

    //creating elements and setting their classes/ids
    question = document.createElement('h1');
    question.className = 'question';

    img = document.createElement('img');
    img.className = "flag";

    optionsWrapper = document.createElement('div');
    optionsWrapper.setAttribute("id", "optionsWrapper");

    questionWrapper = document.createElement('div');
    questionWrapper.setAttribute("id", "questionWrapper");

    flagWrapper = document.createElement('div');
    flagWrapper.setAttribute("id", "flagWrapper");

    nextButtonWrapper = document.createElement('div');
    nextButtonWrapper.setAttribute("id", "nextButtonWrapper");

    //elements into wrapper
    document.getElementById('wrapper').appendChild(questionWrapper);
    document.getElementById('wrapper').appendChild(flagWrapper);
    document.getElementById('wrapper').appendChild(optionsWrapper);
    document.getElementById('wrapper').appendChild(nextButtonWrapper);

    //options
    optionOne = document.createElement('button');
    optionOne.className = 'option';

    optionTwo = document.createElement('button');
    optionTwo.className = 'option';

    optionThree = document.createElement('button');
    optionThree.className = 'option';

    optionFour = document.createElement('button');
    optionFour.className = 'option';

    nextButton = document.createElement('button');
    nextButton.className = 'nextButton';
    firstQ();
        
}

function firstQ() {

        question.textContent = 'Which country is this flag?';
        document.getElementById('questionWrapper').appendChild(question);        
        document.getElementById('flagWrapper').appendChild(img);     

        img.src ='/Flags/Flag1.png';

        optionOne.textContent = "Pakistan";
        document.getElementById('optionsWrapper').appendChild(optionOne); 

        optionTwo.textContent = "Kyrgyzstan";
        document.getElementById('optionsWrapper').appendChild(optionTwo);

        optionThree.textContent = "Uzbekistan";
        document.getElementById('optionsWrapper').appendChild(optionThree);

        optionFour.textContent = "Iraq";
        document.getElementById('optionsWrapper').appendChild(optionFour); 

        //event Listeners
        optionOne.addEventListener('click',answer1);
        optionTwo.addEventListener('click',answer1);
        optionThree.addEventListener('click',answer1);
        optionFour.onclick = function() {
            answer1();
            points = points + 1;
            console.log(points);
        }
            
        
}   

function answer1() {
    optionOne.style.border = "1px solid red";
    optionTwo.style.border = "1px solid red";
    optionThree.style.border = "1px solid red";
    optionFour.style.border = "2px solid green";

    document.getElementById('nextButtonWrapper').appendChild(nextButton);
    nextButton.textContent = 'Next Flag!';
    nextButton.addEventListener('click', secondQ);

}

function secondQ() {
        removeBorders();
        nextButton.parentNode.removeChild(nextButton);         

        img.src ='/Flags/Flag2.jpg';

        optionOne.textContent = "Sri Lanka";

        optionTwo.textContent = "Barbados";

        optionThree.textContent = "Bali";

        optionFour.textContent = "Tahiti";

        //event Listeners
        optionOne.onclick = function() {
            answer2();
            points = points + 1;
            console.log(points);
        }
        optionTwo.addEventListener('click',answer2);
        optionThree.addEventListener('click',answer2);
        optionFour.addEventListener('click',answer2);
}

function answer2() {

    optionOne.style.border = "2px solid green";
    optionTwo.style.border = "1px solid red";
    optionThree.style.border = "1px solid red";
    optionFour.style.border = "1px solid red";

    document.getElementById('nextButtonWrapper').appendChild(nextButton);
    nextButton.textContent = 'Next Flag!';
    nextButton.addEventListener('click', thirdQ);

} 

function removeBorders() {
    optionOne.style.border = "1px solid gray";
    optionTwo.style.border = "1px solid gray";
    optionThree.style.border = "1px solid gray";
    optionFour.style.border = "1px solid gray";
}
 

function thirdQ() {
    removeBorders();

    img.src ='/Flags/Flag3.png';

    optionOne.textContent = "Hawai";

    optionTwo.textContent = "Panama";

    optionThree.textContent = "Peru"; 

    optionFour.textContent = "Kuba";

    //event Listeners
    optionOne.addEventListener('click',answer3);
    optionTwo.onclick = function() {
        answer3();
        points = points + 1;
        console.log(points);
    }
    optionThree.addEventListener('click',answer3);
    optionFour.addEventListener('click',answer3);
}

function answer3() {

    optionOne.style.border = "1px solid red";
    optionTwo.style.border = "2px solid green";
    optionThree.style.border = "1px solid red";
    optionFour.style.border = "1px solid red";

    document.getElementById('nextButtonWrapper').appendChild(nextButton);
    nextButton.textContent = 'Next Flag!';
    nextButton.addEventListener('click', fourthQ);

}

function fourthQ() {
    removeBorders();

    img.src ='/Flags/Flag4.png';

    optionOne.textContent = "Kazachstan";

    optionTwo.textContent = "Myanmar";

    optionThree.textContent = "Thailand"; 

    optionFour.textContent = "Mongolia";

    //event Listeners
    optionOne.addEventListener('click',answer4);
    optionTwo.addEventListener('click',answer4);
    optionThree.addEventListener('click',answer4);
    optionFour.addEventListener('click', answer4)
    optionFour.onclick = function() {
        points = points + 1;
        console.log(points);
    }
}

function answer4() {

    optionOne.style.border = "1px solid red";
    optionTwo.style.border = "1px solid red";
    optionThree.style.border = "1px solid red";
    optionFour.style.border = "2px solid green";

    document.getElementById('nextButtonWrapper').appendChild(nextButton);
    nextButton.textContent = 'Next Flag!';
    nextButton.addEventListener('click', fifthQ);

}

function fifthQ() {
    removeBorders();

    img.src ='/Flags/Flag5.jpg';

    optionOne.textContent = "Macedonia";

    optionTwo.textContent = "Kosovo";

    optionThree.textContent = "Armenia"; 

    optionFour.textContent = "Montenegro";

    //event Listeners
    optionOne.addEventListener('click', answer5)
    optionOne.onclick = function() {
        points = points + 1;
        console.log(points);
    }
    optionTwo.addEventListener('click',answer5);
    optionThree.addEventListener('click',answer5);
    optionFour.addEventListener('click',answer5);
    
}

function answer5() {

    optionOne.style.border = "2px solid green";
    optionTwo.style.border = "1px solid red";
    optionThree.style.border = "1px solid red";
    optionFour.style.border = "1px solid red";
    
    document.getElementById('nextButtonWrapper').appendChild(nextButton);
    nextButton.textContent = 'See results';
    nextButton.addEventListener('click', results);

}

function results() {
    optionsWrapper.parentNode.removeChild(optionsWrapper);
    flagWrapper.parentNode.removeChild(flagWrapper);

    question.textContent = `You guessed ${points} out of 5!`;
    result = document.createElement('p');
    result.className = 'result'; 

    if(points === 0) {
        document.getElementById('questionWrapper').appendChild(result);
        result.textContent = 'You didn´t do very well. Try next time!'
    } else if(points === 1) {
        document.getElementById('questionWrapper').appendChild(result);
        result.textContent = 'You have a slight knowledge, but you better practice more!'
    } else if(points === 2) {
        document.getElementById('questionWrapper').appendChild(result);
        result.textContent = "You've got still work to do!";
    } else if(points === 3) {
        document.getElementById('questionWrapper').appendChild(result);
        result.textContent = 'Half of them down, nice job!';
    } else if(points === 4) {
        document.getElementById('questionWrapper').appendChild(result);
        result.textContent = 'Almost a flag master! One more to go.';
    } else {
        document.getElementById('questionWrapper').appendChild(result);
        result.textContent = 'I bow to you, you are truly a flag master!';
    }

    document.getElementById('nextButtonWrapper').appendChild(nextButton);
    nextButton.textContent = 'Try again!';
    nextButton.addEventListener('click', preGame);

}
    
