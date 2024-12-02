public class FlimsyLadder {
    public static int usageCount(int[] ladder) {
        // Approach#1
        // if (ladder == null || ladder.length == 0) {
        //     return 0;
        // }
        
        // int x = ladder[0];
        // for (int step : ladder) {
        //     if (step < x) {
        //         x = step;
        //     }
        // }
        
        // return x - 1;

        // Approach#2
        if (ladder.length > 0) {
            int integrity = ladder[0];
            for (int i=0; i < ladder.length; i++) {
                if (ladder[i] < integrity) {
                    integrity = ladder[i];
                }
            }
            return integrity - 1;
        } else {
            return 0;
        }
    }

    public static void main(String[] args) {
        int[] ladder = { 7, 7, 8, 9, 6, 11, 9 };
        System.out.println(usageCount(ladder)); // Should print 5
        
        int[] ladder1 = { };
        System.out.println(usageCount(ladder1)); // Should print 0
    }   
}