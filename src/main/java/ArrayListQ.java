import java.util.ArrayList;

public class ArrayListQ {
	
	public static void main(String[] args) {
		
	ArrayList a= new ArrayList();
	
	System.out.println(a.isEmpty());
	
	a.add("Vivek");
	
	System.out.println(a.isEmpty());
	
	System.out.println(a);
	System.out.println(a.toString());
	
	a.add(101);
	a.add('c');
	
	System.out.println(a.size());
	
	int n=a.size();
	System.out.println(a);
	
	System.out.println(a.add(10.5));
	System.out.println(a.get(1));
	System.out.println(a.remove(0));
	
	
	}

}
