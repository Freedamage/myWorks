/*** Текст ***/
var textz = '💥ПОСТ ОТ ИМЕНИ ГРУППЫ - ВИДЯТ ВСЕ !!!💥 <BR> ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ <BR>Размещение постов в самое популярное время.<BR> Вам будет приходить отчёт о размещении. <BR> Вы можете в любое время проверить свой пост. <BR> Ваш пост увидят все участники группы. <BR> ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ <BR>👉👉👉@id45969940 (Узнать подробнее) 👈👈👈'; // Текст

/***Фотографии***/
var nameOfAlbum = 'Альбом'; // Название альбома фотографий.
var numbA = '284346576_238727959'; // Номер из ссылки на альбом.
var countOfPh = 1; // сколько катинок размещать из альбома

/***Видео***/
var nameOfAlbV = 'Видео'; // Название альбома видео.
var numOfAlv = '284346576'; // Номер из ссылки на видеоальбом.
var countOfVid = 2; // Кол-во видео.

/***Группы***/
var CountOfGr = 55; // Кол-во групп.
var choose = 'КАРТИНКИ'; // Видео или картинки. ВИДЕО/КАРТИНКИ. Можно выбрать.

/********************************************************************************************************************************************************************************/

for(w = 1; w<= CountOfGr; w++){
		var prove = false;
				iimPlayCode ('set !datasource groop.txt\nset !datasource_line '+w+'\nset var1 {{!col1}}\nURL GOTO={{var1}}')
						textza = textz;
						window.document.getElementById('post_field').innerHTML=textza;
						nameOfAlbums = nameOfAlbum.replace(/\s+/g,'<SP>');
						if (choose == 'КАРТИНКИ'){

						for (j=1; j<=countOfPh; j++){
					iimPlayCode('TAG POS=1 TYPE=A ATTR=CLASS:ms_item<SP>ms_item_phot*');
									iimPlayCode('TAG POS=1 TYPE=DIV ATTR=TXT:'+nameOfAlbums);
									iimPlayCode('TAG POS='+j+' TYPE=A ATTR=ID:photos_choose_row*'+numbA);
				}}
						var nameOfAlbVid = nameOfAlbV.replace(/\s+/g,'<SP>');




									if (choose == 'ВИДЕО'){
			for (vid = 1; vid<=countOfVid; vid++){
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
