const DiscountTypes = {
    Standard: "Standard",
    Seasonal: "Seasonal",
    Weight: "Weight"
};

function getDiscountPrice(cartWeight: number, totalPrice: number, discountType: string) {
    switch (discountType) {
        case DiscountType.Standard:
            return totalPrice - (totalPrice * 0.06);
        case DiscountType.Seasonal:
            return totalPrice - (totalPrice * 0.12);
        case DiscountType.Weight:
            if (cartWeight > 10) {
                return totalPrice - (totalPrice * 0.18);
            } else {
                return totalPrice - (totalPrice * 0.06);
            }
    }
}
  
console.log(getDiscountPrice(12, 100, DiscountTypes.Weight));