
$(document).ready(function() {
  $("form.quiz").submit(function(event) {
    event.preventDefault();
    var answer1 = $('input:radio[name=question1]:checked').val();
    console.log("Answer 1 is: " + answer1);
    var answer2 = $('input:radio[name=question2]:checked').val();
    console.log("Answer 2 is: " + answer2)
    var answer3 = $('input:radio[name=question3]:checked').val();
    console.log("Answer 3 is: " + answer3)
    var answer4 = $('input:radio[name=question4]:checked').val();
    console.log("Answer 4 is: " + answer4)
    var answer5 = $('input:radio[name=question5]:checked').val();
    console.log("Answer 5 is: " + answer5)
});



});
