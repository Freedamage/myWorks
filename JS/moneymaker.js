var start = 1; // 1.5 == 1000p
var maxbet = start;
var less = true;
var more = false;

var two = 0;
var four = 0;
var eight = 0
var steen = 0;
var thrtwo = 0;
var sixfor = 0;
var onehtwfor = 0;
var twofives = 0;
var fiot = 0;
var othztw = 0;
var twofr = 0;

if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=P ATTR=TXT:By<SP>clicking<SP>"Sign<SP>In"<SP>button<SP>you<SP>confirmin*') == true){
	iimPlayCode('TAG POS=1 TYPE=IMG ATTR=SRC:https://csgoatse.com/img/btn-login.png');
    iimPlayCode('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:openidForm ATTR=ID:imageLogin');
}


 function mainStart(){
	 function mainFunc(){
		         iimPlayCode('WAIT SECONDS=17');
        
      var bal1 = window.document.getElementsByClassName('odometer-value')[6].innerHTML;
            var bal2 = window.document.getElementsByClassName('odometer-value')[7].innerHTML;
                  var bal3 = window.document.getElementsByClassName('odometer-value')[8].innerHTML;
                        var bal4 = window.document.getElementsByClassName('odometer-value')[9].innerHTML;
                                try {
                              var bal5 = window.document.getElementsByClassName('odometer-value')[10].innerHTML;
                              }catch(ex){
                              var bal5 = 0;
                              }
                    balance = parseInt(bal1+bal2+bal3+bal4+bal5);
           
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
			 if (less == true){
				 less = false;
				 more = true;
			 }
			 else if (more == true){
				 more = false;
				 less = true;
			 }
		}
			
		       if (betOn == 2)
					two++;
		       else if (betOn == 4)
		       	    four++;
				else if (betOn == 8)
		       		eight++;
		       else if (betOn == 16)
		       	    steen++;
				else if (betOn == 32)
		       		thrtwo++;
		        else if (betOn == 64)
		       	    sixfor++;
				else if (betOn == 128)
		       		onehtwfor++;
		      else if (betOn == 256)
		       	    twofives++;
				else if (betOn == 512)
		       		fiot++;
		       else if (betOn == 1024)
		       	    othztw++;
				else if (betOn == 2048){
					twofr++;
				}

		
		if (betOn > maxbet)
		                maxbet = betOn;
		                
		                var profit = parseInt(balance) - parseInt(StSum);
						
						iimDisplay('Current bet is: '+betOn+'\nMax bet ever: '+maxbet+'\nProfit: '+profit+'\n2: '+two+'\n4: '+four+'\n8: '+eight+'\n16: '+steen+'\n32: '+thrtwo+'\n64: '+sixfor+'\n128: '+onehtwfor+'\n256: '+twofives+'\n512: '+fiot+'\n1024: '+othztw + '\n2048: '+ twofr);
		
	 }
	 
	 var sum1 = window.document.getElementsByClassName('odometer-value')[6].innerHTML;
            var sum2 = window.document.getElementsByClassName('odometer-value')[7].innerHTML;
                  var sum3 = window.document.getElementsByClassName('odometer-value')[8].innerHTML;
                        var sum4 = window.document.getElementsByClassName('odometer-value')[9].innerHTML;
                                try {
                              var sum5 = window.document.getElementsByClassName('odometer-value')[10].innerHTML;
                              }catch(ex){
                              var sum5 = 0;
                              }

      
      var StSum = sum1+sum2+sum3+sum4+sum5;
	 
	 if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=P ATTR=TXT:By<SP>clicking<SP>"Sign<SP>In"<SP>button<SP>you<SP>confirmin*') == true){
	iimPlayCode('TAG POS=1 TYPE=IMG ATTR=SRC:https://csgoatse.com/img/btn-login.png');
    iimPlayCode('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:openidForm ATTR=ID:imageLogin');
}
for (i = 1; i <= 250; i++){
var seconds = window.document.getElementsByClassName("time-left")[0].innerHTML;
if (seconds <= 2 && seconds >= 0.5){
      i = 2;
      var red = window.document.getElementById("bet-total-red").innerHTML;
      var black = window.document.getElementById("bet-total-black").innerHTML;
      var red = red.replace(',','');
      var black = black.replace(',','');
      var red = parseInt(red);
      var black = parseInt(black);
      
      var sum1 = window.document.getElementsByClassName('odometer-value')[6].innerHTML;
            var sum2 = window.document.getElementsByClassName('odometer-value')[7].innerHTML;
                  var sum3 = window.document.getElementsByClassName('odometer-value')[8].innerHTML;
                        var sum4 = window.document.getElementsByClassName('odometer-value')[9].innerHTML;
                                try {
                              var sum5 = window.document.getElementsByClassName('odometer-value')[10].innerHTML;
                              }catch(ex){
                              alert('О_О');
                              var sum5 = 0;
                              }

      
      var sum = parseInt(sum1+sum2+sum3+sum4+sum5);
       
        try {
           window.document.getElementsByClassName('amount')[0].getElementsByTagName('input')[0].value=betOn;
           }catch(ex){
                      window.document.getElementsByClassName('amount')[0].getElementsByTagName('input')[0].value=start;
           }
		   
		   if (less == true){
           if (red > black + (red / 7) ){
                 window.document.getElementsByClassName('header-button black')[0].click();
				 mainFunc();
             }
             if (red + (black / 7) < black) {
                 window.document.getElementsByClassName('header-button red')[0].click();
				 mainFunc();
              }              			   
		   }
		   else if (more == true){
			     if (red + (black / 7)  < black ){
                 window.document.getElementsByClassName('header-button black')[0].click();
				 mainFunc();
             }
             if (red > black + (red / 7)) {
                 window.document.getElementsByClassName('header-button red')[0].click();
				 mainFunc();
              }    
		   }
 }

iimPlayCode("WAIT SECONDS=1");
}
		iimPlayCode('REFRESH');
			mainStart();
 }
mainStart();
