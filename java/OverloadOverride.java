class X {
    void callMe() {
        System.out.println("Its me X");
    }
}

class Y extends X {
    void callMe() {
        System.out.println("Its me Y");
    }
    
    void callMe(String s) {
        System.out.println("Its me Y again");
    }
}
 
public class OverloadOverride {
    public static void main(String[] args) {
        X obj = new Y();
        obj.callMe();// Calling the overridden method
        // obj.callMe("xyz");
        
        Y obj1 = new Y();
        obj1.callMe();// Calling the overridden method
        obj1.callMe("xyz");// Calling the overloaded method
    }
}

/*
It gives an error when calling obj.callMe("xyz") because there are two potential issues:

    1. Object Type: You're creating an object of type X (X obj = new Y();) 
        but the actual object being created is of type Y since Y extends X. 
        While the variable is declared as X, it doesn't truly hold an X object.

    2. Method Accessibility: The callMe("xyz") method is the overloaded version defined 
        in class Y. Since obj (though declared as X) refers to an object of type Y, 
        you're trying to access a method that doesn't exist in class X. 
        X only has the non-parameterized callMe().
*/

/* In Java, an overridden method cannot be overloaded in the subclass. 

Here's why:
Overriding: When a subclass inherits a method from its parent class and redefines its behavior, 
it's called overriding. There can only be one method with the same name and parameter list 
in the inheritance hierarchy that gets called based on the object's actual type
(dynamic dispatch).

Overloading: Overloading allows you to have multiple methods with the same name
but different parameter lists within the same class. This helps differentiate methods based 
on the arguments they take.

Since overriding replaces the inherited method with a new definition in the subclass, 
there's no room for overloading the same method with a different parameter list. 
You can only have one overridden method with the same name and parameter list 
as the original in the superclass.
*/