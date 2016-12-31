/*           Фотографии                */
var numberOfalbum1 = '368954290_237855283' // Номер из ссылки на альбом. 1 аккаунта
var numberOfalbum2 = '368954290_237855283' // Номер из ссылки на альбом. 2 аккаунта
var numberOfalbum3 = '368954290_237855283' // Номер из ссылки на альбом. 3 аккаунта
var numberOfalbum4 = '368954290_237855283' // Номер из ссылки на альбом. 4 аккаунта 
var numberOfalbum5 = '368954290_237855283' // Номер из ссылки на альбом. 5 аккаунта
var numberOfalbum6 = '368954290_237855283' // Номер из ссылки на альбом. 6 аккаунта
var numberOfalbum7 = '368954290_237855283' // Номер из ссылки на альбом. 7 аккаунта
var numberOfalbum8 = '368954290_237855283' // Номер из ссылки на альбом. 8 аккаунта
var numberOfalbum9 = '368954290_237855283' // Номер из ссылки на альбом. 9 аккаунта
var numberOfalbum10 = '368954290_237855283' // Номер из ссылки на альбом. 10 аккаунта
var nameOfalbum = 'фывфы'; // Название альбома. Сделать одно для всех!
var CountPhotos = 4; // Каждые сколько сообщений будет менять фотографию.
var CountPt = 13; // Всего фотографий в альбоме.

/*           Текст               */
var linesOftext = 4; // Кажде сколько размещений менять текст.
var amountOflines = 13; // Всего видов текста.

/*           Аккаунты               */
var CountOfAccs = 10; // Кол-во аккаунтов.
var Count = 100; // Кол-во групп на 1 аккаунт.

var log1 = ''; // Логин от 1 аккаунта
var pass1 = ''; // Пароль от 1 акканта

var log2 = ''; // Логин от 2 аккаунта
var pass2 = ''; // Пароль от 2 акканта

var log3 = ''; // Логин от 3 аккаунта
var pass3 = ''; // Пароль от 3 акканта

var log4 = ''; // Логин от 4 аккаунта
var pass4 = ''; // Пароль от 4 акканта

var log5 = ''; // Логин от 5 аккаунта
var pass5 = ''; // Пароль от 5 акканта

var log6 = ''; // Логин от 6 аккаунта
var pass6 = ''; // Пароль от 6 акканта

var log7 = ''; // Логин от 7 аккаунта
var pass7 = ''; // Пароль от 7 акканта

var log8 = ''; // Логин от 8 аккаунта
var pass8 = ''; // Пароль от 8 акканта

var log9 = ''; // Логин от 9 аккаунта
var pass9 = ''; // Пароль от 9 акканта

var log10 = ''; // Логин от 10 аккаунта
var pass10 = ''; // Пароль от 10 акканта




/*           Остальное              */
var KeyApi = 'СЮДА_ВАШ_КЛЮЧ_ОТ_РУКАПЧА'; // Сюда свой API ключ от рукапчи. https://rucaptcha.com/
var waitSeconds = 6; // Задержка между размежениями, указывается в секундах.


/*   
Текст в  C:\\Comments\\text.txt\  На каждой строчке новый текст в кавычках Пример: "такой формат текста записанный в одну строчку и в кавычках, следующий писать на другой строчке в кавычках"
Группы в C:\\Comments\\groups.txt\ На каждой строчке новая группа Пример: vk/группа1
                                                                          vk/группа2
*/


/*
               
               Дабы все работало, дальше ничего не меняем. :)


*/










var linezOftext = 0;
var lineOftext = 1;
var zala = 0;
var zal = 1;
var KeyOfVk = '6Le00B8TAAAAACHiybbHy8tMOiJhM5vh88JVtP4c'; // Ключ от сайта. Уже установлен, не менять.
var site = 'vk.com'; // Сайт, на котором будет решаться каптча.


function album(album){
iimPlayCode('TAG POS='+zal+' TYPE=A ATTR=ID:photos_choose_row*'+album);
}

