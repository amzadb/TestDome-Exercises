function minimalNumberOfPackages(items, availableLargePackages, availableSmallPackages) {
    // There could be space in a package, so we need to check 
    // if there are enough packages to store the items

    // When items = 13, availableLargePackages = 3, availableSmallPackages = 10
    // The output should be 3, when 1 large package can store 5 items and 
    // 1 small package can store 1 item

    // When items = 22, availableLargePackages = 3, availableSmallPackages = 10
    // The output should be 3, when 1 large package can store 5 items and
    // 1 small package can store 1 item

    // When items = 23, availableLargePackages = 3, availableSmallPackages = 3
    // The output should be -1, when 1 large package can store 5 items and
    // 1 small package can store 1 item

    let largePackage = 5;
    let smallPackage = 1;

    console.log("No. of items to pack: " + items);
    
    // Check if there are enough packages to store the items
    if (items > availableLargePackages * largePackage + availableSmallPackages) {
        console.log("availableLargePackages: " + availableLargePackages + " that can hold items: " + (availableLargePackages * largePackage));
        console.log("availableSmallPackages: " + availableSmallPackages + " that can hold items: " + (availableSmallPackages * smallPackage));
        return -1;
    } else {
        // Calculate the number of large packages needed
        let largePackagesNeeded = Math.floor(items / largePackage);
        console.log("largePackagesNeeded: ", largePackagesNeeded);

        // Check if there are enough large packages available
        if (largePackagesNeeded <= availableLargePackages) {
            // Calculate the remaining items after using large packages
            let remainingItems = items - largePackagesNeeded * largePackage;
            console.log("remainingItems: ", remainingItems);

            // If enough large packages, return the number of large packages needed
            if (remainingItems === 0) {
                return largePackagesNeeded;
            } else {
                // If there are remaining items, add 1 more large package
                console.log("adding one more large package for the remaining items");
                let totalPackages = largePackagesNeeded + 1;
                console.log("totalPackages: ", totalPackages);
                return totalPackages;
            }
        } else {
            // Using all the available large packages
            console.log("availableLargePackages: ", availableLargePackages); 
            
            // Calculate the remaining items after using all the available large packages
            let remainingItems = (items - availableLargePackages * largePackage)
            console.log("remainingItems: ", remainingItems);    
            
            if (remainingItems === 0) {
                return availableLargePackages;
            } else {
                // Calculate the number of small packages needed
                let smallPackagesNeeded = Math.ceil(remainingItems);
                console.log("smallPackagesNeeded: ", smallPackagesNeeded);     
                
                // Check if there are enough small packages available
                if (smallPackagesNeeded <= availableSmallPackages) {
                    let totalPackages = availableLargePackages + smallPackagesNeeded;
                    console.log("totalPackages: ", totalPackages);  
                    return totalPackages;
                } else {
                    // If not enough small packages, return -1
                    return -1;
                }
            }
        }
    }
}
  
console.log(minimalNumberOfPackages(22, 3, 10)); // Output: 10
console.log(minimalNumberOfPackages(13, 3, 10)); // Output: 3
console.log(minimalNumberOfPackages(23, 3, 3)); // Output: -1
