// Create a timer
    // Create questions
    // Create answers
        // if all answers are not in befor the time's up the game automatically counts correct/incorrect answers and displays them for the user
// Create "radio" buttons for the user to set their answer to
// Create a submit button
    // if all answers are input before the time's up the submit button counts correct/incorrect answers and displays them for the user
// Create a clear or reset button that starts a new round





var questionsArray = [
    
    {

    question:"What 1988 comedy,sci-fi film starring Rowdy Roddy Piper and Sandahl Bergman is set in a dystopian future where mutated lizard-like amphibians live on desolate reservations, and women search for scarce virile men in order to multiply and start a new human society?",
    answers: {
        1:"Rango",
        2:"Hell Comes to Frogtown",
        3:"Anaconda"
        },
        correctAnswer:"2"
    },

    {
    question:"What visually stunning movie directed by Michael Mann and starring Ian Mckellen (Magneto), takes place inside of a Citadel in WWII era Romania wherein lies a trapped demonic entity named Radu Molasar?",
    answers: {
        1:"X-men",
        2:"Heat",
        3:"The Keep"
        },
        correctAnswer:"3"
    },

    {
    question:"What 1977 action-revenge movie starring Tommy Lee Jones is set post-Vietnam War, about a former POW with a hook for a hand exacting revenge on the gang that murdered his family?",
    answers: {
        1:"Operation Rolling Thunder",
        2:"Man of the House",
        3:"Men in Black II"
        },
        correctAnswer:"1"
    },

];

var questions = document.getElementsByClassName(".questionDiv");
var submitButton = document.getElementsByClassName(".btn btn-warning");
var scoreDiv = document.getElementsByClassName(".score");


var counter = 0;

// $("#timer"). function timer(counter) {
    
// }
    
        // button.onclick = function(){

                   
        //     if(counter >= 0){
        //         setTimeout(function(){
        //         $("#timer").text(counter)               

        //         timer();


        //     }, 1000)

        //      counter--;
        //     }
        //     else{
        //         $("#timer").text(counter);
        //         alert("Game over, man!!!");
        //     }
           
        // };

        // timer();


function Quiz() {

    var output =[];

    questionsArray.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];
            for(letter in currentQuestion.answers){

                answers.push(
                  `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                  </label>`
                );
              }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
              );
        }
    );

    quizContainer.innerHTML = output.join('');

}

function showScore() {}

Quiz();

submitButton.onClick(showScore);
console.log("test");

// Ladies and Gentlemen, this is... just horrible. Words can't express what we're all feeling at this very moment. A great champion has fallen. We'll be back right after these important messages.
// You have... death around you.
    