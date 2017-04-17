
/*  Настройки  */

var sec      = 10; // Получение ответа от рукапчи. В секундах. 
var path     = 'C:\\SCRIPT\\'; // Директория, где лежат все файлы.
var changeIA = 4; // Каждые сколько запросов менять IP.
var pagi     = 3; // Пагинация на сайте. Google, для поиска сайта.
var allMain  = 318; // Всего поисковых запросов. В файле key.txt
var myKey    = 'b262606ff4b449asd21310cf973'; // API-key. Rucaptcha.
var nextIp   = 4; // Каждые сколько запросов менять IP.
var proxyUrl = 'http://api.best-proxies.ru/proxylist.txt?key=asda1asd3df45ad1f9d3&type=https,socks4,socks5&country=ru&limit=0'; // Прокси.





/*  Дабы все работало, дальше ничего не меняем : )  */




var dataSite = '6LfwuyUTAAAAAOAmoS0fdqijC2PbbdH4kjq62Y1b'; // Не менять. Ключ сайта.
var domen 	 = 'ipv4.google.com'; // Не менять. Домен с капчей.
var k        = '6LfwuyUTAAAAAOAmoS0fdqijC2PbbdH4kjq62Y1b'; // Не менять. anchor?k= от reсaptcha V2.
var n 		 = '\n'; // Не менять. Новая строчка.
var chk 	 = false; // Не менять. Проверка на полученный ответ от капчи.
var linos    = 1;
var respon;
var ok;

	
function logIs(text){
	
	text = text.replace(/\s+/g, '<SP>');
	
	var dat = new Date();
   
	var start_date = dat.getFullYear()+'_'+dat.getDate()+'_'+dat.getMonth();
	
	var log = dat.getHours() + ':' + dat.getMinutes() + ':' + dat.getSeconds() + ' - ' + text + '.';
	
	//iimPlayCode('FILEDELETE NAME=' + path + 'LOG\\'+start_date+'.txt')
	
	iimSet('LOG', log.replace(/\s+/g, '<SP>'));
	var loga;
		loga  = 'CODE:' + n;
		loga += 'ADD !EXTRACT {{LOG}}' + n;
		loga += 'SAVEAS TYPE=EXTRACT FOLDER=' + path + 'LOG' + ' FILE=' + start_date + '.txt';
		iimPlay(loga, 60);
}

function Split(sec){
try{
	  	var second;
			
					second  = 'CODE:WAIT SECONDS=' + sec + n;
					second += 'REFRESH' + n; 
					second += 'WAIT SECONDS=3';
			
				iimPlay(second, 60);           
	
		respon = window.document.getElementsByTagName('body')[0].innerHTML;
		respon = respon.split('|');
		
      if (respon[1] == undefined) 
			return false;
		else
			return true;
		
			}
	catch(e){
	iimDisplay('Bad connection');	
	logIs('Плохое соединение');
	reSetProxy('');
	getProxy(proxyUrl);
  }
		
  }		

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

function reSetProxy(what){
	
	  var getSet;   
		   getSet  = 'CODE:URL GOTO=about:config' + n;
		   getSet += 'WAIT SECONDS=1';
		   iimPlay(getSet, 60);
		   
		   window.document.getElementById('warningButton').click();

		var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		prefs.setIntPref("network.proxy.type", 1);
		prefs.setBoolPref("network.proxy.share_proxy_settings", false);
		//prefs.setCharPref("network.proxy.http", what);
		//prefs.setIntPref("network.proxy.http_port", what);
		//prefs.setCharPref("network.proxy.ssl", what);
		//prefs.setIntPref("network.proxy.ssl_port", what);
		//prefs.setCharPref("network.proxy.ftp", what)
		//prefs.setIntPref("network.proxy.ftp_port", what);
		prefs.setCharPref("network.proxy.socks", what);
		prefs.setIntPref("network.proxy.socks_port", what);
		//prefs.setIntPref("network.proxy.socks_version", socksver);

		logIs('Сбросил IP');
}	
  
