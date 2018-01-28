var itms = ['Glock-18 | Ironwork (Well-Worn)']; // Название предмета/предметов. На англ. и с указанием качества. 
var w8   = 150; // Миллисекунды на запрос. Рекомендуемое значение: 150.

var bought_ = false, body_ = '', price_ = 0.00, w88 = w8;

function _xhr(){
	bought_ = false; price_ = 0.00; str_ = ''; body_ = '';
	window.setTimeout(function(){
		var xhr = new window.XMLHttpRequest();
			xhr.open('GET', 'https://cs.money/load_bots_inventory?hash=' + window.Date.now(), false);
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					obj = JSON.parse(xhr.responseText); body = ''; w88 = w8;
					for(var ob = 0; ob < obj.length; ob++){
						for(var it = 0; it < itms.length; it++){
							if(obj[ob].m + quality(obj[ob].e) == itms[it]){
								str_ = '{"assetid":"' + obj[ob].id[0] + '","local_price":"' + obj[ob].p.toFixed(2) + '","price":' + obj[ob].p + ',"float":"' + obj[ob].f[0] + '","stickers_count":0,"market_hash_name":"' + obj[ob].m + quality(obj[ob].e) + '","bot":"' + obj[ob].b[0] + '"}';
								body_ += bought_ === true ? ',' + str_ : str_;
								bought_ = true; price_ += obj[ob].p;
							}
					}}if(bought_){
						try{	
							var buy_ = new window.XMLHttpRequest();
								buy_.open('POST', 'https://cs.money/send_offer', false);
								buy_.setRequestHeader('Content-Type', 'application/json');
								buy_.onreadystatechange = function(){
									if(buy_.readyState == 4 && (buy_.status == 200 || buy_.status == 500)){
										w88 = 3000; _xhr();
									}
								}
								buy_.send('{"peopleItems":[],"botItems":[' + body_ + '],"onWallet":-' + price_ +'}');
						}catch(e){_xhr();}
					}else _xhr();	
				}	
			}
			xhr.send();
	}, w88);
}

_xhr();

function quality(e){
	let q;
		switch(e){
			case 'WW' : q = ' (Well-Worn)';
				break;
			case 'MW' : q = ' (Minimal Wear)';
				break;	
			case 'BS' : q = ' (Battle-Scarred)';
				break;	
			case 'FT' : q = ' (Field-Tested)';
				break;	
			case 'FN' : q = ' (Factory New)';
				break;	
			default: q = '';	
		}
	return q;
}
