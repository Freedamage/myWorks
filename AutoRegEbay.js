var Count = 2; // Кол-во аккаунтов для регистрации.



for (i = 1; i <=Count; i++)
{

if (i == 1)
{
 numI = 1;
 numP = 1;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 2)
{
 numI = 3;
 numP = 5;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 3)
{
 numI = 5;
 numP = 9;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 4)
{
 numI = 7;
 numP = 13;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 5)
{
 numI = 9;
 numP = 17;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 6)
{
 numI = 11;
 numP = 21;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 7)
{
 numI = 13;
 numP = 25;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 8)
{
 numI = 15;
 numP = 29;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 9)
{
 numI = 17;
 numP = 33;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 10)
{
 numI = 19;
 numP = 37;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');
}
if (i == 11)
{
 numI = 1;
 numP = 1;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 12)
{
 numI = 3;
 numP = 5;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 13)
{
 numI = 5;
 numP = 9;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 14)
{
 numI = 7;
 numP = 13;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 15)
{
 numI = 9;
 numP = 17;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 16)
{
 numI = 11;
 numP = 21;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 17)
{
 numI = 13;
 numP = 25;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 18)
{
 numI = 15;
 numP = 29;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 19)
{
 numI = 17;
 numP = 33;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
if (i == 20)
{
 numI = 19;
 numP = 37;
 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list/2');
}
else 
{
	 numI = 1;
     numP = 1;
	 iimPlay('CODE:URL GOTO=http://www.freeproxy-list.ru/proxy-list');

}
	


iimPlay('CODE:WAIT SECONDS=4');
iimPlay('CODE:TAG POS='+numP+' TYPE=DIV ATTR=CLASS:col-md-1<SP>td EXTRACT=TXT');
por=iimGetExtract().match(/\)\d+/).join('');
port='';
for (i=1; i<=por.length-1; i++)
{port+=por[i];}
iimPlay('CODE:TAG POS='+numI+' TYPE=DIV ATTR=CLASS:col-md-2<SP>td EXTRACT=TXT');
newIp=iimGetExtract();

var ip = newIp;
var socksver = '5'
var portall = port;


iimPlay('CODE:URL GOTO=about:config\n WAIT SECONDS=1')

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


iimPlay('CODE:URL GOTO=https://reg.ebay.com/reg/PartialReg?ru=http%3A%2F%2Fwww.ebay.com%2F');


iimPlay('CODE:SET !DATASOURCE C:\\AutoRegEbay\\email.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
a=iimGetExtract();
iimPlay('CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ID:ppaRegForm ATTR=ID:email CONTENT='+a);
iimPlay('CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ID:ppaRegForm ATTR=ID:remail CONTENT='+a);
iimPlay('CODE:SET !DATASOURCE C:\\AutoRegEbay\\password.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
b=iimGetExtract();
iimPlay('CODE:SET !ENCRYPTION NO\nTAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:ppaRegForm ATTR=ID:PASSWORD CONTENT='+b);
iimPlay('CODE:SET !DATASOURCE C:\\AutoRegEbay\\Names.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
c=iimGetExtract();
iimPlay('CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ID:ppaRegForm ATTR=ID:firstname CONTENT='+c);
iimPlay('CODE:SET !DATASOURCE C:\\AutoRegEbay\\LastNames.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
d=iimGetExtract();
iimPlay('CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ID:ppaRegForm ATTR=ID:lastname CONTENT='+d);
iimPlay('CODE:TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:ppaRegForm ATTR=ID:sbtBtn');
iimPlay('CODE:TAG POS=1 TYPE=A ATTR=ID:LetsGoShoppingLink');
iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nEVENT TYPE=CLICK SELECTOR="#gh-uo>A" BUTTON=0');
   iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Аккаунт:'+i+'.<SP>Почта:<SP>'+a+'<SP>Пароль:<SP>'+b+'<SP>Имя:<SP>'+c+'<SP>Фамилия:<SP>'+d+'<SP>IP:'+newIp+'<SP>Порт:<SP>'+port+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\AutoRegEbay FILE=log.txt'); 
}