function getProxy(proxyUrl){
	try{
		var gotosite;		
			gotosite = 'CODE:URL GOTO=' + proxyUrl;
			iimPlay(gotosite, 60);
		
		var body = window.document.getElementsByTagName('body')[0].innerHTML;
		
		//iimPlay('CODE:URL GOTO=api.best-proxies.ru/proxylist.txt?key=7MOPnH9AYvVhMWVyovAcLZpn&type=socks4&country=kz,ru,ua&limit=0');
		
		if (/Для доступа к этой функции необходимо авторизоваться!/.test(body)){
			var nama = proxyUrl.split('c=');
			window.document.getElementsByName('c')[0].focus();
			window.document.getElementsByName('c')[0].value=nama[1];
			window.document.getElementsByName('c')[0].focus();
			window.document.getElementsByTagName('input')[1].click();
			iimPlay('CODE:WAIT SECONDS=1');
		}
		
		var allproxy  = window.document.getElementsByTagName('pre')[0].innerHTML;
			allproxy  = allproxy.split(/\s/);
			
		var random 	  = randomInteger(0, allproxy.length - 1);
		
		var proxyport = allproxy[random];
			proxyport = proxyport.replace(/\s+/g, '');
			proxyport = proxyport.split(':');
			
	    var ip        = proxyport[0];
		var portall   = proxyport[1];
		var socksver  = '4';

        var getSet;   
		   getSet  = 'CODE:URL GOTO=about:config' + n;
		   getSet += 'WAIT SECONDS=1';
		   iimPlay(getSet, 60);
		   
		   window.document.getElementById('warningButton').click();

		var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		prefs.setIntPref("network.proxy.type", 1);
		prefs.setBoolPref("network.proxy.share_proxy_settings", false);
		//prefs.setCharPref("network.proxy.http", ip);
		//prefs.setIntPref("network.proxy.http_port", portall);
		//prefs.setCharPref("network.proxy.ssl", ip);
		//prefs.setIntPref("network.proxy.ssl_port", portall);
		//prefs.setCharPref("network.proxy.ftp",ip)
		//prefs.setIntPref("network.proxy.ftp_port",portall);
		prefs.setCharPref("network.proxy.socks", ip);
		prefs.setIntPref("network.proxy.socks_port", portall);
		prefs.setIntPref("network.proxy.socks_version", socksver);	

       logIs('Поменял IP на ' + ip + ':' + portall);  

	}
	catch(e){
	iimDisplay('Bad connection');	
	logIs('Плохое соединение');
	reSetProxy('');
	getProxy(proxyUrl);
  }	   
}

function googleCaptcha(myKey){
	 try{
	  var first;
	  
	  		var iimA  = 'CODE:' + n;
				iimA += 'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:index ATTR=NAME:submit' + n;
				iimA += 'WAIT SECONDS =1';					
				iimPlay(iimA, 60);
		  
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
		
			var third;
			
					third  = 'CODE:WAIT SECONDS=1' + n;
					third += 'TAB CLOSE' + n; 
					third += 'WAIT SECONDS=1';
			
				iimPlay(third, 60); 	
				
				iimPlayCode('TAG POS=1 TYPE=TEXTAREA ATTR=ID:g-recaptcha-response CONTENT='+respon[1]);


		var iimA  = 'CODE:' + n;
			iimA += 'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:index ATTR=NAME:submit';
				
				iimPlay(iimA, 60);
				
				logIs('Успешно решил гугл-капчу');
				
				chk = false;
				
					}
	catch(e){
	iimDisplay('Bad connection');	
	logIs('Плохое соединение');
	reSetProxy('');
	getProxy(proxyUrl);
  }
}

function yandexCaptcha(myKey){
	
	var save;	
		save  = 'CODE:ONDOWNLOAD FOLDER='+path+' FILE=captcha.png WAIT=YES' + n;
		save += 'TAG POS=1 TYPE=IMG ATTR=CLASS:image<SP>form__captcha CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT';
		iimPlay(save, 60);
	
	
	var onload;
		onload  = 'CODE:TAB OPEN' + n;
		onload += 'TAB T=2' + n;
        onload += 'URL GOTO=http://imacros2.rucaptcha.com/new/' + n;
        onload += 'TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:getcapcha.php ATTR=NAME:key CONTENT='+ myKey + n;
        onload += 'TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:getcapcha.php ATTR=NAME:file CONTENT='+ path +'captcha.png' + n;
        onload += 'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:getcapcha.php ATTR=*' + n;
        onload += 'TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT';
        iimPlay(onload, 60);
		
	var captcha = iimGetExtract();
	
	var send;
		send  = 'CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/checkcaptcha ATTR=ID:rep CONTENT=' + captcha + n;
		send += 'TAG POS=1 TYPE=BUTTON FORM=ACTION:/checkcaptcha ATTR=TXT:Отправить';
		iimPlay(send, 60)	

			logIs('Решил яндекс-капчу');
 }
 
