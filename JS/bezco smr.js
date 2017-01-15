var oblSite = 50; // Кол-во объявлений на сайте-админке. 
var parseBz = 12; // Кол-во спарсенных страниц с Bzeco.
var smrK = 12; // Кол-во спарсенных страниц smr. 
var prox = false; // Включить/отклчить прокси. Поменять значение на true/false. Покси советую не подключать, но пускай будут на свякий случай.


/* Часы проверки по сайту SMR  */
var satrTimeOfWorkSmr = '0000'; // Здесь указывать ОТ. Промежуток парсина и поверки СМР. Время писать слитно в формате ЧасыМинуты. 
var endTimeOfWorkSmr = '2330'; // Здесь указывать ДО. Промежуток парсина и поверки СМР. Время писать слитно в формате ЧасыМинуты.

/* Часы проверки по сайту BZECO  */
var satrTimeOfWorkBzeco = '0000'; // Здесь указывать ОТ. Промежуток парсина и поверки БЗЕКО. Время писать слитно в формате ЧасыМинуты. 
var endTimeOfWorkBzeco = '2330'; // Здесь указывать ДО. Промежуток парсина и поверки БЗЕКО. Время писать слитно в формате ЧасыМинуты.




/*

            
            Дабы все работало, дальше ничего не меняем :)


*/









for (start = 1; start<=1; start++)
{
dat = new Date();
full = '';
full += dat;
full = full.match(/\d+/g).join('');
fulla = '';
for (zak =0; zak<=full.length-7; zak++)
fulla +=full[zak];
function proxy () {
iimPlayCode('URL GOTO=http://www.freeproxy-list.ru/proxy-list-country/RU');
iimPlayCode('WAIT SECONDS=4');
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=CLASS:col-md-1<SP>td EXTRACT=TXT');
por=iimGetExtract().match(/\)\d+/).join('');
port='';
for (i=1; i<=por.length-1; i++)
port+=por[i];
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=CLASS:col-md-2<SP>td EXTRACT=TXT');
newIp=iimGetExtract();;

var ip = newIp;
var socksver = '5'
var portall = port;


iimPlay("CODE:URL GOTO=about:config\n WAIT SECONDS=1")

var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

// proxy configuration
prefs.setIntPref("network.proxy.type", 1);

// use the proxy server for all protocols
//prefs.setBoolPref("network.proxy.share_proxy_settings", true);
// each proxy independent
prefs.setBoolPref("network.proxy.share_proxy_settings", false);

// HTTP Proxy
prefs.setCharPref("network.proxy.http", ip);
prefs.setIntPref("network.proxy.http_port", portall);

// SSL Proxy
prefs.setCharPref("network.proxy.ssl", ip);
prefs.setIntPref("network.proxy.ssl_port", portall);

// FTP Proxy
prefs.setCharPref("network.proxy.ftp",ip)
prefs.setIntPref("network.proxy.ftp_port",portall);

// SOCKS Host
prefs.setCharPref("network.proxy.socks", ip);
prefs.setIntPref("network.proxy.socks_port", portall);
prefs.setIntPref("network.proxy.socks_version", socksver);
}
if (prox == true){
proxy();}

add = 0;
amount = 1;
const countOfLines = 70; // Кол-во сток

var times = new Date();
var hours = times.getHours();
var minutes = times.getMinutes();
var timez = hours+' '+minutes;
if (timez[4] == undefined)
var time = timez.replace(/\s+/g,'0');
else
var time = timez.replace(/\s+/g,'');
if (time >= satrTimeOfWorkBzeco && time <= endTimeOfWorkBzeco)
{
for (dell=1; dell<=parseBz; dell++) //Удаляем просмотренные.
{
 
 iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\IIM\\ii'+dell+'.txt');

}

iimPlayCode('URL GOTO=http://bezco.ru/ads/sankt-peterburg?m%5B1000%5D=&p=92&a=0&pl=&pr=&c=&PAGEN_5=1');
for (z=1; z <=parseBz; z++) {
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:'+z);
a = 5;b = 7;c = 13;d = 15;e = 1;f = 4;
for (j=1; j<=10; j++)
{
iimPlayCode('TAG POS='+a+' TYPE=B ATTR=* EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE=ii'+z+'.txt'); 
iimPlayCode('TAG POS='+b+' TYPE=B ATTR=* EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE=ii'+z+'.txt'); 
iimPlayCode('TAG POS='+c+' TYPE=TD ATTR=* EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE=ii'+z+'.txt');
iimPlayCode('TAG POS='+d+' TYPE=TD ATTR=* EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE=ii'+z+'.txt'); 
iimPlayCode('TAG POS='+e+' TYPE=TD ATTR=COLSPAN:2&&CLASS:notes EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE=ii'+z+'.txt');
iimPlayCode('TAG POS='+f+' TYPE=DIV ATTR=ID:right EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE=ii'+z+'.txt');
iimPlayCode('TAG POS='+e+' TYPE=A ATTR=TXT:Смотреть<SP>подробнее EXTRACT=HREF\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE=ii'+z+'.txt');
a+=4;b+=4;c+=9;d+=9;e+=1;f+=1;
}
}
}
// Идем на smr


var times = new Date();
var hours = times.getHours();
var minutes = times.getMinutes();
var timez = hours+' '+minutes;
if (timez[4] == undefined)
var time = timez.replace(/\s+/g,'0');
else
var time = timez.replace(/\s+/g,'');
if (time >= satrTimeOfWorkSmr && time <= endTimeOfWorkSmr)
{
for (dell=1; dell<=smrK; dell++) //Удаляем просмотренные.
{
 
 iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\IIM\\SMR\\smrKv'+dell+'.txt');
 iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\IIM\\SMR\\smrKo'+dell+'.txt');


}

iimPlayCode('URL GOTO=https://sankt-peterburg.smr77.ru/snyat_kvartiru/');
for (l=1;l<=smrK;l++)
{
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:'+l);
for (j=1; j<=10; j++)
{
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title  EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKv'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title  EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKv'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:price EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKv'+l+'.txt');
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:address EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKv'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title EXTRACT=HREF\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKv'+l+'.txt')

}
}


iimPlayCode('URL GOTO=https://sankt-peterburg.smr77.ru/snyat_komnatu/');
for (l=1;l<=smrK;l++)
{
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:'+l);
for (j=1; j<=10; j++)
{
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title  EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKo'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title  EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKo'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:price EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKo'+l+'.txt');
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:address EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKo'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title EXTRACT=HREF\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=smrKo'+l+'.txt')
}
}
}