function loga (a, b){
imPlayCode('URL GOTO=http://vk.com');
if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=H2 ATTR=CLASS:ij_header') == true)
{
imPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:index_login_form ATTR=ID:index_email CONTENT='+a);
imPlayCode('ET !ENCRYPTION NO\nTAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:index_login_form ATTR=ID:index_pass CONTENT='+b);
imPlayCode('TAG POS=1 TYPE=BUTTON FORM=ID:index_login_form ATTR=CLASS:index_login_button<SP>flat_button<SP>button_big_text&&ID:index_login_button');
}
else{
iimPlayCode("TAG POS=1 TYPE=A ATTR=ONCLICK:if<SP>(checkEvent(event)<SP>===<SP>false)<SP>{<SP>window.AudioPlayer<SP>&&<SP>AudioPlayer.clearAllCacheKeys();<SP>window.Notifier<SP>&&<SP>Notifier.lcSend('logged_off');<SP>location.href<SP>=<SP>this.href;<SP>return<SP>cancelEvent(event);<SP>}&&HREF:*logout&*&_origin=https://vk.com&&ID:top_logout_link&&CLASS:top_profile_mrow");
iimPlayCode("TAG POS=1 TYPE=INPUT:TEXT FORM=ID:quick_login_form ATTR=ID:quick_email CONTENT="+a); 
iimPlayCode("SET !ENCRYPTION NO\nTAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:quick_login_form ATTR=ID:quick_pass CONTENT="+b);
imPlayCode('TAG POS=1 TYPE=BUTTON ATTR=ID:quick_login_button&&CLASS:quick_login_button<SP>flat_button<SP>button_wide');}}

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
else {
	boola = false; break;}
}
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXTALL');  
z=iimGetExtract();
zi = '';
for (p = 3; p<=z.length-1; p++)
 zi+=z[p];
iimPlayCode('TAB CLOSE');
iimPlayCode('WAIT SECONDS=1\nTAG POS=1 TYPE=TEXTAREA ATTR=NAME:g-recaptcha-response CONTENT='+zi);
iimPlayCode('WAIT SECONDS=1\nTAG POS=1 TYPE=BUTTON ATTR=CLASS:flat_button');
}


for (ka = 1; ka<= CountOfAccs; ka++)
	{
		if (ka == 1){
         loga(log1, pass1);
		}
        else if (ka == 2){
		loga(log2, pass2);
		}
		else if (ka == 3){
		loga(log3, pass3);
		}
		else if (ka == 4){
		loga(log4, pass4);
		}
		else if (ka == 5){
		loga(log5, pass5);	
		}
		else if (ka == 6){
		loga(log6, pass6);	
		}
		else if (ka == 7){
		loga(log7, pass7);	
		}
		else if (ka == 8){
		loga(log8, pass8);	
		}
		else if (ka == 9){
		loga(log9, pass9);	
		}
		else if (ka == 10){
		loga(log10, pass10);	
		}
for (j = 1; j<=Count; j++)
{
linezOftext++;
	if (linezOftext == linesOftext){
		lineOftext++
		linezOftext = 0;
		 if (amountOflines == lineOftext){ 
		    lineOftext = 1;}}
iimPlayCode('SET !DATASOURCE C:\\Comments\\text.txt\n SET !DATASOURCE_LINE '+lineOftext+'\nADD !EXTRACT {{!COL1}}');
textz=iimGetExtract();
iimPlayCode('SET !DATASOURCE C:\\Comments\\groups.txt\n SET !DATASOURCE_LINE '+j+'\nADD !EXTRACT {{!COL1}}');
linkToPost=iimGetExtract();
iimPlayCode('URL GOTO='+linkToPost);
iimPlayCode('TAG POS=1 TYPE=A ATTR=CLASS:ms_item<SP>ms_item_photo<SP>_type_photo');
var nameOfalbums = nameOfalbum.replace(/\s+/g,'<SP>');
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=TITLE:'+nameOfalbums)
		if (ka == 1){
		album(numberOfalbum1);
		}
        else if (ka == 2){
		album(numberOfalbum2);
		}
		else if (ka == 3){
		album(numberOfalbum3);
		}
		else if (ka == 4){
		album(numberOfalbum4);
		}
		else if (ka == 5){
		album(numberOfalbum5);	
		}
		else if (ka == 6){
		album(numberOfalbum6);	
		}
		else if (ka == 7){
		album(numberOfalbum7);	
		}
		else if (ka == 8){
		album(numberOfalbum8);
		}
		else if (ka == 9){
		album(numberOfalbum9);
		}
		else if (ka == 10){
		album(numberOfalbum10);
		}
zala++;
window.document.getElementById('post_field').innerHTML=textz;
iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=ID:send_post\nWAIT SECONDS=1');
if (iimPlayCode('SET !TIMEOUT_STEP 0\nFRAME NAME="undefined"\nTAG POS=1 TYPE=DIV ATTR=TXT:Конфиденциальность<SP>-<SP>Условия<SP>использования') == true)
 	{
		captcha();
	}
iimPlayCode('WAIT SECONDS='+waitSeconds);
if (zala == CountPhotos){
zal++;
zala = 0;
 if (zal == CountPt){ 
 zal = 1; }}
}}
