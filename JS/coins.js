
/*  Настройки  */

var domain  = 'comps.in.ua'; // Домен сайта.
var querys  = ['s5520hc днепр', 'x5650 днепр']; // Запросы в поисковике.

/*  Дабы всё работало, дальше ничего не меняем : ) */

var _random  = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1)), n = '\n';

var _symbols = () => { for(var x, j = [], i = 0; i < 20; i++) { x = [[48, 57], [65, 90], [97, 122], [1040, 1103]][Math.random() * 4 >> 0]; j[i] = String.fromCharCode((Math.random() * (x[1] - x[0] + 1) >> 0) + x[0]);}return j.join('');}

var _wait = (s) => iimPlayCode('WAIT SECONDS=' + s);

function emulation(times, tE){
		
for (var t = 1; t <= tE; t++){		
	 var emlation;
		 emlation  = 'CODE:SET !TIMEOUT_STEP 0' + n;
		 emlation += 'SET !ERRORIGNORE YES' + n;
		 emlation += 'EVENTS TYPE=KEYPRESS SELECTOR="INPUT:nth-of-type(' + t + ')" CHARS="' + _symbols() + '"';	
		 iimPlay(emlation, 60);
}		
		
		_wait(13);
		
		window.scroll(0, _random(145, 495));

		for (var c = 1; c <= times; c++){
			 
			 var all = window.document.getElementsByTagName('a').length;
			 var num = _random(0, all - 1);
					
			 window.document.getElementsByTagName('a')[num].click();
					
			 iimPlayCode('WAIT SECONDS=' + _random(4, 34));
	
	}		
}

for (var q = 0; q <= querys.length - 1; q++){
	
var _notStop = true, _page = 1;

var _siteS;
	_siteS  = 'CODE:TAB CLOSEALLOTHERS' + n;
	_siteS += 'URL GOTO=google.com/search?q=' + querys[q].replace(/\s+/g, '<SP>') + n;
	_siteS += 'WAIT SECONDS=' + _random(5, 12);

	iimPlay(_siteS, 60);
	
   for (var r = 1; r <= _random(2, 5); r++) window.scroll(0, _random(100, 256));
	
   do{
	   	var _sites = window.document.getElementsByClassName('rc');
		var _sites_length = _sites.length;
		for (var s = 0; s <= _sites_length - 1; s++){
			var regEx = new RegExp(domain);
			if (regEx.test(_sites[s].innerHTML)){
			_sites[s].getElementsByTagName('a')[0].click();
			_notStop = false;
			emulation(4, 14);
			break;
			}
			if (s === (_sites_length - 1)) iimPlayCode('TAG POS=1 TYPE=A ATTR=TXT:' + ++_page + n + 'WAIT SECONDS=' + _random(4, 7));
		}
   }while(_notStop);
}
