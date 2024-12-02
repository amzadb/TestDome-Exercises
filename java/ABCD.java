import java.util.List; 
import java.util.ArrayList;

public class ABCD {
    class A { }

    class B extends A { }

    class C extends B { }

    static class ABC {
        void test(List<? extends B> data) {
            System.out.println("test data: " + data.getClass());
        }
    }

    public static void main(String[] args) {
        ABC abc = new ABC();
        
        // List<A> data = new ArrayList<A>(); // Incorrect
        // List<B> data = new ArrayList<B>(); // Correct
        // List<C> data = new ArrayList<C>(); // Correct
        
        // ArrayList<A> data = new ArrayList<A>(); // Incorrect
        // ArrayList<B> data = new ArrayList<B>(); // Correct
        ArrayList<C> data = new ArrayList<C>(); // Correct

        abc.test(data);
    }
}