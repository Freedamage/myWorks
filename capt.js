var myKey = ''; // Сюда свой API ключ от рукапчи. https://rucaptcha.com/


function getCaptcha(myKey){

	 var gtcp;
		 gtcp  = 'CODE:TAB OPEN' + n;
		 gtcp += 'FILEDELETE NAME=C:\\capcha.png' + n;
		 gtcp += 'ONDOWNLOAD FOLDER=C:\\ FILE=capcha.png WAIT=YES' + n;
		 gtcp += 'TAG POS=1 TYPE=IMG ATTR=SRC:https://m.vk.com/captcha.php* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT' + n;
		 gtcp += 'TAB T=2' + n;
		 gtcp += 'URL GOTO=http://imacros2.rucaptcha.com/new/' + n;
		 gtcp += 'TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:getcapcha.php ATTR=NAME:key CONTENT=' + myKey + n;
		 gtcp += 'TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:getcapcha.php ATTR=NAME:file CONTENT=C:\\capcha.png' + n;
		 gtcp += 'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:getcapcha.php ATTR=*' + n;
		 gtcp += 'TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT' + n;
         iimPlay(gtcp, 60);

		 var capa = iimGetExtract();
		 
		 iimPlayCode('TAB CLOSE');
	
	return capa;
 }