var logSPB = 'SPB'; // Логин от Питера
var pasSPB = 'СЕКРЕТИК'; // Пароль 
iimPlayCode('URL GOTO=http://admin.bazavashdom.ru');
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:Выйти');
iimPlayCode('WAIT SECONDS=4');
iimPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/login/ ATTR=NAME:username CONTENT='+logSPB);
iimPlayCode('SET !ENCRYPTION NO\nTAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/login/ ATTR=NAME:password CONTENT='+pasSPB);
iimPlayCode('TAG POS=1 TYPE=BUTTON FORM=ACTION:/login/ ATTR=TXT:Вход');
iimPlayCode('WAIT SECONDS=25');

iimPlayCode('URL GOTO=http://admin.bazavashdom.ru/client/');
// Перебор строк из файла, поиск соответствий

const smrLines = 50;
trueOrfalse = false;
var tr = 0;
var nextPage = 2;
for (par = 1; par<=oblSite; par++)
{
  if (par == oblSite)
  {
    iimPlayCode('TAG POS=2 TYPE=A ATTR=TXT:'+nextPage)
    par = 1;
    nextPage++;
  }
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:date<SP>hide-fold EXTRACT=TXT');
today=iimGetExtract();
if(!/Сегодня/g.test(today))
  break;
var proveOfcheck=false;
iimPlayCode('TAG POS='+par+' TYPE=A ATTR=TXT:Редактировать EXTRACT=HREF');
cul=iimGetExtract();
ciks = '';
for (mas = 43; mas<=cul.length-6; mas++)
{
 ciks+=cul[mas];
}
var etaj = par;
if (trueOrfalse == true)
{
  var etaj = par-tr;
}
kalu=par-1;
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:status EXTRACT=TXT');
prove=iimGetExtract();
if (iimPlayCode('TAG POS='+kalu+' TYPE=TD ATTR=CLASS:col<SP>col-square') == true)
{
iimPlayCode('TAG POS='+kalu+' TYPE=TD ATTR=CLASS:col<SP>col-square EXTRACT=TXT');
st=iimGetExtract().replace(/\s+/g,'');
if(!/Этажность/.test(st) )
{
 tr++;
 etaj=par-tr;
 trueOrfalse = true;
}
}
if (iimPlayCode('TAG POS='+par+' TYPE=TD ATTR=CLASS:col<SP>col-square') == true && prove == 'На модерации')
{
 iimPlayCode('TAG POS='+par+' TYPE=TD ATTR=CLASS:col<SP>col-square EXTRACT=TXT');
 st=iimGetExtract().replace(/\s+/g,'');
if(!/Этажность/.test(st) )
{
  continue;
}
}
iimPlayCode('TAG POS='+par+' TYPE=H2 ATTR=* EXTRACT=TXT');
nameOfPost=iimGetExtract().replace(/\s+/g,'<SP>');
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:date<SP>hide-fold EXTRACT=TXT');
timeOfPost=iimGetExtract().replace(/\s+/g,'<SP>');
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:status EXTRACT=TXT');
prove=iimGetExtract();
if (prove == 'Неактуально' || prove == 'Размещено' )
{
 continue;
}
if (trueOrfalse == true)
{
  var etaj = par-tr;
}
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:more EXTRACT=TXT');
opis=iimGetExtract().replace(/\s+/g,'');  // opisanie
iimPlayCode('TAG POS='+etaj+' TYPE=DIV ATTR=CLASS:floor EXTRACT=TXT');
frik=iimGetExtract();
brak = '';
for (ki = 11; ki <=frik.length-1; ki++)
{
	brak+=frik[ki];
}
et=brak.replace('/',''); // Этажи сайта 1
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:square EXTRACT=TXT');
plz=iimGetExtract();
if ( plz == 'Площадь: Нет/Нет/Нет' || plz == 'Площадь: Нет//Нет')
{ pl = 9300;}
else
{
pl=plz.match(/\d+/g).join('');
pl/=10; // Площадь сайта 1
}
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:address<SP>hide-fold EXTRACT=TXT');
a=iimGetExtract(); // Улицы сайта 1
var ab = a.replace('ул','');
var abc = ab.replace('улица','');
var abcd = abc.replace('проспект','');
var abcde = abcd.replace('пр','');
var abcdef = abcde.replace('пркт','');
var abcdefa = abcdef.replace('пр-кт','');
var abcdefaa = abcdefa.replace('просп','');
var abcdefaaz = abcdefaa.replace('аллея','');
var abcdefaazs = abcdefaaz.replace('ал','');
var abcdefaazss = abcdefaazs.replace('проезд','');
var abcdefaazsst = abcdefaazss.replace('пр-д','');
var abcdefaazsste = abcdefaazsst.replace('пр-зд','');
var abcdefaazsstet = abcdefaazsste.replace('ш','');
var abcdefaazsstetw = abcdefaazsstet.replace('шоссе','');
var abcdefaazsstetww = abcdefaazsstetw.replace('пер','');
var abcdefaazsstetwww = abcdefaazsstetww.replace('переулок','');
var abcdefaazsstetwwwa = abcdefaazsstetwww.replace('набережная','');
var abcdefaazsstetwwwau = abcdefaazsstetwwwa.replace('бульвар','');
var abcdefaazsstetwwwaur = abcdefaazsstetwwwau.replace('б-р','');
var abcdefaazsstetwwwauri = abcdefaazsstetwwwaur.replace('бул','');
var abcdefaazsstetwwwaurio = abcdefaazsstetwwwauri.replace('спб','');
var abcdefaazsstetwwwaurioz = abcdefaazsstetwwwaurio.replace('Cанкт-Петербург','');
var abcdefaazsstetwwwauriozs = abcdefaazsstetwwwaurioz.replace('Москва','');
var abcdefaazsstetwwwauriozso = abcdefaazsstetwwwauriozs.replace('пушкин','');
var abcdefaazsstetwwwauriozsos = abcdefaazsstetwwwauriozso.replace('пискарёвка','');
var abcdefaazsstetwwwauriozsoso = abcdefaazsstetwwwauriozsos.replace('парголово','');
var abcdefaazsstetwwwauriozsosos = abcdefaazsstetwwwauriozsoso.replace('светлановское','');
var abcdefaazsstetwwwauriozsososs = abcdefaazsstetwwwauriozsosos.replace('оккервиль','');
var abcdefaazsstetwwwauriozsososss = abcdefaazsstetwwwauriozsososs.replace('кудрово','');
var abcdefaazsstetwwwauriozsososssb = abcdefaazsstetwwwauriozsososss.replace('.','');
var abcdefaazsstetwwwauriozsososssba = abcdefaazsstetwwwauriozsososssb.replace(',','');
var abcdefaazsstetwwwauriozsososssbaa = abcdefaazsstetwwwauriozsososssba.replace('-','');
var yl = abcdefaazsstetwwwauriozsososssbaa.replace(/\s+/g,'');
for (z=1; z<=parseBz;z++)
{
if (proveOfcheck == true) break;
var da = false;
var detectedPlt = false;
var detectedStr = false;
var detectedSt = false;
var times = new Date();
var hours = times.getHours();
var minutes = times.getMinutes();
var timez = hours+' '+minutes;
if (timez[4] == undefined)
var time = timez.replace(/\s+/g,'0');
else
var time = timez.replace(/\s+/g,'');
if (time >= satrTimeOfWorkBzeco && time <= endTimeOfWorkBzeco)
{
for (i=1; i <=countOfLines; i++)
{
var link = ''; // Этажи
var step = ''; // Этажи
var Place = ''; // Площадь
var About = ''; // Описание
var Streets = '';
var Street = ''; // Улица
var Streez = ''; // Улица
var v = '';
var one = '';
var two = '';
var sum = '';
iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
c=iimGetExtract();
if ( i == 1||i == 8 || i == 15 || i == 22 ||i == 29 || i == 36  || i == 43 || i == 50 || i == 57 || i == 64 ) // Улица
{
for (ci = 17; ci<=c.length-1; ci++)
{
Streetz+=c[ci].replace('ул ','');
}

var ab = Streetz.replace('ул','');
var abc = ab.replace('улица','');
var abcd = abc.replace('проспект','');
var abcde = abcd.replace('пр','');
var abcdef = abcde.replace('пркт','');
var abcdefa = abcdef.replace('пр-кт','');
var abcdefaa = abcdefa.replace('просп','');
var abcdefaaz = abcdefaa.replace('аллея','');
var abcdefaazs = abcdefaaz.replace('ал','');
var abcdefaazss = abcdefaazs.replace('проезд','');
var abcdefaazsst = abcdefaazss.replace('пр-д','');
var abcdefaazsste = abcdefaazsst.replace('пр-зд','');
var abcdefaazsstet = abcdefaazsste.replace('ш','');
var abcdefaazsstetw = abcdefaazsstet.replace('шоссе','');
var abcdefaazsstetww = abcdefaazsstetw.replace('пер','');
var abcdefaazsstetwww = abcdefaazsstetww.replace('переулок','');
var abcdefaazsstetwwwa = abcdefaazsstetwww.replace('набережная','');
var abcdefaazsstetwwwau = abcdefaazsstetwwwa.replace('бульвар','');
var abcdefaazsstetwwwaur = abcdefaazsstetwwwau.replace('б-р','');
var abcdefaazsstetwwwauri = abcdefaazsstetwwwaur.replace('бул','');
var abcdefaazsstetwwwaurio = abcdefaazsstetwwwauri.replace('спб','');
var abcdefaazsstetwwwaurioz = abcdefaazsstetwwwaurio.replace('Cанкт-Петербург','');
var abcdefaazsstetwwwauriozs = abcdefaazsstetwwwaurioz.replace('Москва','');
var abcdefaazsstetwwwauriozso = abcdefaazsstetwwwauriozs.replace('пушкин','');
var abcdefaazsstetwwwauriozsos = abcdefaazsstetwwwauriozso.replace('пискарёвка','');
var abcdefaazsstetwwwauriozsoso = abcdefaazsstetwwwauriozsos.replace('парголово','');
var abcdefaazsstetwwwauriozsosos = abcdefaazsstetwwwauriozsoso.replace('светлановское','');
var abcdefaazsstetwwwauriozsososs = abcdefaazsstetwwwauriozsosos.replace('оккервиль','');
var abcdefaazsstetwwwauriozsososss = abcdefaazsstetwwwauriozsososs.replace('кудрово','');
var abcdefaazsstetwwwauriozsososssb = abcdefaazsstetwwwauriozsososss.replace('.','');
var abcdefaazsstetwwwauriozsososssba = abcdefaazsstetwwwauriozsososssb.replace(',','');
var abcdefaazsstetwwwauriozsososssbaa = abcdefaazsstetwwwauriozsososssba.replace('-','');
var Streets = abcdefaazsstetwwwauriozsososssbaa.replace(/\s+/g,'');


 var da = false;
 var detectedPlt = false;
 var detectedStr = false;
 var detectedSt = false;
}
if ( (i == 3) || (i == 10) || (i == 17) || (i == 24) || (i == 31) || (i == 38) || (i == 45) || (i == 52) || (i == 59) || (i == 66) ) // Этаж
{
  if ( c == ', -' || c == ',-' || c == ' / ' || c == 'null' || c == '')
  {
  step = 2423678;
  }
    else
  {
  step=c.replace(' / ','');
  }
}
if ( i == 4 ||i == 11 || i == 18 || i == 25 ||i == 32 || i == 39  || i == 46 || i == 53 || i == 60 || i == 67 ) // Площадь
{
for (cida = 0; cida<=c.length-4; cida++)
   Place+=c[cida];
}




		if (step == et)
{
 detectedSt = true;
}
			if (Street == yl)
{
detectedStr = true;
}
		if (Place == pl || pl == 9300)
{
detectedPlt = true;
}


 	if (detectedPlt == true && detectedStr == true && detectedSt == true )
 	{
 
   iimPlayCode('TAG POS='+par+' TYPE=A ATTR=TXT:Редактировать');
   iimPlayCode('TAG POS=1 TYPE=H1 ATTR=TXT:Редактирование<SP>об* EXTRACT=TXT');
   checked=iimGetExtract().match(/\d+/g).join('');
   if (i >= 1 && i <=7) // Подбираем нужную нам ссылку.
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+7+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 7 && i <=14)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+14+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 14 && i <=21)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+21+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 21 && i <=28)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+28+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 28 && i <=35)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+35+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 35 && i <=42)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+42+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 42 && i <=49)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+49+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 49 && i <=56)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+56+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 56 && i <=63)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+63+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 63 && i <=70)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+70+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   

   if (i >= 1 && i <=7) // Сверяем описание
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+5+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 7 && i <=14)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+12+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 14 && i <=21)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+19+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 21 && i <=28)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+26+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 28 && i <=35)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+33+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 35 && i <=42)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+40+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 42 && i <=49)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+47+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 49 && i <=56)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+54+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 56 && i <=63)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+61+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 63 && i <=70)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+68+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
      
  iimPlayCode('TAG POS=1 TYPE=TEXTAREA FORM=ID:catalog-form ATTR=ID:id_body EXTRACT=TXT');
   getOpis=iimGetExtract().replace(/\s+/g,'');

  		if (getOpis == About)
{
 da = true;

} 

 

   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 '+par+'.<SP>'+ciks+'<SP>'+timeOfPost+'<SP>Совпадение,<SP>объявление:<SP>'+checked+'<SP>сслыка:<SP>'+link+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE='+fulla+'.txt'); 
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Разместить<SP>объявление');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Применить');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:OK')
    if (da == true )
    {
        iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Описание<SP>совпало\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\ FILE='+fulla+'.txt'); 
	var proveOfcheck=true;
        iimPlayCode('TAB CLOSE'); 
    }
		
    
    else if (da == false)
    
    {
        iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Описание<SP>не<SP>совпало\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM FILE='+fulla+'.txt'); 
	var proveOfcheck=true;
        iimPlayCode('TAB CLOSE'); 	
    }
    } 
    
    if (proveOfcheck == true) break;
 }

} 
}




