
# Topic: Items in Containers

Given a string s consisting of items as "*" and closed compartments as an open and close "|", an array of starting indices startIndices, and an array of ending indices, determine the number of items in closed compartments within the substring between the two indices, inclusive.


•	An item is represented as an asterisk *
•	A compartment is represented as a pair of pipes | that may or may not have items between them ('|' = ascii decimal 124).

## Example:


•	s = '|**|*|*'
•	startIndices = [1,1]
•	endIndices = [5,6]

The String has a total 2 closed compartments, one with 2 items and one with 1 item. For the first par of indices, (1,5), the substring is '|**|*'. There are 2 items in a compartment.
For the second pair of indices, (1,6), the substring is '|**|*|' and there 2+1=3 items in compartments.
Both of the answers are returned in an array. [2,3].

You must now complete the numberOfItems function below. The function must return an integer array that contains the results for each of the startIndices[i] and endIndices[i] pairs.:
Number  has the following parameter(s):
•	s: A string to evaluate  
•	startIndices: An integer array, the starting indices.  
•	 endIndices: An integer array, the ending indices. 
Returns:
•	array

## Constraints:
•	1 ≤ m, n ≤ 105
•	 1 ≤ startIndices[i] ≤ endIndices[i] ≤ n
•	 Each character of s is either '*' or '|'
•	 Input Format For Custom Testing 

The first line contains a string, s.  
The next line contains an integer, n, the number of elements in startIndices.   
Each line i of the n subsequent lines (where 1 ≤ i ≤ n) contains an integer, startIndices[i].  
The next line repeats the integer, n, the number of elements in endIndices.  
Each line i of the n subsequent lines (where 1 ≤ i ≤ n) contains an integer, endIndices[i].