function yandexSearch(line){ 
	try{
	var searchText = getSeter(linos, 1);
	var domianText = getSeter(linos, 2);
	var cityText   = getSeter(linos, 3);

	var goYa;
		goYa = 'CODE:URL GOTO=yandex.ru/search/ads?text=' + searchText.replace(/\s+/g, '<SP>');
		iimPlay(goYa, 60);
		
		var badcon = 'SET !TIMEOUT_STEP 0' + n + 'TAG POS=1 TYPE=H1 ATTR=TXT:Unable<SP>to<SP>connect';	
	
		if (badcon == true){
		logIs('Плохое соединение');
		reSetProxy('');
		getProxy(proxyUrl);
		iimPlay(goYa, 60);
		}
		
		logIs('Ввел в яндекс-поисковик запрос ' + searchText.replace(/\s+/g, '<SP>'));
				
		scroll(1);
		
		emuMouse(1);
		
		scroll(1);
		
		var ra = randomInteger(3, 9);

		logIs('Жду ' + ra + ' секунд');
		
		iimPlay('CODE:WAIT SECONDS='+ra);		
		
	var badcon = 'SET !TIMEOUT_STEP 0' + n + 'TAG POS=1 TYPE=H1 ATTR=TXT:Unable<SP>to<SP>connect';	
	
	if (badcon == true){
	logIs('Плохое соединение');
	reSetProxy('');
	getProxy(proxyUrl);
	}
		
	var allL  = window.document.getElementsByClassName('serp-item serp-adv-item').length;
	var myReg = new RegExp(domianText);
	
		for (var a = 0; a <= allL - 1; a++){
			
			var current = window.document.getElementsByClassName('serp-item serp-adv-item')[a].innerHTML;
			
			if (myReg.test(current)){
				
				logIs('Нашел сайт в поисковике, с доменом ' + domianText);
				
				window.document.getElementsByClassName('serp-item serp-adv-item')[a].getElementsByTagName('a')[0].click();
				
				logIs('Перешел по сайту.');
				
				doingRandom();
			}
			
		}
			}
	catch(e){
	iimDisplay('Bad connection');	
	logIs('Плохое соединение');
	reSetProxy('');
	getProxy(proxyUrl);
  }
		
}

function getSeter(linos, col){
		var extract;
		extract  = 'CODE:SET !DATASOURCE ' + path + 'key.txt' + n;
		extract += 'SET !DATASOURCE_DELIMITER ,' + n;
		extract += 'SET !DATASOURCE_COLUMNS 3' + n;
		extract += 'SET !DATASOURCE_LINE '+ linos + n;
		extract += 'ADD !EXTRACT {{!COL' + col + '}}';
		iimPlay(extract, 60)

		return iimGetExtract();			
}

function googleSearch(line){ 
try{
		var searchText = getSeter(linos, 1);
		var domianText = getSeter(linos, 2);
		var cityText   = getSeter(linos, 3);
			searchText = searchText.replace(/\s+/g, '<SP>');
			
			var gogo;		
				gogo  =	'CODE:SET !ERRORIGNORE YES' + n;
				gogo +=	'SET !TIMEOUT_PAGE 240' + n;
				gogo +=	'URL GOTO=google.ru/search?q='+ searchText;
			
			iimPlay(gogo, 60);
		
		var badcon = 'SET !TIMEOUT_STEP 0' + n + 'TAG POS=1 TYPE=H1 ATTR=TXT:Unable<SP>to<SP>connect';	
			
		if (badcon == true){
		logIs('Плохое соединение');
		reSetProxy('');
		getProxy(proxyUrl);
		iimPlay(gogo, 60);
		}
	
		logIs('Ввел запрос в гугл-поисковике, по слову ' + searchText);
		
		
		scroll(1);
		
		emuMouse(1);
		
		scroll(1);
		
		var ra = randomInteger(3, 9);

		logIs('Жду ' + ra + ' секунд');
		
		iimPlay('CODE:WAIT SECONDS='+ra);
	
	var badcon = 'SET !TIMEOUT_STEP 0' + n + 'TAG POS=1 TYPE=H1 ATTR=TXT:Unable<SP>to<SP>connect';
	
	if (badcon == true){
		logIs('Плохое соединение');
		reSetProxy('');
		getProxy(proxyUrl);
	}
	
	var currentHref = window.location.href;
		if (/ipv4.google.com/.test(currentHref)){
			logIs('Попалась гугл-капча');
			googleCaptcha(myKey);
		}
		
		for (var z = 1; z <= pagi; z++){
			
		var all 	 = window.document.getElementsByClassName('rc');		
		var allLinks = all.length	
		var myReg = new RegExp(domianText);
		
		for (var s = 0; s <= allLinks - 1; s ++){
			
			var allTxt = all[s].innerHTML;
			
			if (myReg.test(allTxt)){
				
				logIs('Начал сайт, с доменом ' + domianText);
				
				all[s].getElementsByTagName('a')[0].click();
				
				logIs('Перешел по сайту');
				
				doingRandom();
			}
		}
		
	var badcon = 'SET !TIMEOUT_STEP 0' + n + 'TAG POS=1 TYPE=H1 ATTR=TXT:Unable<SP>to<SP>connect';
		
	if (badcon == true){
	logIs('Плохое соединение');
	reSetProxy('');
	getProxy(proxyUrl);
	}
		
		logIs('Перешел на следующую страницу в поисковике');
		iimPlayCode('SET !TIMEOUT_STEP 0' + n + 'TAG POS=1 TYPE=SPAN ATTR=TXT:Следующая');
   }
   	}
	catch(e){
	iimDisplay('Bad connection');	
	logIs('Плохое соединение');
	reSetProxy('');
	getProxy(proxyUrl);
  }
}

