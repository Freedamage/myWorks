var Count = '100'; // Кол-во человек, которым будет поставлен лайк. Рекомендуется не больше 100 в сутки, с большим интервалом.
var Wait = '4'; // Ожидание в секундах между лайками.
var KeyApi = '98de43a3a6f26704110ss3baabef49833'; // Сюда свой API ключ от рукапчи. https://rucaptcha.com/



function captcha () {
iimPlayCode('TAB OPEN\nTAB T=2');
iimPlayCode('URL GOTO=http://rucaptcha.com/in.php?key='+KeyApi+'&method=userrecaptcha&googlekey='+KeyOfVk+'&pageurl=vk.com');
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
iimPlayCode('WAIT SECONDS=3\nTAG POS=1 TYPE=BUTTON ATTR=TXT:Отмена');  


}

var KeyOfVk = '6Le00B8TAAAAACHiybbHy8tMOiJhM5vh88JVtP4c';

for (j = 1; j<=Count; j+=2) 
{
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:labeled<SP>name');
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=CLASS:labeled<SP>name');
}
for (z = 1; z<=Count; z++) 
{
iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nEVENT TYPE=CLICK SELECTOR="#results>DIV:nth-of-type('+z+')>DIV:nth-of-type(3)>DIV>A" BUTTON=0');
iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nEVENT TYPE=CLICK SELECTOR="#profile_photo_link>IMG" BUTTON=0');
iimPlayCode('WAIT SECONDS=1');
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=TXT:Мне<SP>нравится<SP>*');
iimPlayCode('WAIT SECONDS=1');
if(iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=script ATTR=src:*recaptcha*')>0)
{
 captcha();
}
iimPlayCode('BACK');
iimPlayCode('WAIT SECONDS=1');
iimPlayCode('BACK');
iimPlayCode('WAIT SECONDS='+Wait);
}
