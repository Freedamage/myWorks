import java.net.*;
import java.net.URI;
import java.util.regex.*;
import java.io.*;
import java.util.*;
import javax.swing.*;
import java.awt.event.*;


public class parser{
	
	static String parse;
	
	public static void GET (String UR){
		
		String query = UR;
		
		HttpURLConnection connection = null;
		
		try{
			connection = (HttpURLConnection) new URL(query).openConnection();
			
			connection.setRequestMethod("GET");
			connection.setUseCaches(false);
			connection.setRequestProperty("Host", "www.instagram.com");
			connection.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0");			
			connection.setRequestProperty("Accept", "*/*");
			connection.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
			connection.setRequestProperty("Accept-Encoding", "UTF-8");
			connection.setRequestProperty("X-Requested-With", "XMLHttpRequest");
			connection.setRequestProperty("Referer", "https://www.instagram.com/arianagrande/following/");			
			connection.setRequestProperty("Cookie", "ух, какой ты любопытный! : )");
			connection.setRequestProperty("Connection", "keep-alive");			
			
			connection.connect();
			
			StringBuilder ab = new StringBuilder();
			
			if (HttpURLConnection.HTTP_OK == connection.getResponseCode()){
				
				BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf8"));
				
				String line;
				
				while ((line = in.readLine()) != null){
					ab.append(line);
				}
				
				parse = ab.toString();

			}else{
				System.out.println("fail: " + connection.getResponseCode() + ", " + connection.getResponseMessage());
			}
		}catch(Throwable cause){
			cause.printStackTrace();
		}finally{
			if (connection != null){
				connection.disconnect();
			}
		}
	}

	public static String read(String fileName) throws FileNotFoundException {
    
    StringBuilder sb = new StringBuilder();
    File file = new File(fileName);
	
    try {
        
        BufferedReader in = new BufferedReader(new FileReader(file.getAbsoluteFile()));
        try {
            
            String s;
            while ((s = in.readLine()) != null) {
                sb.append(s);
                sb.append("\n");
            }
        } finally {
            
            in.close();
        }
    } catch(IOException e) {
        throw new RuntimeException(e);
    }
 
   
    return sb.toString();
	}
	
	public static void main(String[] args) throws InterruptedException{	
	
		int yes = 0;
		int no = 0;
		
		try{
			
		String r = read("C://first.txt");
		
		String[] lines = r.split("\n");
		
		System.out.println("\n");
		
		for (int a = 1; a <= lines.length - 1; a++){	
		
			String cUser = lines[a];		
			
			GET("https://www.instagram.com/" + cUser + "/");
			Pattern p = Pattern.compile("owner.*?,"); 
			Matcher m = p.matcher(parse);
			
			String id = "";
			
				if (m.find()){
					Pattern pt = Pattern.compile("\\d+"); 
					Matcher mt = pt.matcher(m.group());
						if (mt.find()){
						id = mt.group();
						}
				}
				
			GET("https://www.instagram.com/graphql/query/?query_id=17874545323001329&variables={%22id%22:%22" + id + "%22,%22first%22:9000}");
			
			Pattern ptr = Pattern.compile("username.*?,"); 
			Matcher mtr = ptr.matcher(parse);
			
			String rt = read("C://second.txt");
		
	   	    String[] linest = rt.split("\n");
			
			int subcrabed = 0; 
					
			while(mtr.find()){  

				String username = mtr.group().replace("username\": ", "").replace("\",", "").replace("\"", "");
				   
					for (int b = 1; b <= linest.length - 1; b++){
					
						if (username.compareTo(linest[b]) == 0){
							subcrabed++;
						}

					}
						
				}

			if ((linest.length - 1) == subcrabed){	
				System.out.println("Аккаунт: " + cUser + " подписан на все " + subcrabed  + " аккаунт(ов/а) из списка.");
				yes++;
			}else{ 
				no++;
				System.out.println("Аккаунт: " + cUser + " подписан не на все аккаунты из списка.");
			}	
	}
		System.out.println("\nИтог:\n\tВсего аккаунтов: " + (lines.length - 1) + ".\n\tПодписанные: " + yes + ".\n\tНе подписанные: " + no + ".");
		}catch(Throwable throwa){
			System.out.println(throwa.toString());
		}
   }  
	
}
