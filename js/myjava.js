var greeting = "Welcome to our store Dears";

alert(greeting);

console.log(greeting);

var cond = prompt(" do you have a Pet?");
var ans;

while(cond !== "yes" && cond !=="no"){
    cond = prompt(" do you have a Pet?"); 
}


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

    while(userinput !== "cat" && userinput !=="dog"){
        userinput = prompt("do you like cat or dog?"); 
    }    

    if (userinput === "cat"){

        userchoice = "<img src='../images/GettyImages-1199242002-1-1920x1080.jpg' >";
        console.log('userchoice',userchoice)
    }
    else if (userinput === "dog"){
        userchoice ="<img src='../images/5ec6c6dc988ee362762f137b.jpg' >";

    }
    
return userchoice;

    }

//  choice()
function belt(){

    var belt;
    var userinput = prompt('do you like cat or dog?');

    var beltnum = prompt("how many belt do you need?");
    
    for (var count = 0; count < beltnum ; count++){
        if ( userinput == "dog"){
            // document.write("<img src='../images/images.jpg' >");
            belt = belt + "<img src='../images/images.jpg' >";
        }
        else if (userinput == "cat"){
            // document.write("<img src='../images/catbelt.jpg'>")
            belt = belt + "<img src='../images/catbelt.jpg'>"
            
        } 
    }   
    return belt;
}