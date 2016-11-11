var CountOfAccpets = 10; // Кол-во заявок в грппы, котоые стоит принять.
var WaitSeconds = 40;  // Здесь указываете задержку между вступлением в группу. В секундах.
var KeyApi = 'СЮДА_ВАШ_КЛЮЧ_ОТ_РУКАПЧА'; // Сюда свой API ключ от рукапчи. https://rucaptcha.com/







/*                                                                          
  
                   Дальше ничего не меняем, дабы все работало. :)

*/


var KeyOfVk = '6Le00B8TAAAAACHiybbHy8tMOiJhM5vh88JVtP4c'; // Ключ от сайта. Уже установлен, не менять.
var site = 'vk.com'; // Сайт, на котором будет решаться каптча.



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
iimPlayCode('WAIT SECONDS=1\nTAG POS=1 TYPE=TEXTAREA ATTR=NAME:g-recaptcha-response CONTENT='+zi);
iimPlayCode('WAIT SECONDS=1\nTAG POS=1 TYPE=BUTTON ATTR=TXT:Отмена');
}



 iimPlayCode('URL GOTO=https://vk.com/groups');

for (j = 0; j<=CountOfAccpets; j++)
{
 iimPlayCode('SET !ERRORIGNORE YES\nTAG POS=1 TYPE=BUTTON ATTR=TXT:Вступить<SP>в<SP>группу\nWAIT SECONDS='+WaitSeconds+);
 
 	if (iimPlayCode('SET !TIMEOUT_STEP 0\nFRAME NAME="undefined"\nTAG POS=1 TYPE=DIV ATTR=TXT:Конфиденциальность<SP>-<SP>Условия<SP>использования') == true)
 	{
		captcha();
	}
	iimPlay('CODE:REFRESH');
}
