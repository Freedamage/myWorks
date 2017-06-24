
 var myKey      = '';  // API-Ключ от рукапчи.   
 
 var n 		= '\n';
 var chk 	= false; 
 var sec        = 10;
 var dataSite   = '6LcU4gkTAAAAAM4SyYTmXlKvqwWLuaFLy-30rzBn';
 var domen 	= 'textnow.com';
 var k          = '6LcU4gkTAAAAAM4SyYTmXlKvqwWLuaFLy-30rzBn';

function captcha(myKey){
	 
	 var first;
	  
		first  = 'CODE:SET !ERRORIGNORE YES' + n;
                first += 'TAB OPEN' + n; 
		first += 'TAB T=2';
          
		iimPlay(first, 60);  

		var linkA = 'URL GOTO=rucaptcha.com/in.php?key='+myKey+'&method=userrecaptcha&googlekey='+k+'&pageurl='+domen;
		
		iimPlayCode(linkA);

		iimPlayCode('WAIT SECONDS=3');

		ok = window.document.getElementsByTagName('body')[0].innerHTML;
		ok = ok.split('|');

		var linkB = 'URL GOTO=rucaptcha.com/res.php?key='+myKey+'&action=get&id='+ok[1];
		
		iimPlayCode(linkB);
		
		while (chk == false)	
				chk = Split(sec);
			
			chk = false;
		
			var third;
			
					third  = 'CODE:WAIT SECONDS=1' + n;
					third += 'TAB CLOSE' + n; 
					third += 'WAIT SECONDS=1';
			
				iimPlay(third, 60); 	
				
				iimPlayCode('TAG POS=1 TYPE=TEXTAREA ATTR=ID:g-recaptcha-response CONTENT='+respon[1]);
	 
 }
 
 function Split(sec){
	 
	  	var second;
			
					second  = 'CODE:WAIT SECONDS=' + sec + n;
					second += 'REFRESH' + n; 
					second += 'WAIT SECONDS=3';
			
				iimPlay(second, 60);           
	
		respon = window.document.getElementsByTagName('body')[0].innerHTML;
		respon = respon.split('|');
		
	  if (/ERROR_CAPTCHA_UNSOLVABLE/.test(respon)){
		iimPlayCode('TAB CLOSE');
		captcha(myKey);
	  }
      else{	  
      if (respon[1] == undefined) 
			return false;
		else
			return true;
	  }
		
  }	
