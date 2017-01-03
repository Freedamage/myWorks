var start = 1; 
var maxbet = start;


var sumSt = window.document.getElementsByClassName("value")[0].innerHTML;
var sumSt = parseInt(sumSt);
for (i = 1; i <= 250; i++){
var seconds = window.document.getElementsByClassName("rolling-inner")[0].getElementsByTagName("div")[0].innerHTML;
var seconds = seconds.replace(':','.');                 
if (seconds <= 1.2 && seconds >= 0.1){
      i = 2;
      var red = window.document.getElementsByClassName("red-total total-bet-amount")[0].innerHTML;
      var black = window.document.getElementsByClassName("black-total total-bet-amount")[0].innerHTML;
      var green = window.document.getElementsByClassName("green-total total-bet-amount")[0].innerHTML; 
      var red = parseInt(red);
      var black = parseInt(black);
      var green = parseInt(green);
      
      var sum = window.document.getElementsByClassName("value")[0].innerHTML;
      var sum = parseInt(sum);
       
        if (red > black){
        try {
                       window.document.getElementById("minesBet").value=betOn;
           }catch(ex){
                       window.document.getElementById("minesBet").value=start;
           }
           window.document.getElementsByClassName("btn-multi")[2].click();
           window.document.getElementsByClassName("btn-play")[0].click();
        }
        else if (black > red){
        try {
                       window.document.getElementById("minesBet").value=betOn;
           }catch(ex){
                       window.document.getElementById("minesBet").value=start;
           }
           window.document.getElementsByClassName("btn-multi")[0].click();
           window.document.getElementsByClassName("btn-play")[0].click();
        } 
           iimPlayCode("WAIT SECONDS=23");
           var balance = window.document.getElementsByClassName("value")[0].innerHTML;
           var balance = parseInt(balance);
           if (balance < sum){
           try{
             betOn = betOn*2;
             var profit = "proscessing";
               }catch(ex){
               var profit = "proscessing";
               betOn = start;
               betOn = betOn*2;
               }
           }
	    else{
             betOn = start;
             var profit = balance - sumSt;
		}
		
		if (betOn > maxbet)
		                maxbet = betOn;

		iimDisplay('Was money a bet ago: '+sum+'\nMoney after bet is: '+balance+'\nMax bet ever: '+maxbet+'\nCurrent bet is: '+betOn+'\nProfit: '+profit);
		
 }
iimPlayCode("WAIT SECONDS=1");
}
