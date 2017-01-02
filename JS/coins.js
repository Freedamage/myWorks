for (i = 1; i <= 250; i++){
var seconds = window.document.getElementsByClassName("timer")[0].getElementsByClassName("time-left")[0].innerHTML;	          
if (seconds <= 1.5 && seconds >= 0.1){
           i = 2;
      var red = window.document.getElementById("bet-total-red").innerHTML;
      var black = window.document.getElementById("bet-total-black").innerHTML;
      var green = window.document.getElementById("bet-total-green").innerHTML;
      var red = red.replace(',','');
      var black = black.replace(',','');
      var green = green.replace(',','');   
      var red = parseInt(red);
      var black = parseInt(black);
      var green = parseInt(green);
      
      var sum0 = window.document.getElementsByClassName("odometer-value")[7].innerHTML;
      var sum1 = window.document.getElementsByClassName("odometer-value")[8].innerHTML;
      var sum2 = window.document.getElementsByClassName("odometer-value")[9].innerHTML;
      var sum = sum0+sum1+sum2;
       
        if (red > black && green*5 > black){
        try {
           window.document.getElementsByClassName("amount")[0].getElementsByTagName("input")[0].value=betOn;
           }catch(ex){
                      window.document.getElementsByClassName("amount")[0].getElementsByTagName("input")[0].value=2;
           }
           window.document.getElementsByClassName("header-button black")[0].click();
        }
        else if (black > red && green*5 > red){
        try {
           window.document.getElementsByClassName("amount")[0].getElementsByTagName("input")[0].value=betOn;
           }catch(ex){
                      window.document.getElementsByClassName("amount")[0].getElementsByTagName("input")[0].value=2;
           }
           window.document.getElementsByClassName("header-button red")[0].click();               
        } 
           iimPlayCode("WAIT SECONDS=15");
           var balance0 = window.document.getElementsByClassName("odometer-value")[7].innerHTML;
           var balance1 = window.document.getElementsByClassName("odometer-value")[8].innerHTML;
           var balance2 = window.document.getElementsByClassName("odometer-value")[9].innerHTML;
           var balance = balance0+balance1+balance2;
           if (balance < sum){
           try{
             betOn = betOn*2;
               }catch(ex){
               betOn = 2;
               betOn = betOn*2;
               }
           }
	    else{
             betOn = 2;
		}
		iimDisplay('Was money a bet ago: '+sum+'\nMoney after bet is: '+balance+'\nCurrent bet is: '+betOn);
		
 }
iimPlayCode("WAIT SECONDS=1");
}
