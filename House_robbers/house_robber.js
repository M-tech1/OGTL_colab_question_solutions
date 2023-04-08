function robber(arr)
{ result=0; for(i=0; i<arr.length; i++){
 if(i%2==0){
     result+= arr[i]; }
 }
 console.log(result) } robber([1,2,3,1])
