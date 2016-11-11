var nameOfdiv = '132038856_2'; // Сюда номер блока.
var linkToAlbum = 'https://vk.com/album368954290_237757431'; // Сслыка на альбом.
var linkToPost = 'https://vk.com/skriptu_na_zakaz'; // Ссылка на группу или страницу, где будет пост.
var Count = 4; // Кол-во размещений. Умножается на 3.
var KeyApi = 'СЮДА_ВАШ_КЛЮЧ_ОТ_РУКАПЧА'; // Сюда свой API ключ от рукапчи. https://rucaptcha.com/
var waitSeconds = '0.1'; // Задержка между размежениями, указывается в минутах.




/*

               Дабы все работало, дальше ничего не меняем. :)


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



for (j = 1; j<=Count; j++)
{
iimPlayCode('URL GOTO='+linkToAlbum);
iimPlayCode('TAG POS=1 TYPE=A ATTR=HREF:https://vk.com/phot*');
iimPlayCode('TAG POS=1 TYPE=A ATTR=ID:pv_photo EXTRACT=HTM');
jpgs=iimGetExtract().match(/src=(.*)\"/g).join('').replace('src=','');
jpg=jpgs.replace(/"/g,'');
iimPlayCode('SET !DATASOURCE C:\\Comments\\text.txt\n SET !DATASOURCE_LINE 1\nADD !EXTRACT {{!COL1}}');
textz=iimGetExtract();
iimPlayCode('URL GOTO='+linkToPost);
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:Комментировать');
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CLASS:reply_fakebox');
iimPlayCode('EVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" CHARS="'+jpg+' "');
iimPlayCode('WAIT SECONDS=2\nEVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"');
iimPlayCode('EVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" CHARS="'+textz+'"');
iimPlayCode('SET !ERRORIGNORE YES\nEVENT TYPE=CLICK SELECTOR="#reply_as_group-'+nameOfdiv+'>IMG" BUTTON=0');
iimPlayCode('EVENT TYPE=CLICK SELECTOR="#reply_button-'+nameOfdiv+'" BUTTON=0\nWAIT SECONDS=3');
if (iimPlayCode('SET !TIMEOUT_STEP 0\nFRAME NAME="undefined"\nTAG POS=1 TYPE=DIV ATTR=TXT:Конфиденциальность<SP>-<SP>Условия<SP>использования') == true)
 	{
		captcha();
	}
Wait=waitSeconds*60;
iimPlayCode('WAIT SECONDS='+Wait);
iimPlayCode('URL GOTO='+linkToAlbum);
iimPlayCode('TAG POS=2 TYPE=A ATTR=HREF:https://vk.com/phot*');
iimPlayCode('TAG POS=1 TYPE=A ATTR=ID:pv_photo EXTRACT=HTM');
jpgs=iimGetExtract().match(/src=(.*)\"/g).join('').replace('src=','');
jpg=jpgs.replace(/"/g,'');
iimPlayCode('SET !DATASOURCE C:\\Comments\\text.txt\n SET !DATASOURCE_LINE 1\nADD !EXTRACT {{!COL1}}');
textz=iimGetExtract();
iimPlayCode('URL GOTO='+linkToPost);
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:Комментировать');
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CLASS:reply_fakebox');
iimPlayCode('EVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" CHARS="'+jpg+' "');
iimPlayCode('WAIT SECONDS=2\nEVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"');
iimPlayCode('EVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" CHARS="'+textz+'"');
iimPlayCode('SET !ERRORIGNORE YES\nEVENT TYPE=CLICK SELECTOR="#reply_as_group-'+nameOfdiv+'>IMG" BUTTON=0');
iimPlayCode('EVENT TYPE=CLICK SELECTOR="#reply_button-'+nameOfdiv+'" BUTTON=0\nWAIT SECONDS=3');
if (iimPlayCode('SET !TIMEOUT_STEP 0\nFRAME NAME="undefined"\nTAG POS=1 TYPE=DIV ATTR=TXT:Конфиденциальность<SP>-<SP>Условия<SP>использования') == true)
 	{
		captcha();
	}
Wait=waitSeconds*60;
iimPlayCode('WAIT SECONDS='+Wait);
iimPlayCode('URL GOTO='+linkToAlbum);
iimPlayCode('TAG POS=3 TYPE=A ATTR=HREF:https://vk.com/phot*');
iimPlayCode('TAG POS=1 TYPE=A ATTR=ID:pv_photo EXTRACT=HTM');
jpgs=iimGetExtract().match(/src=(.*)\"/g).join('').replace('src=','');
jpg=jpgs.replace(/"/g,'');
iimPlayCode('SET !DATASOURCE C:\\Comments\\text.txt\n SET !DATASOURCE_LINE 1\nADD !EXTRACT {{!COL1}}');
textz=iimGetExtract();
iimPlayCode('URL GOTO='+linkToPost);
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:Комментировать');
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CLASS:reply_fakebox');
iimPlayCode('EVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" CHARS="'+jpg+' "');
iimPlayCode('WAIT SECONDS=2\nEVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" KEYS="[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]"');
iimPlayCode('EVENTS TYPE=KEYPRESS SELECTOR="#reply_field-'+nameOfdiv+'" CHARS="'+textz+'"');
iimPlayCode('SET !ERRORIGNORE YES\nEVENT TYPE=CLICK SELECTOR="#reply_as_group-'+nameOfdiv+'>IMG" BUTTON=0');
iimPlayCode('EVENT TYPE=CLICK SELECTOR="#reply_button-'+nameOfdiv+'" BUTTON=0\nWAIT SECONDS=3');
if (iimPlayCode('SET !TIMEOUT_STEP 0\nFRAME NAME="undefined"\nTAG POS=1 TYPE=DIV ATTR=TXT:Конфиденциальность<SP>-<SP>Условия<SP>использования') == true)
 	{
		captcha();
	}
Wait=waitSeconds*60;
iimPlayCode('WAIT SECONDS='+Wait);
}
