
alert(bornday);

function akanName(){



var dd= document.getElementById("d").value;
var mn=document.getElementById("m").value;
var cc=document.getElementById("c").value;
var yy=document.getElementById("y").value;
var gender=document.getElementById("g").value;
var bornday=  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mn+1)/10)) + dd ) % 7;
var rea= Math.trunc(bornday);
start:

if(dd<1 || day>31 && mn<1 || mn>12){

  alert("Wrong number");
  goto :start;
  

}else if( gender == "male") {
  switch(rea){

case 1:

  document.write("You have born on Monday and your Akhan KWASI");
break;

case 2:

  document.write("You have born on Tuesday and your Akhan KWADWO");
break;

case 3:

  document.write("You have born on wednesday and your Akhan KWABENA");
break;
case 4:

  document.write("You have born on Thursday and your Akhan YAW");
break;

case 5:

  document.write("You have born on saturday and your Akhan KOFI");
break;

case 6:

  document.write("You have born on Sunday and your Akhan KWASI");
break;

case 7:

  document.write("You have born on wednesday and your Akhan KWA");
break;
 default:
  document.write("No available choices");
  }

  }else if(gender == "female")

  {
    switch(rea){

      case 1:

        document.write("You have born on Monday and your Akhan AKOSUA");
      break;
      
      case 2:
      
        document.write("You have born on Tuesday and your Akhan ADWOA");
      break;
      
      case 3:
      
        document.write("You have born on wednesday and your Akhan ABENAA");
      break;
      case 4:
      
        document.write("You have born on Thursday and your Akhan AKUA");
      break;
      
      case 5:
      
        document.write("You have born on Friday and your Akhan YAA");
      break;
      
      case 6:
      
        document.write("You have born on Saturday and your Akhan AFUA");
      break;
      
      case 7:
      
        document.write("You have born on Sunday and your Akhan AMA");
      break;
       default:
        document.write("No available choices")

    }
  }

}



