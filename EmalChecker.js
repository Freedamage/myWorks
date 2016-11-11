var Count = 4; // Кол-во запросов.


for (lines = 1; lines<=Count; lines++)
{
iimPlayCode('TAB CLOSEALLOTHERS');
iimPlayCode('URL GOTO=https://www.yandex.ru/');
iimPlayCode('SET !DATASOURCE C:\\ParseMail\\text.txt\n SET !DATASOURCE_LINE '+lines+'\nADD !EXTRACT {{!COL1}}');
textz=iimGetExtract().replace(/\s+/g,'<SP>');
iimPlayCode('SET !ERRORIGNORE YES\nTAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:https://yandex.ru/search/ ATTR=ID:text CONTENT='+textz);
iimPlayCode('SET !ERRORIGNORE YES\nTAG POS=1 TYPE=BUTTON FORM=ACTION:https://yandex.ru/search/ ATTR=TXT:*');
if (iimPlayCode("SET !TIMEOUT_STEP 2\nTAG POS=1 TYPE=A ATTR=ONMOUSEDOWN:w(this,<SP>'155.136');&&HREF://yandex.ru/search/ads?text=*&&TARGET:_blank&&CLASS:lin*") != true) continue;
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=CLASS:serp-adv__found EXTRACT=TXT');
amounts=iimGetExtract();
if (amounts == null || amounts == '' || amounts == '#EANF#') continue; 
amount=amounts.match(/\d+/g).join('');
var plusOne = 0;
var numbe = 2;
for (j = 1; j<=10; j++)
{
 iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:organic__subtitle<SP>typo<SP>typo_type_greenurl EXTRACT=TXT');
 site=iimGetExtract();
 iimPlayCode('TAG POS='+j+' TYPE=DIV ATTR=CLASS:organic__subtitle<SP>typo<SP>typo_type_greenurl EXTRACT=HTM');
po=iimGetExtract();
 if (po == null || po == '' || po == '#EANF#')
          {
            iimPlayCode('REFRESH');
            continue;
          }
c=po.match(/hre(.*)">/).join('').replace('href="','');
d= '';
for (k = 0; k<=c.length-(c.length/2 + 15); k++)
{
  d+=c[k].replace('"','');
}
   iimPlayCode('URL GOTO='+d);

   var d = window.document.getElementsByTagName('body');
  
  var siteText = '';

  for (var i = 0; i < d.length; i++) {

    siteText+=d[i].innerHTML;

}

  if (/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(siteText))
  {
    
    emal=siteText.match(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/g);
    iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR2 '+emal+':'+site+'\nADD !EXTRACT {{!VAR2}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\ParseMail\\ FILE=log.txt'); 
        iimPlayCode('BACK');
        plusOne++;


  }
  else
    iimPlayCode('BACK');
       plusOne++;

  if (j == 10)
  {
    iimPlayCode('TAG POS=1 TYPE=A ATTR=TXT:'+numbe);
    numbe++;
    j = 1;
  }

  if (plusOne == amount-1)
    break;
      }

}