import java.io.*;
import java.net.*;
import java.util.*;
import java.util.Map.Entry;
import java.util.regex.*;
import javax.net.ssl.HttpsURLConnection;

public class myThread extends Thread {
	
   public String UR, login, pass, _cookie, _token, _proxy, _port, lnk, _tarball, _test, f_name, l_name;
   public String[] adr, text, subject, Ip, lnk_;
   public int bot, _good = 0, _bad = 0, _sm;
   boolean _next = true, _prover;
   
   Random rand = new Random();

   public myThread(String _UR, String _em, int _bot, String _pass, String[] _adr, String[] _txt, String[] _subj, String _lnk, String _ip, String kolvo, boolean _prov, String args1, String args2, String args3) {
	  Ip      = _ip.split(":");
      UR      = _UR;
      login   = _em;
      bot     = ++_bot;
      pass    = _pass;
      adr     = _adr;
      text    = _txt;
      subject = _subj;
      lnk_     = _lnk.split("\n");
      _proxy  = Ip[0];
      _port   = Ip[1];
	  _sm     = (Integer.parseInt(kolvo) - 1);
	  _prover = _prov;
	  _test   = args1;
	  f_name  = args2;
	  l_name  = args3;
   }

   public String generate(int length, boolean nums) {
	  String _symbols = nums ? "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuuiopasdfghjklzxcvbnnm1234567890" : "qwertyuuiopasdfghjklzxcvbnnm";
      String _result  = "";
      for(int s = 1; s <= length; ++s) 
         _result += nums ? _symbols.charAt(rand.nextInt(63)) : _symbols.charAt(rand.nextInt(27));

      return _result;
   }

    public String russian_symb(int length) {
	  String _symbols = "йцукенгшщфывапролджячсмитьбранплрлтфыв";
      String _result  = "";
      for(int s = 1; s <= length; ++s) 
         _result += _symbols.charAt(rand.nextInt(38));

      return _result;
   }  
   
   public void GETS(String UR, int step, String _proxy, String _port) {   
	 System.setProperty("https.proxySet", "true");
     System.setProperty("https.proxyHost", _proxy);
     System.setProperty("https.proxyPort", _port);
     System.setProperty("java.protocol.handler.pkgs", "javax.net.ssl");
	
	  
	   try {
         URL url = new URL(UR);
         HttpsURLConnection conn = (HttpsURLConnection)url.openConnection();
         conn.setRequestMethod("GET");
         conn.setRequestProperty("Host", "e.mail.ru");
         conn.setRequestProperty("Referer", "http://mail.ru/");
         conn.setRequestProperty("Cookie", _cookie);
         conn.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
         conn.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
         conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0");
         conn.setRequestProperty("Connection", "keep-alive");
         conn.setDoOutput(true);
		 
		 
         if(step == 4) { 
            StringBuilder _content = new StringBuilder(); String c;
            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
 
            for(int f = 0; (c = in.readLine()) != null; ++f) {
				 _content.append(c);
				   if(f == 1350) 
						break;
            }

            Pattern p = Pattern.compile("updateToken.{1}\".*\""), _p = Pattern.compile("e.{1}mail.{1}ru-.*'");
			Matcher m = p.matcher(_content), _m = _p.matcher(_content);
			
		  while(m.find() && _m.find()){ _token = m.group().replace("updateToken(\"", "").split("\"")[0]; _tarball = _m.group().split("'")[0];}
         }
      } catch (Throwable e) {
         System.out.println("Some problem to cut the token.");
      }

   }

   public void GET(String UR, int step, String _proxy, String _port, String login) {
	System.setProperty("http.proxySet", "true");
	System.setProperty("http.proxyHost", _proxy);
	System.setProperty("http.proxyPort", _port);
	
	
	try {	 
         URL url = new URL(UR);
         HttpURLConnection conn = (HttpURLConnection)url.openConnection();
         conn.setRequestMethod("GET");
         conn.setRequestProperty("Host", "auth.mail.ru");
         conn.setRequestProperty("Upgrade-Insecure-Requests", "1");
         conn.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
         conn.setRequestProperty("Accept-Language", "ru,en;q=0.8");
         conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0");
         conn.setRequestProperty("Connection", "keep-alive");
         conn.setDoOutput(true);
         
		 String _head = conn.getHeaderField(1) + "; " + conn.getHeaderField(2) + "; " + conn.getHeaderField(3) + "; " + conn.getHeaderField(4) + "; " + conn.getHeaderField(5) + "; " + conn.getHeaderField(6) + "; " + conn.getHeaderField(7) + "; " + conn.getHeaderField(8) + "; " + conn.getHeaderField(9) + conn.getHeaderField(10) + "; " + conn.getHeaderField(11);
		
		 _cookie = "Mpop=" + _head.split("Mpop=")[1].split(";")[0] + "; " + "t=" + _head.split("t=")[1].split(";")[0];
		 
      } catch (Throwable e) {
         System.out.println("Can't catch cookie at account " + login + ".");
		 _next = false;
      }
	  
   }

