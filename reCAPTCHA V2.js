var KeyApi = 'СЮДА_КЛЮЧ_ОТ_РУКАПЧИ'; // Сюда свой API ключ от рукапчи. https://rucaptcha.com/
var KeyOfVk = 'КЛЮЧ_ОТ_САЙТА'; // Ключ от сайта.
var site = 'epay.info'; // Сайт, на котором будет решаться каптча.

function captcha () {
iimPlayCode('TAB OPEN\nTAB T=2');
iimPlayCode('URL GOTO=http://rucaptcha.com/in.php?key='+KeyApi+'&method=userrecaptcha&googlekey='+KeyOfVk+'&pageurl='+site);
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT');  
c=iimGetExtract().match(/\d+/g).join(''); 
iimPlayCode('URL GOTO=http://rucaptcha.com/res.php?key='+KeyApi+'&action=get&id='+c);
boola = true;
while (boola == true)
{
if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=* ATTR=TXT:CAPCHA_NOT_READY') == true)
	{iimPlayCode('REFRESH');}
else 
   {boola = false; break;}
}
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXTALL');  
z=iimGetExtract();
zi = '';
for (p = 3; p<=z.length-1; p++)
 zi+=z[p];
iimPlayCode('TAB CLOSE');
iimPlayCode('WAIT SECONDS=1\nTAG POS=1 TYPE=TEXTAREA FORM=ID:recaptcha-demo-form ATTR=ID:g-recaptcha-response CONTENT='+zi);
}
if (iimPlayCode('FRAME NAME="undefined"\nTAG POS=1 TYPE=DIV ATTR=TXT:Privacy<SP>-<SP>Terms') == true)
{
captcha();
}


