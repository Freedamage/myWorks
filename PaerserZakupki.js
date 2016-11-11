for (st=1; st<=1000; st++)
{
iimPlayCode('URL GOTO=http://zakupki.gov.ru/epz/organization/quicksearch/search.html\nTAG POS=1 TYPE=LI ATTR=ID:_50');
var zak = 2;
  for  (k = 1; k<=50; k++){
  	  start();
  function start () {
   if (k == 49){
   iimPlayCode('TAG POS=1 TYPE=A ATTR=TXT:'+zak);
   k=1;
   zak++
}


   if (zak == 20)
   {


iimPlayCode('URL GOTO=http://zakupki.gov.ru/epz/order/quicksearch/search.html\nTAG POS=1 TYPE=LI ATTR=ID:_50');
var zak = 2;
  for  (k = 4; k<=50; k++){
  	  start();
  function start () {
   if (k == 49){
   iimPlayCode('TAG POS=1 TYPE=A ATTR=TXT:'+zak);
   k=4;
   zak++
}
  
 	if 
 	(k == 1)
 	{
     iimPlayCode('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(3)>TABLE>TBODY>TR>TD:nth-of-type(2)>DL>DT>A" BUTTON=0');}
 	else
	iimPlayCode('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type('+k+')>TABLE>TBODY>TR>TD:nth-of-type(2)>DL>DT>A" BUTTON=0');
  
       if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=TXT:Выбор<SP>реестра<SP>зарегистрированных<SP>организаций') == true)
   iimPlay('CODE:TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:из<SP>Реестра<SP>организаций<SP>223-ФЗ');

iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CLASS:cardWrapper EXTRACT=TXT');
prove=iimGetExtract().replace(/\s+/g,'');
if (/@/.test(prove))
	{
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CLASS:cardWrapper EXTRACT=TXT');
	prove=iimGetExtract();
	var proves = prove.match(/Контактное лицо(.*)Часовая/g).join('');
	var Humans = '';
	var Human = '';
	for (j = 15; j<=proves.length-8; j++)
	{
	Humans+=proves[j].replace(/\s+/g,'<SP>');
	Human=Humans.replace(';','');
	}
    
    iimPlayCode('TAG POS=1 TYPE=SPAN ATTR=TXT:*@* EXTRACT=TXT');
	Mails=iimGetExtract().replace(/\s+/g,'<SP>');
	Mail=Mails.replace(';','');


iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CLASS:cardWrapper EXTRACT=TXT');
    prove=iimGetExtract();
    var proves = prove.match(/Почтовый адрес(.*)Контактный/g);
    if (proves==null)
    {
	if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Закупки') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
    k++;
   start();
    }
    else
    {
    var proves = prove.match(/Почтовый адрес(.*)Контактный/g).join('');
    var MailAdress = '';
    for (j = 14; j<=proves.length-11; j++)
	{
	MailAdress+=proves[j].replace(/\s+/g,'<SP>');
	}
	MailAdres=MailAdress.replace(';','');
	}

iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CLASS:cardWrapper EXTRACT=TXT');
	prove=iimGetExtract().replace(/\s+/g,'');
	var proves = prove.match(/Телефон(.*)Факс/g);
	if (proves==null)
    	{
	if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Закупки') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
        k++;
        start();
        }
        else
        {
	var proves = prove.match(/Телефон(.*)Факс/g).join('');
	var phones = '';
	for (j = 7; j<=proves.length-5; j++)
	{
	phones+=proves[j].replace(/\s+/g,'<SP>');
	}
	phone=phones.replace(';','');
	}

iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CLASS:cardWrapper EXTRACT=TXT');
	prove=iimGetExtract();
	var proves = prove.match(/Сокращенное наименование(.*)ИНН/g);
	if (proves==null)
    	{
	if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Закупки') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
        k++;
        start();
        }
        else
	{
	var proves = prove.match(/Сокращенное наименование(.*)ИНН/g).join('');
	var ShortNamesz = '';
	for (j = 24; j<=proves.length-4; j++)
	{
	ShortNamesz+=proves[j].replace(/\s+/g,'<SP>');
	}
	ShortNamese=ShortNamesz.replace(';','');
	ShortNames=ShortNamese.replace('"','\'');
        }
    iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 '+ShortNames+';'+MailAdres+';'+phone+';'+Mail+';'+Human+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\ FILE=log.csv'); 
      if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Закупки') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
			     
	}
	 
	 else 
	        if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Закупки') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
	 	
	 	
	  if (zak == 20)
	  {iimPlayCode('PAUSE');}

        }
      
      }

   }

   

  
 	if 
 	(k == 1)
     iimPlayCode('EVENT TYPE=CLICK SELECTOR="#exceedSphinxPageSizeDiv>DIV>TABLE>TBODY>TR>TD:nth-of-type(2)>DL>DT>A" BUTTON=0');
 		else
	iimPlayCode('EVENT TYPE=CLICK SELECTOR="#exceedSphinxPageSizeDiv>DIV:nth-of-type('+k+')>TABLE>TBODY>TR>TD:nth-of-type(2)>DL>DT>A" BUTTON=0');
  
       if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=TXT:Выбор<SP>реестра<SP>зарегистрированных<SP>организаций') == true)
   iimPlay('CODE:TAG POS=1 TYPE=INPUT:BUTTON ATTR=NAME:из<SP>Реестра<SP>организаций<SP>223-ФЗ');

iimPlayCode('SET !TIMEOUT_STEP 0\nSET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=TD ATTR=CLASS:icePnlTbSetCnt<SP>pgzPnlTabSetCnt EXTRACT=TXT');
prove=iimGetExtract().replace(/\s+/g,'');
if (/@/.test(prove))
	{
    iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=TD ATTR=CLASS:icePnlTbSetCnt<SP>pgzPnlTabSetCnt EXTRACT=TXT');
	prove=iimGetExtract();
	var proves = prove.match(/Контактное лицо(.*)Часовая/g).join('');
	var Humans = '';
	for (j = 15; j<=proves.length-8; j++)
	{
	Humans+=proves[j].replace(/\s+/g,'<SP>');
	Human=Humans.replace(';','');
	}
    
    iimPlayCode('TAG POS=1 TYPE=SPAN ATTR=TXT:*@* EXTRACT=TXT');
	Mails=iimGetExtract().replace(/\s+/g,'<SP>');
	Mail=Mails.replace(';','');



    iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=TD ATTR=CLASS:icePnlTbSetCnt<SP>pgzPnlTabSetCnt EXTRACT=TXT');
    prove=iimGetExtract();
    var proves = prove.match(/Почтовый адрес(.*)Контактный/g);
    if (proves==null)
    {
	if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Реестр<SP>организаций') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
    k++;
   start();
    }
    else
    {
    var proves = prove.match(/Почтовый адрес(.*)Контактный/g).join('');
    var MailAdress = '';
     for (j = 14; j<=proves.length-11; j++)
	{
	MailAdress+=proves[j].replace(/\s+/g,'<SP>');
	}
	MailAdres=MailAdress.replace(';','');
	}

    iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=TD ATTR=CLASS:icePnlTbSetCnt<SP>pgzPnlTabSetCnt EXTRACT=TXT');
	prove=iimGetExtract().replace(/\s+/g,'');
	var proves = prove.match(/Телефон(.*)Факс/g);
	if (proves==null)
    	{
	if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Реестр<SP>организаций') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
        k++;
        start();
        }
        else
        {
	var proves = prove.match(/Телефон(.*)Факс/g).join('');
	var phones = '';
	for (j = 7; j<=proves.length-5; j++)
	{
	phones+=proves[j].replace(/\s+/g,'<SP>');
	}
	phone=phones.replace(';','');
	}

	iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=TD ATTR=CLASS:icePnlTbSetCnt<SP>pgzPnlTabSetCnt EXTRACT=TXT');
	prove=iimGetExtract();
	var proves = prove.match(/Сокращенное наименование(.*)ИНН/g);
	if (proves==null)
    	{
	if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Реестр<SP>организаций') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
        k++;
        start();
        }
        else
	{
	var proves = prove.match(/Сокращенное наименование(.*)ИНН/g).join('');
	var ShortNamesz = '';
	for (j = 24; j<=proves.length-4; j++)
	{
	ShortNamesz+=proves[j].replace(/\s+/g,'<SP>');
	}
	ShortNamese=ShortNamesz.replace(';','');
	ShortNames=ShortNamese.replace('"','\'');
        }
    iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 '+ShortNames+';'+MailAdres+';'+phone+';'+Mail+';'+Human+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\ FILE=log.csv'); 
      if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Реестр<SP>организаций') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
			     
	}
	 else 
	        if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=SPAN ATTR=TXT:Реестр<SP>организаций') != true)
	        {
	 	iimPlayCode('TAB CLOSE');}
	 

        }
      
      }
      }