var times = new Date();
var hours = times.getHours();
var minutes = times.getMinutes();
var timez = hours+' '+minutes;
if (timez[4] == undefined)
var time = timez.replace(/\s+/g,'0');
else
var time = timez.replace(/\s+/g,'');
if (time >= satrTimeOfWorkSmr && time <= endTimeOfWorkSmr)
{
for (za = 1; za <= smrK; za++){
if (proveOfcheck == true) break;
  var detectedPltKo = false;
  var detectedStrKo = false;
  var detectedStKo = false;
  var detectedPltKv = false;
  var detectedStrKv = false;
  var detectedStKv = false;
 for (li=1; li<=smrLines; li++ )
  {
iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+li+'\nADD !EXTRACT {{!COL1}}');
d=iimGetExtract();
iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+li+'\nADD !EXTRACT {{!COL1}}');
c=iimGetExtract();
if ( li == 1 || li == 6 || li == 11 || li == 16 || li == 21 || li == 26 || li == 31 || li == 36 ) // Перебор площади
{
  if (!/кв[^а]/.test(d) || !/кв[^а]/.test(c)) {
  PlaceKv = 9300;
  PlaceKo = 9300;
  }
  else{
  if (/студию/.test(d) || /студию/.test(c)){
  if (/студию/.test(d)){
  var PredKo = d.match(/\sсту(.*?)кв[^а]/g).join('');
  var PlaceKo = PredKo.match(/\d+/g);// Площадь комнат
  }
  else if (/студию/.test(c)){
  var PredKv = c.match(/\sсту(.*?)кв[^а]/g).join('');
  var PlaceKv = PredKv.match(/\d+/g); // Площадь квартир
  }
  }
  else{
  var PredKo = d.match(/\sква(.*?)кв[^а]/g).join(''); 
  var PredKv = c.match(/\sква(.*?)кв[^а]/g).join('');
  var PlaceKo = PredKo.match(/\d+/g);// Площадь комнат
  var PlaceKv = PredKv.match(/\d+/g);}} // Площадь квартир
  var detectedPltKo = false;
  var detectedStrKo = false;
  var detectedStKo = false;
  var detectedPltKv = false;
  var detectedStrKv = false;
  var detectedStKv = false;
  }
  if ( li == 2 || li == 7 || li == 12 || li == 17 || li == 22 || li == 27 || li == 32 || li == 37 ) // Перебор этажности
  {
   if (!/кв[^а]/.test(d) || !/кв[^а]/.test(d)) {
   //
  }
  else{
  var PredKo = d.match(/\кв[^а](.*?)\sэт/g).join(''); 
  var PredKv = c.match(/\кв[^а](.*?)\sэт/g).join('');
  var EtajKv = PredKv.match(/\d+/g).join('').replace(',',''); // Этажность квартир
  var EtajKo = PredKo.match(/\d+/g).join('').replace(',','');;} // Этажность комнат

  }

  if ( li == 3 || li == 8 || li == 13 || li == 18 || li == 23 || li == 28 || li == 33 || li == 38 ) // Перебор цены
  {

  var PriceKv = c.match(/\d+/g).join('').replace(',',''); // Цена комнат
  var PriceKo = d.match(/\d+/g).join('').replace(',',''); // Цена кватир

  }
  if ( li == 4 || li == 9 || li == 14 || li == 19 || li == 24 || li == 29 || li == 34 || li == 39 ) // Перебор Улицы
  {
  var YlKoz = '';
  var YlKvz = '';
  var YlKo = '';
  var YlKv = '';
  for (zaza = 18; zaza <=d.length-1; zaza++)
  {
   YlKoz+=d[zaza].replace('ул ',''); // Улицы комнат
  }
   var names = YlKoz.match(/^(.*?)\s/g);
   var numbers = YlKoz.match(/\d+/g);
   YlKo = names + numbers;
   for (zaza = 18; zaza <=c.length-1; zaza++)
  {
   YlKvz+=c[zaza].replace('ул ',''); // Улицы квартир
  } 
   var names = YlKvz.match(/^(.*?)\s/g);
   var numbers = YlKvz.match(/\d+/g);
   YlKv = names + numbers;
  }



if (EtajKv == et)
{
 detectedStKv = true;
}
if (EtajKo == et)
{
 detectedStKo = true;
}
if (YlKv == yl && YlKo != yl )
{
detectedStrKv = true;
}
if(YlKo == yl && YlKv != yl )
{
detectedStrKo = true;
}
if (PlaceKo == pl || pl == 9300)
{
detectedPltKo = true;
}
if (PlaceKv == pl || pl == 9300)
{
detectedPltKv = true;
}
     


  if (detectedPltKo == true && detectedStrKo == true && detectedStKo == true )
  {
 
   iimPlayCode('TAG POS='+par+' TYPE=A ATTR=TXT:Редактировать');
   iimPlayCode('TAG POS=1 TYPE=H1 ATTR=TXT:Редактирование<SP>об* EXTRACT=TXT');
   checked=iimGetExtract().match(/\d+/g).join('');
   iimPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:catalog-form ATTR=ID:owner_tel EXTRACT=TXT');
   prok=iimGetExtract().match(/\d+/g).join('');
   phoneSiteOne=prok.match(/\d{7}/g);
   if (li >= 1 && li <=5) // Подбираем нужную нам ссылку.
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+5+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 5 && li <=10)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+10+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 10 && li <=15)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+15+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 15 && li <=20)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+20+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 20 && li <=25)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+25+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 25 && li <=30)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+30+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 30 && li <=35)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+35+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 35 && li <=40)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+40+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 40 && li <=45)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+45+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 45 && li <=50)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+50+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
      iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 1\nADD !EXTRACT {{!VAR1}}\nSET !EXTRACTADD {{!COL1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE=test.csv'); 

   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 '+par+'<SP>'+timeOfPost+'<SP>Совпадение,<SP>объявление:<SP>'+checked+'<SP>сслыка<SP>эта:<SP>'+link+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE='+fulla+'.txt'); 
   iimPlayCode('TAB OPEN');
   iimPlayCode('TAB T=2');
   iimPlayCode('URL GOTO='+link);
   iimPlayCode('TAG POS=1 TYPE=DIV ATTR=ID:phone*&&CLASS:phone EXTRACT=TXT');
   phoneSiteTwo=iimGetExtract().match(/\d+/g).join('').replace(',','');
   iimPlayCode('TAB CLOSE');
   if (phoneSiteOne == phoneSiteTwo) // Если совпадает номер, то змещаемю В ином случае пропускаем, пишем информацию в лог.
   {
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Совпал<SP>номер\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE='+fulla+'.txt'); 
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Разместить<SP>объявление');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Применить');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:OK')
   iimPlayCode('TAB CLOSE')
   var proveOfcheck = true; 
   }
   else
   {
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Не<SP>совпал<SP>номер\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE='+fulla+'.txt'); 
   iimPlayCode('TAB CLOSE')
   var proveOfcheck = true; 
   }
   } 


    
    if (detectedPltKv == true && detectedStrKv == true && detectedStKv == true )
  { 
   iimPlayCode('TAG POS='+par+' TYPE=A ATTR=TXT:Редактировать');
   iimPlayCode('TAG POS=1 TYPE=H1 ATTR=TXT:Редактирование<SP>об* EXTRACT=TXT');
   checked=iimGetExtract().match(/\d+/g).join('');
   iimPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:catalog-form ATTR=ID:owner_tel EXTRACT=TXT');
   prok=iimGetExtract().match(/\d+/g).join('');
   phoneSiteOne=prok.match(/\d{7}/g);
   if (li >= 1 && li <=5) // Подбираем нужную нам ссылку.
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+5+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 5 && li <=10)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+10+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 10 && li <=15)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+15+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 15 && li <=20)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+20+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 20 && li <=25)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+25+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 25 && li <=30)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+30+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 30 && li <=35)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+35+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 35 && li <=40)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+40+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 40 && li <=45)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+45+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 45 && li <=50)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+50+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 '+par+'<SP>'+timeOfPost+'<SP>Совпадение,<SP>объявление:<SP>'+checked+'<SP>сслыка<SP>эта:<SP>'+link+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE='+fulla+'.txt'); 
   iimPlayCode('TAB OPEN');
   iimPlayCode('TAB T=2');
   iimPlayCode('URL GOTO='+link);
   iimPlayCode('TAG POS=1 TYPE=DIV ATTR=ID:phone*&&CLASS:phone EXTRACT=TXT');
   phoneSiteTwo=iimGetExtract().match(/\d+/g).join('').replace(',','');
   iimPlayCode('TAB CLOSE');
   if (phoneSiteOne == phoneSiteTwo) // Если совпадает номер, то змещаемю В ином случае пропускаем, пишем информацию в лог.
   {
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Совпал<SP>номер\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE='+fulla+'.txt'); 
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Разместить<SP>объявление');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Применить');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:OK');
   iimPlayCode('TAB CLOSE');
   var proveOfcheck = true; 
   }
   else
   {
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Не<SP>совпал<SP>номер\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR FILE='+fulla+'.txt'); 
   iimPlayCode('TAB CLOSE')
   var proveOfcheck = true; 
   } 
   } 
     if (proveOfcheck == true) break;
    }  // Lines
    } // Za
    } // Time
    
    
    
  



} // par ++  

































