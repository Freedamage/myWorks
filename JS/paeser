
var spliter = ';'; // Разделитель, при записиси.
var count = 1; // Стартовая страница.
var end = 20; // Конечная страница.


var dataSite = '6LfBixYUAAAAABhdHynFUIMA_sa4s-XsJvnjtgB0';
var domen = 'voterrecords.com';
var myKey = ''; // API-key.
var k = '6LfBixYUAAAAABhdHynFUIMA_sa4s-XsJvnjtgB0';

var n = '\n';
var respon;
var chk = false;
var z = 1;

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

  function getSite (sec){
	  
	  var first;
		  
			first  = 'CODE:SET !ERRORIGNORE YES' + n;
			first += 'TAB CLOSEALLOTHERS' + n;
			first += 'URL GOTO=voterrecords.com' + n;
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

		var id = window.document.getElementById('id').getAttribute('value');


		var link = 'URL GOTO=voterrecords.com/cdn-cgi/l/chk_captcha?id='+id+'&g-recaptcha-response='+respon[1];
		iimPlayCode(link);
  }
  
  function currentPage(count){
	     iimPlayCode('FILEDELETE NAME=C:\\currenPage.txt');
	     iimPlayCode('SET !VAR1 '+count+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\ FILE=currenPage.txt'); 
		 
  }
  
  function Replace (what, to){
	  
	    var To = new RegExp(to, 'g')

	  	what = what.replace('<', '');
		what = what.replace('>', '');
		what = what.replace(/\"/g, ''); 
	    what = what.replace(To, '');
		what = what.replace(/\\/g, ''); 
		what = what.replace(/\//g, ''); 
	  	what = what.replace(/\&nbsp\;/g, ' ');
	  	what = what.replace('span', '');


		
	return what;	
  }
  
	var counter = window.setInterval(function(){
		
                var linka = 'https://voterrecords.com/voters/' + count;

				    currentPage(count);
				    
	                var resp;
					var myRequset = new window.XMLHttpRequest();
					myRequset.open('GET', linka, false);
					myRequset.onreadystatechange = function () {
						if (myRequset.readyState == 4){
							if (myRequset.status == 200){
								
								
								resp = myRequset.responseText;
							  
								if (resp == undefined){
									 getSite(10);
								}
								
								else {	
								
                                var allCubs = resp.split('schema.org');
								for (var b = 1; b <= 10; b++){
                                         var nameis = allCubs[b].match(/name.+\</).join('');
										 
                                              nameis = Replace(nameis, 'name');    
										  
										  var gender = allCubs[b].match(/gender.+<\//).join('');
										  
											  gender = Replace(gender, 'gender');

										 var address = allCubs[b].match(/address.+</).join('');
											  
											address = Replace(address, 'address');
											
										 var aff = allCubs[b].match(/affiliation.+</).join('');
												
											aff = Replace(aff, 'affiliation');

										 var reg = allCubs[b].match(/affiliation.+\s+.+\s+.+\s+.+/).join('');
											 
											 reg  = reg.replace(/affiliation.+\s+.+\s+.+\s+\<span\>/g, ''); 
											 reg = Replace(reg, 'address');	
											 
										 var dat = allCubs[b].match(/affiliation.+\s+.+\s+.+\s+.+\s+.+\s+.+\s+.+/).join('');

										 	 dat = dat.replace(/affiliation.+\s+.+\s+.+\s+.+\s+.+\s+.+\s+.span\>/g, ''); 
											 dat = dat.replace(/\<\/span\>/g, '');				 
											 
										  if (/Inactive/.test(allCubs[b])){
											  var activity = 'Inactive';
										  }
										  else {
											  activity = 'Active';
										  }
										  
										  var alllink = nameis + spliter + gender + spliter + address + aff + spliter + reg + spliter + dat + spliter + activity;
										
									iimPlayCode('SET !VAR1 '+alllink.replace(/\s+/g, '<SP>')+'\nADD !EXTRACT {{!VAR1}}\nSAVEAS TYPE=EXTRACT FOLDER=C:\\ FILE=getParse.csv'); 
										
								  }
									
								}
							}
							else
								getSite(10);
						}
						else
							getSite(10);
					};
					myRequset.send(null);
					z *= 2;
			
				 count = count >= end ? window.clearInterval(counter): ++count;

			
		}, 100 + z);
		
