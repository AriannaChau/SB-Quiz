$(document).ready(function() {
  $("form.quiz").submit(function(event) {
    event.preventDefault();

    var answers = ['question1', 'question2', 'question3', 'question4','question5'];
    var total = 0
    answers.forEach(function(answer) {
      var userInput = parseInt($('input:radio[name=' + answer + ']:checked').val());
      total += userInput;
    });

    // var answer1 = parseInt($('input:radio[name=question1]:checked').val());
    // var answer2 = parseInt($('input:radio[name=question2]:checked').val());
    // var answer3 = parseInt($('input:radio[name=question3]:checked').val());
    // var answer4 = parseInt($('input:radio[name=question4]:checked').val());
    // var answer5 = parseInt($('input:radio[name=question5]:checked').val());

    console.log(total);

    $("#result").show();

    if (total <= 7) {
      $("#spongebob").show();

    } else {
      $("#squidward").show();
    }
  });



});
