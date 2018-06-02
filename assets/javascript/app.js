// Create a timer
    // Create questions
    // Create answers
        // if all answers are not in befor the time's up the game automatically counts correct/incorrect answers and displays them for the user
// Create "radio" buttons for the user to set their answer to
// Create a submit button
    // if all answers are input before the time's up the submit button counts correct/incorrect answers and displays them for the user
// Create a clear or reset button

var count = 10;
        function timer(){
                   
            if(count > 0){
                setTimeout(function(){
                $("#timer").text(count)               

                timer();


            }, 1000)

             count--;
            }
            else{
                $("#timer").text(count);
                alert("Game over, man!!!");
            }
           
        }

        timer();

    