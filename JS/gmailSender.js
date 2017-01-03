var loginOne = ''; // Login 1st acc
var passOne = ''; // Pass 1st acc

var loginTwo = ''; // Login 2nd acc
var passTwo = ''; // Pass 1nd acc

var loginTh = ''; // Login 3nd acc
var passTh = ''; // Pass 3nd acc

var loginFo = ''; // Login 4th acc
var passFo = ''; // Pass 4th acc

var loginFive = ''; // Login 5th acc
var passFive = ''; // Pass 5th acc


var subject = 'Моя тема'; // тема письма
var textOfMail = ''; // письмо


function auth (log, pass){
       window.document.getElementById('Email').value=log;
	      window.document.getElementById('Passwd-hidden').value=pass;
	        window.document.getElementById('next').click(); // click button Next
                   function f (){
                       window.document.getElementById('signIn').click(); // click button to Connect
                      }
                     window.setTimeout(f, "5000");
                      // now press Compsoe   
}


for (loop = 1; loop < 5; loop++){

iimPlayCode('URL GOTO=https://mail.google.com/');
            if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=ID::2x') == true){          
           iimPlayCode('TAG POS=1 TYPE=A ATTR=ID:gb_71');
           iimPlayCode('TAG POS=1 TYPE=A ATTR=ID:account-chooser-link');
	       iimPlayCode('TAG POS=1 TYPE=A ATTR=ID:edit-account-list');
	       iimPlayCode('TAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-0');     
	       iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-1');
	       iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-2');       
	       iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-3');                                  
	       iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-4'); 
	       iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-5');     
	       iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-6');     
	       iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-7');     
	       iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=BUTTON FORM=ID:gaia_loginform ATTR=ID:choose-account-8');         
	       iimPlayCode('TAG POS=1 TYPE=A ATTR=ID:edit-account-list');                                                       
            }

                 if (loop == 1){
                 	auth(loginOne, passOne);
                 }
                 else  if (loop == 2){
                 	auth(loginTwo, passTwo);
                 }
                 else  if (loop == 3){
                 	auth(loginTh, passTh);
                 }
                  else  if (loop == 4){
                 	auth(loginFo, passFo);
                 }
                  else  if (loop == 5){
                 	auth(loginFive, passFive);
                 } 
                 else break;

                           iimPlayCode('WAIT SECONDS=6');
  					function Sender (){	
  	iimPlayCode('URL GOTO=https://mail.google.com/mail/u/0/#inbox?compose=new');		
	window.document.getElementsByClassName('aaZ')[0].getElementsByTagName("textarea")[0].innerHTML=polucha;// Получатель
	window.document.getElementsByClassName('aaZ')[0].getElementsByTagName("input")[3].value=subject; // Тема
	window.document.getElementsByClassName('aaZ')[0].getElementsByClassName("Am Al editable LW-avf")[0].innerHTML=textOfMail; // Само письмо
	window.document.getElementsByClassName('aaZ')[0].getElementsByClassName("T-I J-J5-Ji aoO T-I-atl L3")[0].click(); // Отправ
  					}
  					
                     for (se = 1; se <= 499; se++){
                     	iimPlayCode('SET !DATASOURCE C:\\mails\\emails.txt\nSET !DATASOURCE_LINE '+se+'\nADD !EXTRACT {{!COL1}}');
                     	var polucha = iimGetExtract();
                        window.setTimeout(Sender, "800");
	          }
	   }