var times = new Date();
var hours = times.getHours();
var minutes = times.getMinutes();
var timez = hours+' '+minutes;
if (timez[4] == undefined)
var time = timez.replace(/\s+/g,'0');
else
var time = timez.replace(/\s+/g,'');
if (time >= satrTimeOfWorkBzeco && time <= endTimeOfWorkBzeco)
{
for (dell=1; dell<=parseBz; dell++) //Удаляем просмотренные.
{
 
 iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\IIM\\MSK\\ii'+dell+'.txt');

}

iimPlayCode('URL GOTO=http://bezco.ru/ads/moscow?m%5B1000%5D=&p=92&a=0&pl=&pr=');
for (z=1; z <=parseBz; z++) {
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:'+z);
a = 5;b = 7;c = 13;d = 15;e = 1;f = 4;
for (j=1; j<=10; j++)
{
iimPlayCode('TAG POS='+a+' TYPE=B ATTR=* EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE=ii'+z+'.txt'); 
iimPlayCode('TAG POS='+b+' TYPE=B ATTR=* EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE=ii'+z+'.txt'); 
iimPlayCode('TAG POS='+c+' TYPE=TD ATTR=* EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE=ii'+z+'.txt');
iimPlayCode('TAG POS='+d+' TYPE=TD ATTR=* EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE=ii'+z+'.txt'); 
iimPlayCode('TAG POS='+e+' TYPE=TD ATTR=COLSPAN:2&&CLASS:notes EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE=ii'+z+'.txt');
iimPlayCode('TAG POS='+f+' TYPE=DIV ATTR=ID:right EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE=ii'+z+'.txt');
iimPlayCode('TAG POS='+e+' TYPE=A ATTR=TXT:Смотреть<SP>подробнее EXTRACT=HREF\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE=ii'+z+'.txt');
a+=4;b+=4;c+=9;d+=9;e+=1;f+=1;
}
}
}

