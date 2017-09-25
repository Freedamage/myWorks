import java.io.*;
import java.util.*;
import java.lang.Thread;

public class buhrobot{
	
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
	
	public static int sleep(int w8){	
	try{Thread.sleep(w8);}catch(Throwable e){System.out.println("Some exception during sleep.");}	
		return 0;
	}
	
	public static void main(String[] args) throws InterruptedException{	
		try{
			String l       = read("C:\\mailSender\\link.txt").split(">")[1];
			String p       = read("C:\\mailSender\\proxy.txt").split(">")[1];
			String c       = read("C:\\mailSender\\accs.txt").split(">")[1];
			String b       = read("C:\\mailSender\\baza.txt").split(">")[1];
			String t       = read("C:\\mailSender\\text.txt").split(">")[1]; 
			String s       = read("C:\\mailSender\\subject.txt").split(">")[1]; 	
			String[] adr   = b.split("\n");
			String[] lines = c.split("\n"); 
			String[] text  = t.split("\n"); 
			String[] prox  = p.split("\n"); 
			String[] subj  = s.split("\n");	
			int _stop = 0, proverka = 0;
				for (int main = 0, pr = 0; main <= lines.length - 1; main++){
					boolean _proverka = false;
					String[] __ln   = lines[main].split(";");
					String __login  = __ln[0];
					String __pass   = __ln[1];
					String __ip     = prox[pr];
					if(100/Integer.parseInt(args[0]) <= proverka++){_proverka = true; proverka = 0;}
					pr = prox.length - 1 <= pr ? 0 : ++pr; 
					_stop = _stop <= 160 ? ++_stop : sleep(30000);
					Thread t1 = new myThread("https://e.mail.ru/api/v1/messages/send?logid=", __login, main, __pass, adr, text, subj, l, __ip, args[0], _proverka, args[1], __ln[2], __ln[3]);
					t1.start();
				}
		}catch(Throwable anyEx){
			System.out.println("Some problems at initialization.");
		}	
	}
}
