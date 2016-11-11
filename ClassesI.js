var countOfpeople = 100; // Здесь указывается скольким людям будет поставлен лайк за 1 цикл.
var pauseS = 0; // Пауза в секундах между класами.
for (i = 1; i <=countOfpeople; i+=20)
{
iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=TXT:Показать<SP>ещё');
iimPlayCode('TAG POS='+i+' TYPE=DIV ATTR=CLASS:ellip');
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=CLASS:ellip');

}
for (j = 1; j <=countOfpeople; j++)
{
iimPlayCode('WAIT SECONDS='+pauseS);	
iimPlayCode('EVENT TYPE=CLICK SELECTOR="#gs_result_list>DIV:nth-of-type('+j+')>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>A" BUTTON=0');
iimPlayCode('TAG POS=1 TYPE=IMG ATTR=ID:viewImageLinkId&&ALT:*&&SRC:*');
iimPlayCode('WAIT SECONDS=2');
iimPlayCode('EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(8)>DIV>DIV>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(2)>DIV>DIV>UL>LI:nth-of-type(3)>DIV>DIV>BUTTON" BUTTON=0');
iimPlayCode('WAIT SECONDS=1');
iimPlayCode('BACK');
iimPlayCode('WAIT SECONDS=1');
}