function random_text(){	

	for(var x, j = [], i = 0; i < 20; i++) {		
	x = [[48,57], [65,90], [97,122], [1040,1103]][Math.random() * 4 >> 0];
	j[i] = String.fromCharCode((Math.random() * (x[1] - x[0] + 1) >> 0) + x[0]);
	}
	
	logIs('Сгенирировал случайные символы ' + j.join(''));
	
	return j.join('');	
}

function scroll(t){
	
	for (var v = 1; v <= 2; v++){
		if (v === 1){
			window.scroll(randomInteger(120, 230), randomInteger(1974, 4564));
			iimPlayCode('WAIT SECONDS=2');
		}
		else 
			window.scroll(randomInteger(100, 200), 200 * randomInteger(1, 8));
		
			logIs('Прокрутил страницу по X:' + randomInteger(100, 200) + ' по Y:' + 200 * randomInteger(1, 8));
		
	}
	
}

function doingRandom(text){ 

	var emylation;
		emylation  = 'CODE:SET !TIMEOUT_STEP 0' + n;
		emylation += 'SET !ERRORIGNORE YES' + n;
	    emylation += 'EVENTS TYPE=KEYPRESS SELECTOR="INPUT:nth-of-type(1)" CHARS="'+random_text()+'"' + n;
		emylation += 'EVENTS TYPE=KEYPRESS SELECTOR="INPUT:nth-of-type(2)" CHARS="'+random_text()+'"' + n;
		emylation += 'EVENTS TYPE=KEYPRESS SELECTOR="INPUT:nth-of-type(3)" CHARS="'+random_text()+'"';	
		iimPlay(emylation, 60);	
	
	logIs('Ввёл сгенерированные символы в случайные текстовые поля на сайте');

	
    scroll(1);
	
	emuMouse(10);
	
	scroll(1);
	
	randomHref(1);
	
	scroll(1);
	
		iimPlay('CODE:TAB CLOSE');
		
		logIs('Закрыл страницу');

}

function randomHref(times){ 
	try{
	for (var c = 1; c <= times; c++){
		var all = window.document.getElementsByTagName('a').length;
		var num = randomInteger(0, all - 1);
		
		logIs('Перешел по случайной ссылке с сайта: ' + window.document.getElementsByTagName('a')[num].getAttribute('href'));
		
		window.document.getElementsByTagName('a')[num].click();
				
		iimPlayCode('WAIT SECONDS=' + randomInteger(4, 34));
		
		logIs('Жду ' + randomInteger(4, 34) + ' секунд');
	}	
		}
	catch(e){
	iimDisplay('Bad connection');	
	logIs('Плохое соединение');
	reSetProxy('');
	getProxy(proxyUrl);
  }
}

function emuMouse(times){
	
  var count = 0;
		do{
		count++;
		var iim;
				iim  = 'CODE:SET !ERRORIGNORE YES' + n;
				iim += 'SET !TIMEOUT_STEP 0' + n;
				iim += 'TAG POS='+count+' TYPE=A ATTR=* CONTENT=EVENT:MOUSEOVER' + n;
				iim += 'WAIT SECONDS = 1' + n;
				iim += 'EVENT TYPE=MOUSEMOVE POINT="('+randomInteger(0, 1680)+','+randomInteger(0,1680)+')"' + n;
				iim += 'WAIT SECONDS = 1';
				iimPlay(iim, 60);
				
						logIs('Елозию мышкой на сайте, по координатам X:' + randomInteger(0, 1680) + ' Y:' + randomInteger(0, 1680));
		}
		while(count < times);
		
}


	/* -_- */

	logIs('Начал работу');

for (var main = 1; main <= allMain + 1; main++){
			
	iimPlayCode('TAB CLOSEALLOTHERS');
			
	if (main == allMain + 1){
	main = 1;
	linos = 1;
	}			
	if (nextIp === changeIA){
		reSetProxy('');	
		getProxy(proxyUrl);
		nextIp = 0;	
	}	
	googleSearch(main);
	yandexSearch(main);	
	nextIp++;
	linos++;
  }