// Идем на smr

var times = new Date();
var hours = times.getHours();
var minutes = times.getMinutes();
var timez = hours+' '+minutes;
if (timez[4] == undefined)
var time = timez.replace(/\s+/g,'0');
else
var time = timez.replace(/\s+/g,'');
if (time >= satrTimeOfWorkSmr && time <= endTimeOfWorkSmr)
{
for (dell=1; dell<=smrK; dell++) //Удаляем просмотренные.
{
 
 iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\IIM\\SMR\\MSK\\smrKv'+dell+'.txt');
 iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\IIM\\SMR\\MSK\\smrKo'+dell+'.txt');


}

iimPlayCode('URL GOTO=https://moskva.smr77.ru/snyat_kvartiru/');
for (l=1;l<=smrK;l++)
{
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:'+l);
for (j=1; j<=10; j++)
{
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title  EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKv'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title  EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKv'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:price EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKv'+l+'.txt');
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:address EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKv'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title EXTRACT=HREF\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKv'+l+'.txt')

}
}


iimPlayCode('URL GOTO=https://moskva.smr77.ru/snyat_komnatu/');
for (l=1;l<=smrK;l++)
{
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:'+l);
for (j=1; j<=10; j++)
{
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title  EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKo'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title  EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKo'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:price EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKo'+l+'.txt');
iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:address EXTRACT=TXT\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKo'+l+'.txt'); 
iimPlayCode('TAG POS='+j+' TYPE=A ATTR=CLASS:title EXTRACT=HREF\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE=smrKo'+l+'.txt')
}
}
}

