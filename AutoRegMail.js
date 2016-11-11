var Count = 4; // Кол-во аккаунтов для регистрации.
var jdems = 25; // Время, которое будет давать на решение каптчи.

for (i = 1; i <=Count; i++)
{
iimPlay('CODE:URL GOTO=http://www.mail.kz/ru/signup');
iimPlay('CODE:SET !DATASOURCE C:\\AutoRegMail\\Names.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
names=iimGetExtract();
iimPlay('CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://www.mail.kz/ru/signup ATTR=ID:input-first_name CONTENT='+names);
iimPlay('CODE:SET !DATASOURCE C:\\AutoRegMail\\LastNames.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
LastNames=iimGetExtract();
iimPlay('CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://www.mail.kz/ru/signup ATTR=ID:input-last_name CONTENT='+LastNames);
iimPlay('CODE:SET !DATASOURCE C:\\AutoRegMail\\Dates.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
Dates=iimGetExtract();
iimPlay('CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://www.mail.kz/ru/signup ATTR=ID:input-birthday CONTENT='+Dates);
iimPlay('CODE:TAG POS=1 TYPE=INPUT:RADIO FORM=ACTION:http://www.mail.kz/ru/signup ATTR=ID:input-gender-m');
iimPlay('CODE:SET !DATASOURCE C:\\AutoRegMail\\eMail.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
email=iimGetExtract();
iimPlay('CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:http://www.mail.kz/ru/signup ATTR=ID:input-email CONTENT='+email);
iimPlay('CODE:SET !DATASOURCE C:\\AutoRegMail\\Password.txt\nSET !DATASOURCE_LINE '+i+'\nADD !EXTRACT {{!COL1}}');
passwords=iimGetExtract();
iimPlay('CODE:SET !ENCRYPTION NO\nTAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:http://www.mail.kz/ru/signup ATTR=ID:input-password CONTENT='+passwords);
iimPlay('CODE:TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ACTION:http://www.mail.kz/ru/signup ATTR=ID:input-agree CONTENT=YES');
alert('Введите каптчу! :)');
iimPlay('CODE:WAIT SECONDS='+jdems);

iimPlay('CODE:TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:http://www.mail.kz/ru/signup ATTR=*');
iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 20\nTAG POS=1 TYPE=A ATTR=HREF:http://mail.kz/ru/logout\nWAIT SECONDS=3');
iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR1 Аккаунт:'+i+'<SP>Почта:<SP>'+email+'<SP>Пароль:<SP>'+passwords+'<SP>Имя:<SP>'+names+'<SP>Фамилия:<SP>'+LastNames+'<SP>Дата<SP>рождения:<SP>'+Dates+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\AutoRegMail FILE=log.txt'); 
 

if (i == count)
{
	iimPlay('CODE:SET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\AutoRegMail\\Names.txt');
	iimPlay('CODE:SET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\AutoRegMail\\LastNames.txt');
	iimPlay('CODE:SET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\AutoRegMail\\Password.txt');
	iimPlay('CODE:SET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\AutoRegMail\\Dates.txt');
	iimPlay('CODE:SET !TIMEOUT_STEP 0\nFILEDELETE NAME=C:\\AutoRegMail\\eMail.txt');
	
	iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR2 \nADD !EXTRACT {{!VAR2}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\AutoRegMail FILE=Names.txt'); 
    iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR2 \nADD !EXTRACT {{!VAR2}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\AutoRegMail FILE=LastNames.txt'); 
	iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR2 \nADD !EXTRACT {{!VAR2}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\AutoRegMail FILE=Password.txt'); 
	iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR2 \nADD !EXTRACT {{!VAR2}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\AutoRegMail FILE=Dates.txt'); 
	iimPlay('CODE:SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nSET !VAR2 \nADD !EXTRACT {{!VAR2}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\AutoRegMail FILE=eMail.txt'); 

}

}