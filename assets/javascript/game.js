


  $(document).ready(function() {
    function computerGenerater (){
      return(Math.floor(Math.random() * 101) + 19);
    }
    
    function tallyCheck() { 
      if (tally > random) {
        alert("you lose!"); 
        losses++;
        tally = 0;
        random = computerGenerater();
        $("#computerScore").html(random);  
        $("#totalScore").html(tally);
        $("#losses").html(losses);

      }
    
      if (tally === random){
        alert("you win!");
        tally = 0; 
        wins++;
        random = computerGenerater();
        $("#computerScore").html(random);   
        $("#totalScore").html(tally);
        $("#wins").html(wins);
        
      } 

    }
 
    $("#ruby").on("click", function() {
     tally = tally + 1;
     $("#totalScore").html(tally);
     tallyCheck();
     console.log(tally);
    });
    
    $("#diamond").on("click", function() {
      tally = tally + 4;
      $("#totalScore").html(tally);
      tallyCheck();
      console.log(tally);
    });

    $("#yellowGem").on("click", function() {
      tally = tally + 7;
      $("#totalScore").html(tally);
      tallyCheck();
      console.log(tally);
    });

    $("#greenGem").on("click", function() {
      tally = tally + 9;
      $("#totalScore").html(tally);
      tallyCheck();
      console.log(tally);
    });
      
  var random = computerGenerater();
  $("#computerScore").html(random);
  var tally = 0;
  var wins = 0;
  var losses = 0;

  });
