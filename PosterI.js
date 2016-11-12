var numberOfalbum = '368954290_237855283' // Номер из ссылки на альбом.
var nameOfalbum= 'фывфы'; // Название альбома.
var Count = 4; // Кол-во групп.
var KeyApi = 'СЮДА_ВАШ_КЛЮЧ_ОТ_РУКАПЧА'; // Сюда свой API ключ от рукапчи. https://rucaptcha.com/
var waitSeconds = '6'; // Задержка между размежениями, указывается в секундах.
var CountPhotos = '4'; // Кол-во фотографий в альбоме.



/*

               Дабы все работало, дальше ничего не меняем. :)


*/




var zal = 0;
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

for (j = 1; j<=Count; j++)
{
iimPlayCode('SET !DATASOURCE C:\\Comments\\text.txt\n SET !DATASOURCE_LINE 1\nADD !EXTRACT {{!COL1}}');
textz=iimGetExtract();
iimPlayCode('SET !DATASOURCE C:\\Comments\\groups.txt\n SET !DATASOURCE_LINE '+j+'\nADD !EXTRACT {{!COL1}}');
linkToPost=iimGetExtract();
iimPlayCode('URL GOTO='+linkToPost);
iimPlayCode('TAG POS=1 TYPE=A ATTR=TXT:Фотография');
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=TITLE:'+nameOfalbum)
zal++;
iimPlayCode('TAG POS='+zal+' TYPE=A ATTR=ID:photos_choose_row*'+numberOfalbum);
window.document.getElementById('post_field').innerHTML=textz;
iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=ID:send_post\nWAIT SECONDS=1');
if (iimPlayCode('SET !TIMEOUT_STEP 0\nFRAME NAME="undefined"\nTAG POS=1 TYPE=DIV ATTR=TXT:Конфиденциальность<SP>-<SP>Условия<SP>использования') == true)
 	{
		captcha();
	}
iimPlayCode('WAIT SECONDS='+waitSeconds);
if (zal == CountPhotos){
zal = 0;}
}