   public void POST(String UR, String cookie, String msg, String subj, String email, String to, String token, String _proxy, String _port) throws InterruptedException {
	System.setProperty("https.proxySet", "true");
	System.setProperty("https.proxyHost", _proxy);
	System.setProperty("https.proxyPort", _port);
	System.setProperty("java.protocol.handler.pkgs", "javax.net.ssl");
	
	try{  
	    URL url = new URL(UR);
        Map<String, Object> params = new LinkedHashMap<>();
        params.put("ajax_call", "1");
        params.put("x-email", email);
        params.put("tarball", _tarball);
        params.put("tab-time", "1506331776");
        params.put("email", email);
        params.put("htmlencoded", "false");
        params.put("id", generate(32, true));
        params.put("source", "{\"draft\":\"\",\"reply\":\"\",\"forward\":\"\",\"schedule\":\"\"}");
        params.put("template", "");
        params.put("sign", "0");
        params.put("remind", "");
        params.put("receipt", "false");
        params.put("subject", "");
        params.put("priority", "");
        params.put("capcha", "");
        params.put("correspondents", "{\"to\":\"" + to + "\",\"cc\":\"\",\"bcc\":\"\"}");
        params.put("edited_contacts", "[]");
        params.put("attaches", "{\"list\":[]}");
        params.put("body", "{\"html\":\"<a href='https://google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=10&cad=rja&uact=8&ved=0ahUKEwi9qaOfucDWAhVDEJoKHTjECK4QFghWMAk&url=http%3A%2F%2Fzestrest.ru%2F2017%2F06%2F%25D0%25B0%25D0%25B1%25D1%2585%25D0%25B0%25D0%25B7%25D0%25B8%25D1%258F-%25D0%25BE%25D1%2582-11500-%25D1%2580%25D1%2583%25D0%25B1%25D0%25BB%25D0%25B5%25D0%25B9%2F&usg=AFQjCNGrYTN-WmryPaKuDVQQWthskFPgBQ'><img src='" + lnk + "'/></a><br><br><br>--<br>" + f_name + " " + l_name + "\"}");
        params.put("api", "1");
        params.put("token", token);
		
        StringBuilder postData = new StringBuilder();
        for (Map.Entry<String,Object> param : params.entrySet()) {
            if (postData.length() != 0) postData.append('&');
            postData.append(URLEncoder.encode(param.getKey(), "UTF-8"));
            postData.append('=');
            postData.append(URLEncoder.encode(String.valueOf(param.getValue()), "UTF-8"));
        }
         byte[] postDataBytes = postData.toString().getBytes("UTF-8");

         HttpsURLConnection conn = (HttpsURLConnection)url.openConnection();
         conn.setRequestMethod("POST");
         conn.setRequestProperty("Host", "e.mail.ru");
         conn.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
         conn.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
         conn.setRequestProperty("Refer", "https://e.mail.ru/messages/inbox/");
         conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
         conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0");
         conn.setRequestProperty("Content-Length", String.valueOf(postDataBytes.length));
         conn.setRequestProperty("Cookie", cookie);
         conn.setRequestProperty("Connection", "keep-alive");
         conn.setDoOutput(true);
         conn.getOutputStream().write(postDataBytes);
		 
         String _Content = "";
         BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));

         
         for(int f = 0, c; (c = in.read()) >= 0; ++f)
				_Content += (char)c;
         	
         String _status = _Content.split("status")[1].split(",")[0].replace("\"", "");
         if(_status.contains("200")) ++_good;
		 else ++_bad;
	}catch(Throwable thro){
		System.out.println("Message hasn't been sent.");
	}
   }
	
   @Override
   public void run() {
		 int _thread = _sm  * bot, __counter = 0;
         GET("http://auth.mail.ru/cgi-bin/auth?Domain=mail.ru&Login=" + login + "&Password=" + pass, 1, _proxy, _port, login);
         GETS("https://e.mail.ru/messages/inbox/?back=1", 4, _proxy, _port);
	if(_next){
		for(int main = (_thread - _sm); main <= _thread; main++) {
         try {
            Date now = new Date(); 
            String adresat  = (_prover && main == _thread) ? _test : adr[main];
            String text_ 	= text[rand.nextInt(text.length)] + "<br>" + text[rand.nextInt(text.length)] + "<br>" + text[rand.nextInt(text.length)] + "<br>" + text[rand.nextInt(text.length)];
            String subject_ = subject[rand.nextInt(subject.length)];
            UR = UR + now.getTime() + generate(10, false);
			if(lnk_.length - 1 <= __counter++) __counter = 0;lnk = lnk_[__counter];
			POST(UR, _cookie, text_, subject_, login, adresat, _token, _proxy, _port);
         } catch (Throwable e) {
              System.out.println("Some error at the cycle for.");
         }
      }  
      System.out.println("Account: " + login + ". Number: " + bot + ". "+"Sent: " + (_sm + 1) + ". Good: " + _good  + ". Bad: " + _bad  + ". Proxy: " + Ip[0] + ":" + Ip[1] + ".");
	}
   }
}
