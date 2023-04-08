
def find_duplicates(arr):
    # Create an empty list to store duplicate numbers
    duplicates = []
    # Loop through each element in the array
    for i in range(len(arr)):
        # Check if the current element is present in the remaining elements of the array
        if arr[i] in arr[i+1:]:
            # Check if the current element is not already in the duplicates list
            if arr[i] not in duplicates:
                # Add the current element to the duplicates list
                duplicates.append(arr[i])
    # If there are no duplicates found, return None
    if len(duplicates) == 0:
        return None
    # Otherwise, return the duplicates list
    else:
        return duplicates
