public class GamePlatform {
    public static double calculateFinalSpeed(double initialSpeed, int[] inclinations) {
        double speed = initialSpeed;
        
        for (int i = 0; i < inclinations.length; i++) {
            if (inclinations[i] < 0) {
                speed += Math.abs(inclinations[i]); 
            } else {
                speed -= Math.abs(inclinations[i]); 
                
                if (speed <= 0) {
                    return 0;
                }
            }
        }
        return speed;
    }

    public static void main(String[] args){
        System.out.println(calculateFinalSpeed(60.0, new int[] { 0, 30, 0, -45, 0 }));
    }
}