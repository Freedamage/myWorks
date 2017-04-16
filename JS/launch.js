
var sec      = 10; // Получение ответа от рукапчи.
var path     = 'C:\\SCRIPT\\'; // Директория, где лежат все файлы.
var changeIA = 4; // Каждые сколько запросов менять IP.
var pagi     = 3; // Пагинация на сайте.
var allMain  = 30; // Всего поисковых запросов.
var myKey    = 'b262606ff123122131аssad0cf973'; // API-key.
var dataSite = '6LfwuyUTAAAAAOAmoS0fdqijC2PbbdH4kjq62Y1b';
var domen 	 = 'ipv4.google.com';
var k        = '6LfwuyUTAAAAAOAmoS0fdqijC2PbbdH4kjq62Y1b';
var n 		 = '\n';
var chk 	 = false;
var proxyUrl = 'hidemy.name/api/proxylist.txt?country=RU&out=plain&lang=ru&c=106408290611580';
var n 		 = '\n';
var nextIp   = 0;
var respon;

function Split(sec){
	  
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

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

function getProxy(proxyUrl){
	
		var gotosite;		
			gotosite = 'CODE:URL GOTO=' + proxyUrl;
			iimPlay(gotosite, 60);
		
		var body = window.document.getElementsByTagName('body')[0].innerHTML;
		
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
		var socksver  = '5';

        var getSet;   
		   getSet  = 'CODE:URL GOTO=about:config' + n;
		   getSet += 'WAIT SECONDS=1';
		   iimPlay(getSet, 60);
		   
		   window.document.getElementById('warningButton').click();

		var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
		prefs.setIntPref("network.proxy.type", 1);
		prefs.setBoolPref("network.proxy.share_proxy_settings", false);
		prefs.setCharPref("network.proxy.http", ip);
		prefs.setIntPref("network.proxy.http_port", portall);
		prefs.setCharPref("network.proxy.ssl", ip);
		prefs.setIntPref("network.proxy.ssl_port", portall);
		prefs.setCharPref("network.proxy.ftp",ip)
		prefs.setIntPref("network.proxy.ftp_port",portall);
		prefs.setCharPref("network.proxy.socks", ip);
		prefs.setIntPref("network.proxy.socks_port", portall);
		prefs.setIntPref("network.proxy.socks_version", socksver);		
}

function googleCaptcha(myKey){
	 
	  var first;
		  
			first  = 'CODE:SET !ERRORIGNORE YES' + n;
            first += 'TAB OPEN' + n; 
		    first += 'TAB T=2';
          
		iimPlay(first, 60);  

		var linkA = 'URL GOTO=rucaptcha.com/in.php?key='+myKey+'&method=userrecaptcha&googlekey='+k+'&pageurl='+domen;
		
		iimPlayCode(linkA);

		iimPlayCode('WAIT SECONDS=3');

		var ok = window.document.getElementsByTagName('body')[0].innerHTML;
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
 }
 
function yandexSearch(line){ 
	
	var extract;
		extract  = 'CODE:SET !DATASOURSE ' + path + 'key.txt' + n;
		extract += 'SET !DATASOURCE_DELIMITER ,' + n;
		extract += 'SET !DATASOURCE_COLUMNS 3' + n;
		extract += 'SET !DATASOURCE_LINE '+ line + n;
		extract += 'ADD !EXTRACT {{!COL1}}' + n;
		extract += 'ADD !EXTRACT {{!COL2}}' + n;
		extract += 'ADD !EXTRACT {{!COL3}}' + n;
		iimPlay(extract, 60);
		
		var searchText = iimGetLastExtract(1);
		var domianText = iimGetLastExtract(2);
		var cityText   = iimGetLastExtract(3);

	var goYa;
		goYa = 'CODE:URL GOTO=yandex.ru/search/ads?text=' + searchText.replace(/\s+/g, '<SP>');
		iimPlay(goYa, 60);
		
	var allL  = window.document.getElementsByClassName('serp-item serp-adv-item').length;
	var myReg = new RegExp(domianText);
	
		for (var a = 0; a <= allL - 1; a++){
			
			var current = window.document.getElementsByClassName('serp-item serp-adv-item')[a].innerHTML;
			
			if (myReg.test(current)){
				window.document.getElementsByClassName('serp-item serp-adv-item')[a].getElementsByTagName('a')[0].click();
				doingRandom();
			}
			
		}
		
}

function googleSearch(column){ // дописать
	
}

function random_text(){	

	for(var x, j = [], i = 0; i < 20; i++) {		
	x = [[48,57], [65,90], [97,122], [1040,1103]][Math.random() * 4 >> 0];
	j[i] = String.fromCharCode((Math.random() * (x[1] - x[0] + 1) >> 0) + x[0]);
	}
	
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
	
    scroll(1);
	
	emuMouse(10);
	
	scroll(1);
	
	randomHref(1);
	
	scroll(1);
	
		iimPlay('CODE:TAB CLOSE');
}

function randomHref(times){ 
	
	for (var c = 1; c <= times; c++){
		var all = window.document.getElementsByTagName('a').length;
		var num = randomInteger(0, all - 1);
		
		window.document.getElementsByTagName('a')[num].click();
		
		iimPlayCode('WAIT SECONDS=' + randomInteger(4, 34));
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
		}
		while(count < times);
		
}

		/* -_- */


for (var main = 1; main <= allMain; main++){
	
	if (nextIp === changeIA){	
		getProxy(proxyUrl);
		nextIp = 0;	
	} 
	
	yandexSearch(main);
	nextIp++;
	
}