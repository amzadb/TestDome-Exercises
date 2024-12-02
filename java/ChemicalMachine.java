import java.util.ArrayList;
import java.util.Arrays;

public class ChemicalMachine {
    ArrayList<String> chemicals = new ArrayList<String>();
    ArrayList<String> chemicalBrown = new ArrayList<String>(Arrays.asList("GREEN", "YELLOW"));
    ArrayList<String> chemicalGreen = new ArrayList<String>(Arrays.asList("BLUE", "YELLOW"));
    ArrayList<String> chemicalOrange = new ArrayList<String>(Arrays.asList("GREEN", "CYAN"));
      
    public void add(String chemical) {
        chemicals.add(chemical);
    }

    public void applyHeat() {
       ArrayList<String> chemicalsHeat = new ArrayList<String>(chemicals);
       if (chemicalsHeat.equals(chemicalBrown)) {
           chemicals.clear();
           chemicals.add("BROWN");
       } else if (chemicalsHeat.equals(chemicalOrange)) {
           chemicals.clear();
           chemicals.add("ORANGE");
       } else if (chemicalsHeat.equals(chemicalGreen)) {
           chemicals.clear();
           chemicals.add("GREEN");
       } else if (chemicals.isEmpty()) {
           //chemicals.clear();
          // chemicals.add("");
       } else {
           chemicals.clear();
           chemicals.add("UNKNOWN");
       }
    }

    public ArrayList<String> emptyMachine() {
        ArrayList<String> chemicalsResult = new ArrayList<String>(chemicals);
        chemicals.clear();
        return chemicalsResult;
    }

    public static void main(String[] args) {
        ChemicalMachine machine = new ChemicalMachine();

        machine.add("GREEN");
        machine.add("YELLOW");
        machine.applyHeat();
        System.out.println(machine.emptyMachine()); // emptyMachine should return {"BROWN"}

        machine.add("GREEN");
        machine.add("CYAN");
        machine.applyHeat();
        System.out.println(machine.emptyMachine()); // emptyMachine should return {"ORANGE"}

        machine.add("RED");
        machine.add("YELLOW");
        machine.applyHeat();
        System.out.println(machine.emptyMachine()); // emptyMachine should return {"UNKNOWN"}
        
        machine.add("BROWN");
        machine.applyHeat();
        System.out.println(machine.emptyMachine()); // emptyMachine should return {"UNKNOWN"}
    }
}