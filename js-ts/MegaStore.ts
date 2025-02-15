enum DiscountType {
    Standard,
    Seasonal,
    Weight
}

function getDiscountPrice(cartWeight: number, totalPrice: number, discountType: DiscountType): number {
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