var logSPB = 'MSK'; // Логин от Москвы
var pasSPB = 'СЕКРЕТИКИ'; // Пароль от Москвы
iimPlayCode('URL GOTO=http://admin.bazavashdom.ru');
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:Выйти');
iimPlayCode('WAIT SECONDS=4');
iimPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/login/ ATTR=NAME:username CONTENT='+logSPB);
iimPlayCode('SET !ENCRYPTION NO\nTAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/login/ ATTR=NAME:password CONTENT='+pasSPB);
iimPlayCode('TAG POS=1 TYPE=BUTTON FORM=ACTION:/login/ ATTR=TXT:Вход');
iimPlayCode('WAIT SECONDS=25');

iimPlayCode('URL GOTO=http://admin.bazavashdom.ru/client/');
// Перебор строк из файла, поиск соответствий

 
trueOrfalse = false;
var tr = 0;
var nextPage = 2;
for (par = 1; par<=oblSite; par++)
{
 if (par == oblSite)
  {
    iimPlayCode('TAG POS=2 TYPE=A ATTR=TXT:'+nextPage)
    par = 1;
    nextPage++;
  }
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:date<SP>hide-fold EXTRACT=TXT');
today=iimGetExtract();
if(!/Сегодня/g.test(today)) break;
var proveOfcheck=false;
iimPlayCode('TAG POS='+par+' TYPE=A ATTR=TXT:Редактировать EXTRACT=HREF');
cul=iimGetExtract();
ciks = '';
for (mas = 43; mas<=cul.length-6; mas++)
{
 ciks+=cul[mas];
}
var etaj = par;
if (trueOrfalse == true)
{
  var etaj = par-tr;
}
kalu=par-1;
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:status EXTRACT=TXT');
prove=iimGetExtract();
if (iimPlayCode('TAG POS='+kalu+' TYPE=TD ATTR=CLASS:col<SP>col-square') == true)
{
iimPlayCode('TAG POS='+kalu+' TYPE=TD ATTR=CLASS:col<SP>col-square EXTRACT=TXT');
st=iimGetExtract().replace(/\s+/g,'');
if(!/Этажность/.test(st) )
{
 tr++;
 etaj=par-tr;
 trueOrfalse = true;
}
}
if (iimPlayCode('TAG POS='+par+' TYPE=TD ATTR=CLASS:col<SP>col-square') == true && prove == 'На модерации')
{
 iimPlayCode('TAG POS='+par+' TYPE=TD ATTR=CLASS:col<SP>col-square EXTRACT=TXT');
 st=iimGetExtract().replace(/\s+/g,'');
if(!/Этажность/.test(st) )
{
  continue;
}
}
iimPlayCode('TAG POS='+par+' TYPE=H2 ATTR=* EXTRACT=TXT');
nameOfPost=iimGetExtract().replace(/\s+/g,'<SP>');
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:date<SP>hide-fold EXTRACT=TXT');
timeOfPost=iimGetExtract().replace(/\s+/g,'<SP>');
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:status EXTRACT=TXT');
prove=iimGetExtract();
if (prove == 'Неактуально' || prove == 'Размещено' )
{
 continue;
}
if (trueOrfalse == true)
{
  var etaj = par-tr;
}
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:more EXTRACT=TXT');
opis=iimGetExtract().replace(/\s+/g,'');  // opisanie
iimPlayCode('TAG POS='+etaj+' TYPE=DIV ATTR=CLASS:floor EXTRACT=TXT');
frik=iimGetExtract();
brak = '';
for (ki = 11; ki <=frik.length-1; ki++)
{
  brak+=frik[ki];
}
et=brak.replace('/',''); // Этажи сайта 1
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:square EXTRACT=TXT');
plz=iimGetExtract();
if ( plz == 'Площадь: Нет/Нет/Нет' || plz == 'Площадь: Нет//Нет')
{ pl = 9300;}
else
{
pl=plz.match(/\d+/g).join('');
pl/=10; // Площадь сайта 1
}
iimPlayCode('TAG POS='+par+' TYPE=DIV ATTR=CLASS:address<SP>hide-fold EXTRACT=TXT');
a=iimGetExtract().replace('ул ',''); // Улицы сайта 1
var names = a.match(/^(.*?)\s/g);
var numbers = a.match(/\d+/g);
yl = names + numbers;
for (z=1; z<=parseBz;z++)
{
if (proveOfcheck == true) break;
var da = false;
var detectedPlt = false;
var detectedStr = false;
var detectedSt = false;

var times = new Date();
var hours = times.getHours();
var minutes = times.getMinutes();
var timez = hours+' '+minutes;
if (timez[4] == undefined)
var time = timez.replace(/\s+/g,'0');
else
var time = timez.replace(/\s+/g,'');
if (time >= satrTimeOfWorkBzeco && time <= endTimeOfWorkBzeco)
{
for (i=1; i <=countOfLines; i++)
{
var link = ''; // Этажи
var step = ''; // Этажи
var Place = ''; // Площадь
var About = ''; // Описание
var Streets = '';
var Streetz = '';
var Street = ''; // Улица
var v = '';
var one = '';
var two = '';
var sum = '';
iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
c=iimGetExtract();
if ( i == 1||i == 8 || i == 15 || i == 22 ||i == 29 || i == 36  || i == 43 || i == 50 || i == 57 || i == 64 ) // Улица
{
for (ci = 8; ci<=c.length-1; ci++)
{
Streetz+=c[ci].replace('ул ','');
}
var names = Streetz.match(/^(.*?)\s/g);
var numbers = Streetz.match(/\d+/g);
Streets = names + numbers;
 var da = false;
 var detectedPlt = false;
 var detectedStr = false;
 var detectedSt = false;
} 
if ( (i == 3) || (i == 10) || (i == 17) || (i == 24) || (i == 31) || (i == 38) || (i == 45) || (i == 52) || (i == 59) || (i == 66) ) // Этаж
{
  if ( c == ', -' || c == ',-' || c == ' / ' || c == 'null' || c == '')
  {
  step = 2423678;
  }
    else
  {
  step=c.replace(' / ','');
  }
}
if ( i == 4 ||i == 11 || i == 18 || i == 25 ||i == 32 || i == 39  || i == 46 || i == 53 || i == 60 || i == 67 ) // Площадь
{
for (cida = 0; cida<=c.length-4; cida++)
   Place+=c[cida];
}




    if (step == et)
{
 detectedSt = true;
}
      if (Street == yl)
{
detectedStr = true;
}
    if (Place == pl || pl == 9300)
{
detectedPlt = true;
}


  if (detectedPlt == true && detectedStr == true && detectedSt == true )
  {
 
   iimPlayCode('TAG POS='+par+' TYPE=A ATTR=TXT:Редактировать');
   iimPlayCode('TAG POS=1 TYPE=H1 ATTR=TXT:Редактирование<SP>об* EXTRACT=TXT');
   checked=iimGetExtract().match(/\d+/g).join('');
   if (i >= 1 && i <=7) // Подбираем нужную нам ссылку.
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+7+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 7 && i <=14)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+14+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 14 && i <=21)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+21+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 21 && i <=28)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+28+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 28 && i <=35)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+35+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 35 && i <=42)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+42+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 42 && i <=49)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+49+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 49 && i <=56)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+56+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 56 && i <=63)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+63+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (i >= 63 && i <=70)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+70+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   

   if (i >= 1 && i <=7) // Сверяем описание
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+5+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 7 && i <=14)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+12+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 14 && i <=21)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+19+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 21 && i <=28)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+26+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 28 && i <=35)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+33+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 35 && i <=42)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+40+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 42 && i <=49)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+47+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 49 && i <=56)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+54+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 56 && i <=63)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+61+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }
   else if (i >= 63 && i <=70)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\MSK\\ii'+z+'.txt\nSET !DATASOURCE_LINE '+68+'\nADD !EXTRACT {{!COL1}}');
   About=iimGetExtract().replace(/\s+/g,'');
   }

      
   iimPlayCode('TAG POS=1 TYPE=TEXTAREA FORM=ID:catalog-form ATTR=ID:id_body EXTRACT=TXT');
   getOpis=iimGetExtract().replace(/\s+/g,'');

      if (getOpis == About)
{
 da = true;

} 


 

   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 '+par+'.<SP>'+ciks+'<SP>'+timeOfPost+'<SP>Совпадение,<SP>объявление:<SP>'+checked+'<SP>сслыка:<SP>'+link+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE='+fulla+'.txt'); 
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Разместить<SP>объявление');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Применить');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:OK')
    if (da == true )
    {
        iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Описание<SP>совпало\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE='+fulla+'.txt'); 
       var proveOfcheck=true;
        iimPlayCode('TAB CLOSE'); 
    }
    
    
    else if (da == false)
    
    {
        iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Описание<SP>не<SP>совпало\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\MSK FILE='+fulla+'.txt'); 
      var proveOfcheck=true;
        iimPlayCode('TAB CLOSE');   
    }
    } 
    
    if (proveOfcheck == true) break;
 }

}

}



