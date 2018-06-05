// Create a timer
    // Create questions
    // Create answers
        // if all answers are not in befor the time's up the game automatically counts correct/incorrect answers and displays them for the user
// Create "radio" buttons for the user to set their answer to
// Create a submit button
    // if all answers are input before the time's up the submit button counts correct/incorrect answers and displays them for the user
// Create a clear or reset button that starts a new round





// var button = document.getElementsByClassName("btn btn-warning");
// var questions = document.getElementsByClassName("questions");



var counter = 0;



// $("#timer"). function timer(counter) {
    
// }
    
        button.onclick = function(){

                   
            if(counter >= 0){
                setTimeout(function(){
                $("#timer").text(counter)               

                timer();


            }, 1000)

             counter--;
            }
            else{
                $("#timer").text(counter);
                alert("Game over, man!!!");
            }
           
        };

        timer();




// Ladies and Gentlemen, this is... just horrible. Words can't express what we're all feeling at this very moment. A great champion has fallen. We'll be back right after these important messages.
// You have... death around you.
    