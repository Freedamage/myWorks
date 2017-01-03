var start = 2; 
var start = 1; 
var maxbet = start;

for (i = 1; i <= 250; i++){
var seconds = window.document.getElementsByClassName("rolling")[0].getElementsByTagName("span")[0].innerHTML;
var seconds = seconds.replace('Rolling in ',''); 
var seconds = parseInt(seconds);                 
if (seconds <= 2 && seconds >= 0.1){
      i = 2;
      var red = window.document.getElementsByClassName("col-xs-6 red-total total-bet-amount")[0].innerHTML;
      var black = window.document.getElementsByClassName("col-xs-6 black-total total-bet-amount")[0].innerHTML;
      var green = window.document.getElementsByClassName("col-xs-6 green-total total-bet-amount")[0].innerHTML; 
      var red = parseInt(red);
      var black = parseInt(black);
      var green = parseInt(green);
      
      var sum = window.document.getElementsByClassName("value")[0].innerHTML;
      var sum = parseInt(sum);
       
        if (red > black){
        try {
           window.document.getElementsByClassName("bet")[0].value=betOn;
           }catch(ex){
                      window.document.getElementsByClassName("bet")[0].value=start;
           }
           window.document.getElementsByClassName("black-bet-button bet-button")[0].click();
        }
        else if (black > red){
        try {
           window.document.getElementsByClassName("bet")[0].value=betOn;
           }catch(ex){
                      window.document.getElementsByClassName("bet")[0].value=start;
           }
           window.document.getElementsByClassName("red-bet-button bet-button")[0].click();              
        } 
           iimPlayCode("WAIT SECONDS=23");
           var balance = window.document.getElementsByClassName("value")[0].innerHTML;
           var balance = parseInt(balance);
           if (balance < sum){
           try{
             betOn = betOn*2;
               }catch(ex){
               betOn = start;
               betOn = betOn*2;
               }
           }
	    else{
             betOn = start;
		}
		
		if (betOn > maxbet)
		                maxbet = betOn;

		iimDisplay('Was money a bet ago: '+sum+'\nMoney after bet is: '+balance+'\nCurrent bet is: '+betOn+'\n\nMax bet ever: '+maxbet);
		
 }
iimPlayCode("WAIT SECONDS=1");
}