var times = new Date();
var hours = times.getHours();
var minutes = times.getMinutes();
var timez = hours+' '+minutes;
if (timez[4] == undefined)
var time = timez.replace(/\s+/g,'0');
else
var time = timez.replace(/\s+/g,'');
if (time >= satrTimeOfWorkSmr && time <= endTimeOfWorkSmr)
{
for (za = 1; za <= smrK; za++){
if (proveOfcheck == true) break;
  var detectedPltKo = false;
  var detectedStrKo = false;
  var detectedStKo = false;
  var detectedPltKv = false;
  var detectedStrKv = false;
  var detectedStKv = false;
 for (li=1; li<=smrLines; li++ )
  {
iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+li+'\nADD !EXTRACT {{!COL1}}');
d=iimGetExtract();
iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+li+'\nADD !EXTRACT {{!COL1}}');
c=iimGetExtract();
if ( li == 1 || li == 6 || li == 11 || li == 16 || li == 21 || li == 26 || li == 31 || li == 36 ) // Перебор площади
{
  if (!/кв[^а]/.test(d) || !/кв[^а]/.test(c)) {
  PlaceKv = 9300;
  PlaceKo = 9300;
  }
  else{
  if (/студию/.test(d) || /студию/.test(c)){
  if (/студию/.test(d)){
  var PredKo = d.match(/\sсту(.*?)кв[^а]/g).join('');
  var PlaceKo = PredKo.match(/\d+/g);// Площадь комнат
  }
  else if (/студию/.test(c)){
  var PredKv = c.match(/\sсту(.*?)кв[^а]/g).join('');
  var PlaceKv = PredKv.match(/\d+/g); // Площадь квартир
  }
  }
  else{
  var PredKo = d.match(/\sква(.*?)кв[^а]/g).join(''); 
  var PredKv = c.match(/\sква(.*?)кв[^а]/g).join('');
  var PlaceKo = PredKo.match(/\d+/g);// Площадь комнат
  var PlaceKv = PredKv.match(/\d+/g);}} // Площадь квартир
  var detectedPltKo = false;
  var detectedStrKo = false;
  var detectedStKo = false;
  var detectedPltKv = false;
  var detectedStrKv = false;
  var detectedStKv = false;
  }
  if ( li == 2 || li == 7 || li == 12 || li == 17 || li == 22 || li == 27 || li == 32 || li == 37 ) // Перебор этажности
  {
  if (!/кв[^а]/.test(d) || !/кв[^а]/.test(c)) {
  }
  else{
  var PredKo = d.match(/\кв[^а](.*?)\sэт/g).join(''); 
  var PredKv = c.match(/\кв[^а](.*?)\sэт/g).join('');
  var EtajKv = PredKv.match(/\d+/g).join('').replace(',',''); // Этажность квартир
  var EtajKo = PredKo.match(/\d+/g).join('').replace(',','');;} // Этажность комнат

  }

  if ( li == 3 || li == 8 || li == 13 || li == 18 || li == 23 || li == 28 || li == 33 || li == 38 ) // Перебор цены
  {

  var PriceKv = c.match(/\d+/g).join('').replace(',',''); // Цена комнат
  var PriceKo = d.match(/\d+/g).join('').replace(',',''); // Цена кватир

  }
  if ( li == 4 || li == 9 || li == 14 || li == 19 || li == 24 || li == 29 || li == 34 || li == 39 ) // Перебор Улицы
  {
  var YlKoz = '';
  var YlKvz = '';
  var YlKo = '';
  var YlKv = '';
  for (zaza = 9; zaza <=d.length-1; zaza++)
  {
   YlKoz+=d[zaza].replace('ул ',''); // Улицы комнат
  }
   var names = YlKoz.match(/^(.*?)\s/g);
   var numbers = YlKoz.match(/\d+/g);
   YlKo = names + numbers;
   for (zaza = 9; zaza <=c.length-1; zaza++)
  {
   YlKvz+=c[zaza].replace('ул ',''); // Улицы квартир
  } 
   var names = YlKvz.match(/^(.*?)\s/g);
   var numbers = YlKvz.match(/\d+/g);
   YlKv = names + numbers;
  }




if (EtajKv == et)
{
 detectedStKv = true;
}
if (EtajKo == et)
{
 detectedStKo = true;
}
if (YlKv == yl && YlKo != yl )
{
detectedStrKv = true;
}
if(YlKo == yl && YlKv != yl )
{
detectedStrKo = true;
}
if (PlaceKo == pl || pl == 9300)
{
detectedPltKo = true;
}
if (PlaceKv == pl || pl == 9300)
{
detectedPltKv = true;
}
     


  if (detectedPltKo == true && detectedStrKo == true && detectedStKo == true )
  {
 
   iimPlayCode('TAG POS='+par+' TYPE=A ATTR=TXT:Редактировать');
   iimPlayCode('TAG POS=1 TYPE=H1 ATTR=TXT:Редактирование<SP>об* EXTRACT=TXT');
   checked=iimGetExtract().match(/\d+/g).join('');
   iimPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:catalog-form ATTR=ID:owner_tel EXTRACT=TXT');
   prok=iimGetExtract().match(/\d+/g).join('');
   phoneSiteOne=prok.match(/\d{7}/g);
   if (li >= 1 && li <=5) // Подбираем нужную нам ссылку.
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+5+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 5 && li <=10)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+10+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 10 && li <=15)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+15+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 15 && li <=20)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+20+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 20 && li <=25)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+25+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 25 && li <=30)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+30+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 30 && li <=35)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+35+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 35 && li <=40)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+40+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 40 && li <=45)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+45+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 45 && li <=50)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKo'+za+'.txt\nSET !DATASOURCE_LINE '+50+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 '+par+'<SP>'+timeOfPost+'<SP>Совпадение,<SP>объявление:<SP>'+checked+'<SP>сслыка<SP>эта:<SP>'+link+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE='+fulla+'.txt'); 
   iimPlayCode('TAB OPEN');
   iimPlayCode('TAB T=2');
   iimPlayCode('URL GOTO='+link);
   iimPlayCode('TAG POS=1 TYPE=DIV ATTR=ID:phone*&&CLASS:phone EXTRACT=TXT');
   phoneSiteTwo=iimGetExtract().match(/\d+/g).join('').replace(',','');
   iimPlayCode('TAB CLOSE');
   if (phoneSiteOne == phoneSiteTwo) // Если совпадает номер, то змещаемю В ином случае пропускаем, пишем информацию в лог.
   {
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Совпал<SP>номер\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE='+fulla+'.txt'); 
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Разместить<SP>объявление');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Применить');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:OK')
   iimPlayCode('TAB CLOSE')
   var proveOfcheck = true; 
   }
   else
   {
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Не<SP>совпал<SP>номер\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE='+fulla+'.txt'); 
   iimPlayCode('TAB CLOSE')
   var proveOfcheck = true; 
   }
   } 


    
    if (detectedPltKv == true && detectedStrKv == true && detectedStKv == true )
  { 
   iimPlayCode('TAG POS='+par+' TYPE=A ATTR=TXT:Редактировать');
   iimPlayCode('TAG POS=1 TYPE=H1 ATTR=TXT:Редактирование<SP>об* EXTRACT=TXT');
   checked=iimGetExtract().match(/\d+/g).join('');
   iimPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ID:catalog-form ATTR=ID:owner_tel EXTRACT=TXT');
   prok=iimGetExtract().match(/\d+/g).join('');
   phoneSiteOne=prok.match(/\d{7}/g);
   if (li >= 1 && li <=5) // Подбираем нужную нам ссылку.
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+5+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 5 && li <=10)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+10+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 10 && li <=15)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+15+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 15 && li <=20)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+20+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 20 && li <=25)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+25+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 25 && li <=30)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+30+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 30 && li <=35)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+35+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 35 && li <=40)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+40+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 40 && li <=45)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+45+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   else if (li >= 45 && li <=50)
   {
   iimPlayCode('SET !DATASOURCE C:\\IIM\\SMR\\MSK\\smrKv'+za+'.txt\nSET !DATASOURCE_LINE '+50+'\nADD !EXTRACT {{!COL1}}');
   link=iimGetExtract();
   }
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 '+par+'<SP>'+timeOfPost+'<SP>Совпадение,<SP>объявление:<SP>'+checked+'<SP>сслыка<SP>эта:<SP>'+link+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\ FILE='+fulla+'.txt'); 
   iimPlayCode('TAB OPEN');
   iimPlayCode('TAB T=2');
   iimPlayCode('URL GOTO='+link);
   iimPlayCode('TAG POS=1 TYPE=DIV ATTR=ID:phone*&&CLASS:phone EXTRACT=TXT');
   phoneSiteTwo=iimGetExtract().match(/\d+/g).join('').replace(',','');
   iimPlayCode('TAB CLOSE');
   if (phoneSiteOne == phoneSiteTwo) // Если совпадает номер, то змещаемю В ином случае пропускаем, пишем информацию в лог.
   {
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Совпал<SP>номер\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE='+fulla+'.txt'); 
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Разместить<SP>объявление');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:Применить');
   iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=TXT:OK')
   iimPlayCode('TAB CLOSE')
   var proveOfcheck = true; 
   }
   else
   {
   iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Не<SP>совпал<SP>номер\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\IIM\\SMR\\MSK FILE='+fulla+'.txt'); 
   iimPlayCode('TAB CLOSE')
   var proveOfcheck = true; 
   } 
   } 
     if (proveOfcheck == true) break;
    } 
    
  }
}

} // par ++ 


} 















 




 

 













