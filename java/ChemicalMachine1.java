import java.util.ArrayList;
import java.util.List;

public class ChemicalMachine1 {
  
    public static List<String> applyHeat(List<String> ingredients) {
        
        List<String> outputColor = new ArrayList<String>(ingredients);

        if (outputColor.equals(List.of("BROWN", "YELLOW"))) {
            outputColor.clear();
            outputColor.add("MAGENTA");
        } else if (outputColor.equals(List.of("CYAN", "GREEN"))) {
            outputColor.clear();
            outputColor.add("ORANGE");
        } else if (outputColor.equals(List.of("GREEN", "YELLOW"))) {
            outputColor.clear();
            outputColor.add("BROWN");
            outputColor.add("YELLOW");
        } else if (outputColor.equals(List.of("YELLOW", "BROWN"))) {
            outputColor.clear();
            outputColor.add("UNKNOWN");
        } else {
            outputColor.clear();
            outputColor.add("UNKNOWN");
        }
        return outputColor;
    }
   
    public static void main(String[] args) {
        List<String> magentaMix = new ArrayList<String>(List.of("BROWN", "YELLOW"));

        System.out.println(applyHeat(magentaMix)); // should print [MAGENTA]
        System.out.println(applyHeat(new ArrayList<String>(List.of("YELLOW", "BROWN")))); // should print [UNKNOWN]
        System.out.println(applyHeat(new ArrayList<String>(List.of("GREEN", "YELLOW")))); // should print [BROWN, YELLOW]
    }
}