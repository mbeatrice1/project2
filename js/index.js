
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
  

}else (gender == "male"){
  switch(rea){

case 1:

  document.write("You have born on wednesday and your Akhan KWADO");
break;

case 2:

  document.write("You have born on wednesday and your Akhan KWADO");
break;

case 3:

  document.write("You have born on wednesday and your Akhan KWADO");
break;
case 4:

  document.write("You have born on wednesday and your Akhan KWADO");
break;

case 5:

  document.write("You have born on wednesday and your Akhan KWADO");
break;

case 6:

  document.write("You have born on wednesday and your Akhan KWADO");
break;

case 7:

  document.write("You have born on wednesday and your Akhan KWADO");
break;
 default:
  document.write("No available choices")

  }else if(gender == "female")

  {
    switch(rea){

      case 1:

        document.write("You have born on wednesday and your Akhan KWASI");
      break;
      
      case 2:
      
        document.write("You have born on wednesday and your Akhan KWASI");
      break;
      
      case 3:
      
        document.write("You have born on wednesday and your Akhan KWASI");
      break;
      case 4:
      
        document.write("You have born on wednesday and your Akhan KWADO");
      break;
      
      case 5:
      
        document.write("You have born on wednesday and your Akhan KWASI");
      break;
      
      case 6:
      
        document.write("You have born on wednesday and your Akhan KWASI");
      break;
      
      case 7:
      
        document.write("You have born on wednesday and your Akhan KWASI");
      break;
       default:
        document.write("No available choices")

    }
  }

}



}