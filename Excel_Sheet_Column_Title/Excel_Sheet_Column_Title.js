
function convertToTitle(n) {
    let sb = "";
    
    while(n > 0){
        let rem = (n-1)%26;
        sb += String.fromCharCode('A'.charCodeAt(0) + rem);
        n = Math.floor((n-1)/26);
    }
    
    return sb.split('').reverse().join('');
  }
  
  console.log(convertToTitle(701))