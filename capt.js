var KeyApi = ''; // Сюда свой API ключ от рукапчи. https://rucaptcha.com/


function captcha () {
iimPlayCode('FILEDELETE NAME=C:\\capcha.png');
iimPlayCode('TAG POS=1 TYPE=DIV ATTR=ID:vk_bottom');
iimPlayCode('ONDOWNLOAD FOLDER=C:\\ FILE=capcha.png WAIT=YES\nTAG POS=1 TYPE=IMG ATTR=SRC:https://m.vk.com/captcha.php* CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT');
iimPlayCode('TAB OPEN\nTAB T=2');
iimPlayCode('URL GOTO=http://imacros2.rucaptcha.com/new/');
iimPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:getcapcha.php ATTR=NAME:key CONTENT='+KeyApi);
iimPlayCode('TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:getcapcha.php ATTR=NAME:file CONTENT=C:\\capcha.png');
iimPlayCode('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:getcapcha.php ATTR=*');
iimPlayCode('TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT');
cap=iimGetExtract();
iimPlayCode('TAB CLOSE');
iimPlayCode('TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:* ATTR=NAME:captcha_key CONTENT='+cap);
iimPlayCode('TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:* ATTR=*');
}
if (iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=H4 ATTR=CLASS:sub_header') == true){
captcha();}