
function genTri(size){
    for(let i= 1; i<=size; i++){
      let therow = "";
      for(let j=1; j<=i; j++){
        therow += "*";
      }
      console.log(therow);
    }
  }
  
  genTri(10);
  