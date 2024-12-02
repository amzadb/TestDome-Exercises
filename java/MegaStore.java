public class MegaStore {

    public enum DiscountType {
        Standard,
        Seasonal,
        Weight;
    }
    
    public static double getDiscountedPrice(double cartWeight,
                                            double totalPrice,
                                            DiscountType discountType) {
        double discount = 0.0;
        
        switch(discountType) {
            case Standard:
                discount = totalPrice * (0.06);
                break;
            case Seasonal:
                discount = totalPrice * (0.12);
                break;
            case Weight:
                if (cartWeight <= 10) {
                    discount = totalPrice * (0.06);
                }
                if (cartWeight > 10) {
                    discount = totalPrice * 0.18;
                }
                break;
        }
        return totalPrice - discount;
    }
    
    public static void main(String[] args) {        
        System.out.println(getDiscountedPrice(12, 100, DiscountType.Weight));
        // should print 82.0
        System.out.println(getDiscountedPrice(8, 100, DiscountType.Weight));
        // should print 94.0
        System.out.println(getDiscountedPrice(25, 100, DiscountType.Standard));
        // should print 94.0
        System.out.println(getDiscountedPrice(25, 100, DiscountType.Seasonal));
        // should print 88.0
    }
}