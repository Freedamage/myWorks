/*** Текст ***/
var textz = '11'; // Текст

/***Фотографии***/
var nameOfAlbum = 'Альбом'; // Название альбома фотографий.
var numbA = '284346576_238727959'; // Номер из ссылки на альбом.
var countOfPh = '1-4'; // Сколько и какие по счету  катинки размещать из альбома Пример, с первой по четвертую: 1-4

/***Видео***/
var nameOfAlbV = 'Видео'; // Название альбома видео.
var numOfAlv = '284346576'; // Номер из ссылки на видеоальбом.
var countOfVid = '1-4'; // Солько и какие по счету видеозаписиПример, с первой по четвертую: 1-4

/***Группы***/
var UrlOfGr = 'https://vk.com/club136876204'; // Кол-во групп. Ссылка на группу, где будет размезение.
var choose = 'КАРТИНКИ'; // Видео или картинки. ВИДЕО/КАРТИНКИ. Можно выбрать.

/***Настойки размещения***/
var countOfdays = 30; // На сколько дней размещать.
var countOfPostt = 2; // Кол-во постов в день;

var TheFirstPost = '14:52'; // Время размещения первого поста. Если в 1 час 12 минут, то 1:12. Если в 13 часов 12 минут, то 13:12
var TheSecondPost = '1:52'; // Время размещения второго поста. Если в 1 час 12 минут, то 1:12. Если в 13 часов 12 минут, то 13:12



/********************************************************************************************************************************************************************************/
			var nexta = false;
		var thrDay = false;
			var startDay = 1;
               		 var d = new Date();
                		var n = d.getDay(); 
				     var thatDay = n+1;                                        
				   iimPlayCode('URL GOTO='+UrlOfGr);
                         for (currDay = thatDay; currDay <= countOfdays+thatDay; currDay++){                           
                           	if (currDay == 30){ 
                           	 thrDay = true;
                           	var nexta = true;
                           	}
                           	  if (thrDay == false){
                           var curraDay = currDay+1;
                            }
                             else if (thrDay == true){
                             var curraDay = startDay;
                             startDay++;
                             } 
                            for (thrOrSc = 1; thrOrSc < 3; thrOrSc++){    
                         var prove = false;                        
                              	    iimPlayCode('TAG POS=1 TYPE=A ATTR=TXT:Таймер');		                            	      
                               iimPlayCode('SET !TIMEOUT_STEP 0\nSET !ERRORIGNORE YES\nSET !ERRORCONTINUE YES\nEVENT TYPE=CLICK SELECTOR="#media_preview>DIV:nth-of-type(7)>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV" BUTTON=0');
                                      if (nexta == true){
                                         window.document.getElementsByClassName('arr right')[0].click();
                                         nexta = false;
                                         }        
                                          iimPlayCode("TAG POS=1 TYPE=TD ATTR=ID:day"+curraDay+"*");                  	       
          	                     if (thrOrSc == 1){
          	                                  var timeee = TheFirstPost.split(':');     		
          	                              }
          	                               else {
          	                                  var timeee = TheSecondPost.split(':');
          	                               }
          	                               	     iimPlayCode('SET !TIMEOUT_STEP 0\nSET !ERRORIGNORE YES\nSET !ERRORCONTINUE YES\nEVENT TYPE=CLICK SELECTOR="#media_preview>DIV:nth-of-type(7)>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(3)>DIV>DIV>DIV>TABLE>TBODY>TR>TD" BUTTON=0');
							iimPlayCode('SET !TIMEOUT_STEP 0\nSET !ERRORIGNORE YES\nSET !ERRORCONTINUE YES\nEVENT TYPE=CLICK SELECTOR="#media_preview>DIV:nth-of-type(7)>DIV:nth-of-type(2)>DIV>DIV:nth-of-type(3)>DIV>DIV:nth-of-type(3)>DIV>TABLE>TBODY>TR>TD" BUTTON=0'); 
							        var first = parseInt(timeee[0]);
							        var second = parseInt(timeee[1]);
				window.document.getElementsByClassName('result_list result_list_scrollable')[0].getElementsByTagName('li')[first].click(); // Часы
				window.document.getElementsByClassName('result_list result_list_scrollable')[1].getElementsByTagName('li')[second].click(); // Минуты 
					textza = textz;
						window.document.getElementById('post_field').innerHTML=textza;
						nameOfAlbums = nameOfAlbum.replace(/\s+/g,'<SP>');
						if (choose == 'КАРТИНКИ'){
						
							var splinPic = countOfPh.split('-');
							
								var FstNumOfPic = parseInt(splinPic[0]);
								var SecNumOfPic = parseInt(splinPic[1]);
											
						for (j=FstNumOfPic; j<=SecNumOfPic; j++){
					iimPlayCode('TAG POS=1 TYPE=A ATTR=CLASS:ms_item<SP>ms_item_phot*');
									iimPlayCode('TAG POS=1 TYPE=DIV ATTR=TXT:'+nameOfAlbums);
									iimPlayCode('TAG POS='+j+' TYPE=A ATTR=ID:photos_choose_row*'+numbA);
				}}
						var nameOfAlbVid = nameOfAlbV.replace(/\s+/g,'<SP>');

									if (choose == 'ВИДЕО'){
							var splinVid = countOfPh.split('-');
							
								var FstNumOfVid = parseInt(splinVid[0]);
								var SecNumOfVid = parseInt(splinVid[1]);
			for (vid = FstNumOfVid ; vid<=SecNumOfVid; vid++){
				if (prove == true) continue;
				iimPlayCode('TAG POS=1 TYPE=A ATTR=CLASS:ms_item<SP>ms_item_vide*');
				if ( iimPlayCode('WAIT SECONDS=1\nSET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=A ATTR=CLASS:toggle') != true && vid > 1)
				{
							for (zak = vid; zak <= countOfVid; zak++)
								iimPlayCode('TAG POS='+zak+' TYPE=DIV ATTR=CLASS:video_item_thumb<SP>_video_item_thumb<SP>crisp_image');
									iimPlayCode('SET !TIMEOUT_STEP 0\nTAG POS=1 TYPE=DIV ATTR=CALSS:box_x_button');
									var prove = true;

			}else{
			iimPlayCode('WAIT SECONDS=1\nTAG POS=1 TYPE=A ATTR=HREF:/videos'+numOfAlv+'?section=albums');
					iimPlayCode('TAG POS=1 TYPE=A ATTR=TEXT:'+nameOfAlbVid);
					iimPlayCode('TAG POS='+vid+' TYPE=DIV ATTR=CLASS:video_item_thumb<SP>_video_item_thumb<SP>crisp_image');

}
		}}
		iimPlayCode('SET !ERRORIGNORE YES\nSET !TIMEOUT_STEP 0\nEVENT TYPE=CLICK SELECTOR="#official>IMG" BUTTON=0');
		iimPlayCode('TAG POS=1 TYPE=BUTTON ATTR=ID:send_post');
		iimPlayCode ('wait seconds=15\n')
}
   }
