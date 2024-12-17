function minimalNumberOfPackages(items: number, availableLargePackages: number, availableSmallPackages: number): number {
    const largePackageCapacity = 5;
    const smallPackageCapacity = 1;

    // Calculate the maximum items that can be packed with available packages
    const maxItemsWithAvailablePackages = availableLargePackages * largePackageCapacity + availableSmallPackages * smallPackageCapacity;

    // If there are not enough packages to store the items, return -1
    if (items > maxItemsWithAvailablePackages) {
        return -1;
    }

    // Calculate the number of large packages needed
    let largePackagesNeeded = Math.floor(items / largePackageCapacity);
    let remainingItems = items % largePackageCapacity;

    console.log("items: " + items);
    console.log("availableLargePackages: " + availableLargePackages);
    console.log("availableSmallPackages: " + availableSmallPackages);
    console.log("largePackagesNeeded: " + largePackagesNeeded);

    // If we have enough large packages to cover the items
    if (largePackagesNeeded <= availableLargePackages) {   
        console.log("remainingItems: " + remainingItems);
        // If remaining items can be packed in one large package
        if (remainingItems < largePackageCapacity) {
            return largePackagesNeeded + 1;
        }
        // If remaining items can be packed with small packages
        else if (remainingItems <= availableSmallPackages) {
            return largePackagesNeeded + remainingItems;
        } else {
            return -1;
        }
    } else {
        // Use all available large packages
        remainingItems = items - availableLargePackages * largePackageCapacity;
        console.log("remainingItems after filling the available large packages: " + remainingItems);
        // If remaining items can be packed with small packages
        if (remainingItems <= availableSmallPackages) {
            return availableLargePackages + remainingItems;
        } else {
            return -1;
        }
    }
}

// Test cases
// console.log(minimalNumberOfPackages(22, 3, 10)); // Output: 10
// console.log(minimalNumberOfPackages(13, 3, 10)); // Output: 3
console.log(minimalNumberOfPackages(23, 3, 3)); // Output: -1