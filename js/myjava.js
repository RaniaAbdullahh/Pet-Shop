var greeting = "Welcome to our store Dears";

alert(greeting);

console.log(greeting);

var cond = prompt(" do you have a Pet?");
var ans;



if (cond == "yes") {
    ans = 'you will find you Pet needs here';

 } else if(cond == "no") {
     ans = 'you should have a Pet;)';
 } 

 
 document.write('<h2>'+ans+'</h2>');

 console.log(ans);

 confirm("Press a button!\nEither OK or Cancel.");


 var choice = function(){

    var userinput = prompt('do you like cat or dog?');
    
    var userchoice;

    if (userinput == "cat"){

        userchoice = "<img src='images/GettyImages-1199242002-1-1920x1080.jpg' alt=''>";
    }
    else if (userinput == "dog"){
        userchoice = "<img src='images/5ec6c6dc988ee362762f137b.jpg' alt=''>";

    }
    return userchoice;


    }

 

