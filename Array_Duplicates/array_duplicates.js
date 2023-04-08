
function findDuplicates(arr) {
    // Create an empty array to store duplicate numbers
    let duplicates = [];
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is present in the remaining elements of the array
      if (arr.slice(i+1).includes(arr[i])) {
        // Check if the current element is not already in the duplicates array
        if (!duplicates.includes(arr[i])) {
          // Add the current element to the duplicates array
          duplicates.push(arr[i]);
        }
      }
    }
    // If there are no duplicates found, return null
    if (duplicates.length === 0) {
      return null;
    }
    // Otherwise, return the duplicates array
    else {
      return duplicates;
    }
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5, 2, 4, 6];
  const duplicates = findDuplicates(arr);
  console.log(duplicates); // Output: [2, 4]
  